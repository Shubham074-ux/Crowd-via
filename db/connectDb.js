import mongoose from "mongoose";

const connectDB  = async()=>{
    try{
const conn = await mongoose.connect('mongodb+srv://tiwarishubham1607074:BCY0VCwkjGb7y0FY@gmc.zspz9ib.mongodb.net/chai?retryWrites=true&w=majority&appName=GMC',{
    useNewUrlParser: true,
});
console.log(`MongoDb connected:{conn.connection.host}`)
    }catch(erro){
console.error(error.message);
process.exit(1);
    }
}

export default connectDB;