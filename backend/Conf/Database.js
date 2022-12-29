const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDatabase = async() =>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Succesfully Authenticated Database at:${conn.connection.host}`.green)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDatabase