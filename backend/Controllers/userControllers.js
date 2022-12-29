const asyncHandler = require ('express-async-handler');
const User = [];


//register user 
const registerUser = asyncHandler( async (req, res)=>{
    const { name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400).json({ message: "please add info"});
    }
    const user = req.body;
    res.status(200)
    res.json(user)
    User.push(user);
    console.log(User)
});

//login user 
const loginUser = asyncHandler( async ( req, res)=>{
    const { email, password} = req.body;
    

    
});

module.exports = {
    registerUser,
    loginUser,
}