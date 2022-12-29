const asyncHandler = require ('express-async-handler');



//register user 
const registerUser = asyncHandler( async (req, res)=>{
    const { name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400).json({ message: "please add info"});
    }
    const user = req.body;
    res.status(200)
    res.json(user)
})

module.exports = {
    registerUser,
}