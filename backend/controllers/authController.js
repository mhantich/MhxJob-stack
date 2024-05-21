import User from "../Model/user.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/handleErrors.js";
import jwt from "jsonwebtoken";
export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(errorHandler(400, "Validation error", errors.array()));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      // If no user is found with the provided email
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      // If the provided password is incorrect
      return next(errorHandler(400, "Incorrect password"));
    }
    // If both user and password are valid, generate JWT token and send response
    const token = jwt.sign(
      {
        id: validUser._id,
        isAdmin: validUser.isAdmin,
        isWorker: validUser.isWorker,
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure:process.env.PRODUCTION==='true'?true:false
      })
      .json(rest);
  } catch (error) {
    // Handle other errors

    return next(errorHandler(500, "Internal Server Error"));
  }
};

export const regesterController = async (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errorHandler(400, "Validation error", errors.array()));
  }
  const { name, gender, age, username, lastname, email, password, isWorker } =
    req.body.user;
  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = new User({
    name,
    gender,
    age,
    username,
    lastname,
    email,
    password,
    isWorker,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    next(errorHandler(500, "cant regester"));
  }
};
export const checkAuth = async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findById(req.user.id);

      const { password, ...rest } = user._doc;
      return res.status(200).json(rest);
    }
    res.sendStatus(401);
  } catch (error) {
    res.sendStatus(500);
  }
};
export const logout = async (req, res) => {
  try {
    res.cookie("access_token", {
      maxAge: 0,
      httpOnly: true,
      secure: process.env.PRODUCTION === "true" ? true : false,
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
  }
};
