const express = require('express');
const router = express.Router();



//create User 
router.post('/', (req, res)=>{
    res.json({message: 'User created'})
});

// Login functionallity
router.post('/login', (req, res)=>{
    res.json({message: 'User logged in'})
});
// get user info 
router.get('/me', (req, res)=>{
    res.json({message: 'User info'})
});

module.exports = (router);