const asyncHandler = require ('express-async-handler');


//register user 
const registerHandler = asyncHandler( async (req, res)=>{
    const { name, email, mobileNumber, password} = req.body
    if(!name || !email || !password || mobileNumber){
        res.status(400).json({ message: "please add info"});
    } 
    res.status(200).json( req.body, 'registered')
});

//login user 
const loginHandler = asyncHandler( async ( req, res)=>{
    const { email, password} = req.body;

    if(!email || !password){
        res.status(401).json({ message: " Credentials cant be empty"})
    }

    res.json({ message: "user logged in"})
});

const getUser = asyncHandler( async( req, res)=>{
    res.json(200).status({ message: " user info"})
})

module.exports = {
    registerHandler,
    loginHandler,
    getUser
}