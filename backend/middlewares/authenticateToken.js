import { errorHandler } from "../utils/handleErrors.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
  
    return res
      .status(401)
      .json({ success: false, messages: "You are not authentcated " });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, messages: "token is not valid" });
    }
    req.user = user;
  

    next(); // Call next() inside the callback function
  });
};

export const verifyuser = (req, res, next) => {
  verifyToken(req, res, () => {
    // Check if the user ID matches the requested ID or if the user has an 'admin' role
    if (req.user.id === req.params.id) {
      next(); // User is authorized, continue to the next middleware
    } else {
      res
        .status(401)
        .json({ success: false, messages: "You are not authorized" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res
        .status(401)
        .json({ success: false, messges: `You are not authorized` });
    }
  });
};

export const verifyWorker = (req, res, next) => {
  verifyToken(req, res, () => {

    if (req.user.isWorker) {
      next(); // User is a worker, continue to the next middleware or route handler
    } else {
      res
        .status(401)
        .json({
          success: false,
          message: "You are not authorized as a worker",
        });
    }
  });
};
