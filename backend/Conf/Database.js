const mongoose = require('mongoose');
const colors = require('colors')
mongoose.set('strictQuery', false);

const connectDatabase = async() =>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Succesfully Authenticated Database:${conn.connection.host}`.green.underline)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDatabase