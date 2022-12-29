const express = require('express');
const dotenv = require('dotenv');
const PORT = 5000;
const app = express();



app.get('/api/users', (req, res)=>{
    res.status(200).json({message: 'welcome to api'})
})



app.listen(PORT, () => {console.log(`server started on port ${PORT}`)});