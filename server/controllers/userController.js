const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config()



// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  };


// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone, designation } = req.body;
  
    // Validation
    if (!name || !email || !password || !phone || !designation) {
      res.status(400);
      throw new Error("Please fill in all required fields");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }
  
    // Check if user email already exists
    const userExists = await User.findOne({ phone });
  
    if (userExists) {
      res.status(400);
      throw new Error("Phone number already already been registered");
    }
  
    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      phone,
      designation
    });
  
    //   Generate Token
    const token = generateToken(user._id);
  
    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
  
    if (user) {
      const { _id, name, email, photo, phone,designation} = user;
      res.status(201).json({
        _id,
        name,
        email,
        photo,
        phone,
        designation,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  });

  //login user

  const loginUser = asyncHandler(async(req,res) =>{
     const {phone,password} = req.body;

     //validate request
     if(!phone || !password){
      res.status(400);
      throw new Error("please add phone and password")

     }
     //check user exists

     const user = await User.findOne({phone})

     if(!user){
      res.status("400")
      throw new Error("User not found")
    

     }
     //check password
    const passwordIsCorrect = await bcrypt.compare(password, user.password)

     //generate token 
     const token = generateToken(user._id);
     if(passwordIsCorrect){
      // Send HTTP-only cookie
     res.cookie("token", token, {
       path: "/",
       httpOnly: true,
       expires: new Date(Date.now() + 1000 * 86400), // 1 day
       sameSite: "none",
       secure: true,
     });
   }
     if (user && passwordIsCorrect) {
       const { _id, name, email, photo, phone, designation} = user;
       res.status(200).json({
         _id,
         name,
         email,
         photo,
         phone,
         token,
         designation
       });
     } else {
       res.status(400);
       throw new Error("Invalid email or password");
     }
  })


  module.exports = {
    registerUser,
    loginUser
   };