import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-white h-[44vh] gap-4">
        <div className="font-bold text-3xl justify-center items-center flex gap-2">Buy me A Chai

          <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90x3clj97tbT8cpsPiSXJu6x9cE7mwNVK2w&s" width={88} alt="" />
        </div>
        <p>
          A crowdfunding platform for creators.get funded by your fans and followers. Start Now!
        </p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32">
        <h2 className="text-2xl font-bold text-center mb-14 ">Your fans can buy you a chai!</h2>
        <div className="flex gap-5 justify-around">
          <div className="item  space-y-3 flex flex-col items-center justify-center">
            <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCMr6exRb_OegMXGz8fWyfQk40lhcSIlWHA&s" width={120} alt="" />
            <p className="ml-2 font-bold">Fund yourself</p>
            <p className="text-center"> Your fans are available for you  to help you</p>
          </div>
          
          <div className="item  space-y-3 flex flex-col items-center justify-center">
            <img className="rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIbzXHPT1aCeiGxWuCb3jPqxi7fTursJKIQ&s" width={80} alt="" />
            <p className="ml-2 font-bold">Fund yourself</p>
            <p className="text-center"> Your fans are available for you  to help you</p>
          </div>
          <div className="item  space-y-3 flex flex-col items-center justify-center">
            <img className="rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngiCYSZBC0L9JaZT83kfXH8FOLVS5iEuJtA&s" width={80} alt="" />
            <p className="ml-2 font-bold">Fund yourself</p>
            <p className="text-center"> Your fans are available for you  to help you</p>
          </div>
        </div>

      </div>

      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto py-32 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-14 ">Learn More about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/voF1plqqZJA?si=uq-uRWJXX8e2XigS" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </>
  );
}
