const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config({path: path.resolve(__dirname+'/.env')})
const PORT = process.env.PORT || 5000;
const connectDatabase = require('./Conf/Database')
const { errorHandler } = require('./Middleware/errorHandler')

const app = express();
connectDatabase();



app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(errorHandler)


//routes
app.use('/api/users', require('./Routes/UserRoutes'));


app.listen(PORT, () => {console.log(`server started on port ${PORT}`)});