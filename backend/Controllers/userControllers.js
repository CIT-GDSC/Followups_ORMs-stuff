const asyncHandler = require ('express-async-handler');
const Consumer = require('../Models/userModels');
const bcrypt = require('bcryptjs');

//register user 
const registerHandler = asyncHandler( async (req, res)=>{

    const { name, email, mobileNumber, password} = req.body
    if(!name || !email || !password || !mobileNumber){
        res.status(400).json({ message: "Field cannot be blank"});
    } 
    // validate user

    const validateUser = await Consumer.findOne({email}); 

    if(validateUser){
        res.status(406).json(`User with ${email} is already registered`)
    }
    //hash password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);


    // create user
    const user = await Consumer.create({
        name,
        email,
        mobileNumber,
        password: hashedPassword 
    });
    if(user){
        res.status(200)
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.mobileNumber,
        });
    } else{
        res.status(403)
        throw new Error ('Invalid user data');
    }
});

//login functionality 
const loginHandler = asyncHandler( async ( req, res)=>{
    const { email, mobileNumber, password} = req.body;

    // check if user exists
    const user = await  Consumer.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id : user.id,
            name: user.name,
            phone: user.mobileNumber,
            email: user.email
        })
    } else {
        res.status(406)
        throw new Error ("Invalid user credentials");
    }
});

const getUser = asyncHandler( async( req, res)=>{
    res.json(200).status({ message: " user info"})
})

module.exports = {
    registerHandler,
    loginHandler,
    getUser
}