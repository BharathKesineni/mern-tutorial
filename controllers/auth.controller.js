const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken");
const bcrypt = require("bcryptjs/dist/bcrypt");

const signupUser = async(req,res) => {
    try {
        const {name,username,password,confirmPassword,gender} = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match"});
        }
        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "Username already exists"});
        }
        // HASH PASSWORD HERE 
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User ({
            name,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic: girlProfilePic
        })
        
  if(newUser) {

     generateTokenAndSetCookie(newUser._id,res);
    await newUser.save();

    res.status(201).json({ 
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic
    })
  } else {
    res.status(400).json({error: "Failed to create user"})
  }

    } catch (error) {
        console.log("Error in signUp Controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
    
}

const loginUser = async(req,res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});   
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect) {
            return res.status(401).json({error: "Invalid credentials"})
        }
        generateTokenAndSetCookie(user._id,res);

        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"Internal server error"})
        
    }
}    


 const logoutUser = (req,res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message: "Logged out Successfully"})
        
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"Internal server error"})
        
    }
};    



module.exports ={loginUser,logoutUser,signupUser}