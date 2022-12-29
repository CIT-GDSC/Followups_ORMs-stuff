const express = require('express');
const router = express.Router();
const { registerUser, loginUser} = require('../Controllers/userControllers')


//create User 
router.post('/', registerUser);

// Login functionallity
router.post('/login', loginUser);
// get user info 
router.get('/me', (req, res)=>{
    res.json({message: 'User info'})
});

module.exports = (router);