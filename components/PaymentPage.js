"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { notFound } from 'next/navigation'
// import payments from 'razorpay/dist/types/payments'
const PaymentPage = ({ username }) => {

  // const {data:session} = useSession()
  const [payments, setPayments] = useState([])
  const [paymentform, setPaymentform] = useState({})
  const [currentuser, setcurrentuser] = useState({})

  useEffect(() => {
    getData()
  }, [])



  const handlechange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentuser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
    // console.log(u, dbpayments)
  }

  const pay = async (amount) => {

    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {

      "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. 
      "currency": "INR",
      "name": "Buy me a chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "http://localhost:3000/api/razorpay",
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='cover w-full '>
        <img className='object-cover h-80 w-full ' src={currentuser.coverpic} alt="" />
        <div className='absolute bottom-48 right-[46%] '>
          <img className='rounded-full border-white border-[1px] ' width={100} height={100} src={currentuser.profilepic} alt="" />
        </div>
      </div>
      <div className='info flex justify-center items-center my-4 text-white flex-col gap-2 '>
        <div className='font-bold text-lg'>
          @{username}
        </div>
        <div className='text-slate-300'>
          Lets help {username} 🙂.
        </div>

        <div className='text-slate-300'>
          {payments.length} Payments. {currentuser.name} has raised ₹{payments.reduce((a,b)=>a+b.amount,0)}. 
        </div>

        <div className="payment flex gap-3 mb-6 mt-11 w-[80%]">

          <div className="supporters w-1/2 bg-slate-900 p-5 rounded-lg">
            <h2 className='text-2xl font-bold mb-3 '>Supporters</h2>
            {/* list of supporters */}
            <ul className='mx-5'>

            {payments.length === 0 && <li>No payments yet </li>}
                {payments.map((p,i)=>{
              return <li className='my-4 text-lg text-slate-300 gap-2'> <span> {p.name} donated <span className='font-bold text-white'>₹{p.amount} </span> with a message "{p.message}" </span></li>
                
})}

            </ul>
          </div>
          <div className="make-payments w-1/2 bg-slate-900 p-5  rounded-lg">
            <h2 className='text-2xl font-bold mb-3 '>Make a Payment</h2>
            <div className='flex-col flex gap-3'>
              <div>
                <input onChange={handlechange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg  bg-slate-800' placeholder='Enter Name' />
              </div>
              <input onChange={handlechange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg  bg-slate-800' placeholder='Enter Message' />
              <input onChange={handlechange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg  bg-slate-800' placeholder='Enter Amount' />
              <div className='text-center'>
              <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="w-1/2 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Pay
              </button>

              </div>
            </div>
            <div className='flex gap-2 mt-5'>
              <button className="bg-slate-800 p-3 rounded-lg " onClick={() => pay(1000)}>  Pay ₹10</button>
              <button className="bg-slate-800 p-3 rounded-lg " onClick={() => pay(2000)}  >Pay ₹20</button>
              <button className="bg-slate-800 p-3 rounded-lg " onClick={() => pay(3000)}  >Pay ₹30</button>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default PaymentPage
