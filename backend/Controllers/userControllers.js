const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Consumer = require('../Models/userModels');

const registerHandler = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  if (!name || !email || !phoneNumber || !password) {
    res.status(403);
    throw new Error('Blank field detected, Please Complete required fields');
  }

  //checking if user already exists in the database
  const validUser = await Consumer.findOne({ email });
  if (validUser) {
    res.status(400);
    throw new Error('User already registered, Please Log in');
  }

  //hash password using bcrypt
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create consumer
  const user = await Consumer.create({
    name,
    email,
    phoneNumber,
    password: hashedPassword,
  });
  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(403);
    throw new Error('Invalid user Input');
  }
});

//login Handler

const loginHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check if required input has been passed down
  if (!email || !password) {
    throw new Error('Blank fields detected, please fill entire fields');
  }

  //check if we have the user in the database
  const user = await Consumer.findOne({ email });
  if( user && ( await bcrypt.compare(password, user.password))){
    res.json({
        _id: user.id,
        name: user.name,
        email: user.email
    });

  } else{
    res.status(403)
    throw new Error('Invalid credentials')
  }

});

const getUser = asyncHandler( async (req, res)=>{
    res.status(200).json(req.user)
});


module.exports = {
    registerHandler,
    loginHandler,
    getUser
}