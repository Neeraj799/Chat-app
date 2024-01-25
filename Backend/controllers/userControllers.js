const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, image_url } = req.body;
    console.log(req.body)
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("Email already exists");
    }


    const user = await User.create({
        username,
        email,
        password,
        image_url,
    });
    console.log(user);

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            image_url: user.image_url,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            image_url: user.image_url,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }

})

module.exports = { registerUser, authUser };