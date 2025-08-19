import mongoose from "mongoose";

const connectDB  = async()=>{
    try{
const conn = await mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser: true,
});
console.log(`MongoDb connected:{conn.connection.host}`)
    }catch(erro){
console.error(error.message);
process.exit(1);
    }
}

export default connectDB;