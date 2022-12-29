const express = require('express');
const router = express.Router();
const { registerHandler, loginHandler, getUser} = require('../Controllers/userControllers')


//create User 
router.post('/', registerHandler);

// Login functionallity
router.post('/login', loginHandler);
// get user info 
router.get('/me', getUser)

module.exports = (router);