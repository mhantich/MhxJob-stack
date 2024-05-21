// validation.js
import { body } from "express-validator";

export const validateRegistration = [
  body("user.name").notEmpty().withMessage("Name is required"),
  body("user.gender").notEmpty().withMessage("Gender is required"),
  body("user.age")
    .notEmpty()
    .withMessage("Age is required")
    .isInt({ min: 0 })
    .withMessage("Age must be a positive integer"),
  body("user.username").notEmpty().withMessage("Username is required"),
  body("user.lastname").notEmpty().withMessage("Lastname is required"),
  body("user.email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("user.password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("user.isWorker")
    .notEmpty()
    .withMessage("isWorker is required")
    .isBoolean()
    .withMessage("isWorker must be a boolean value"),
];
export const validatelogin = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const acceptedValues = ["pending", "accepted", "rejected"];
// Validation middleware for the 'accept' field
export const validateAcceptField = body("status")
  .notEmpty()
  .withMessage("Accept field must not be empty")
  .custom((value) => {
    if (!acceptedValues.includes(value)) {
      throw new Error(
        `Accept field must be one of: ${acceptedValues.join(", ")}`
      );
    }
    return true;
  });

export const validateCategory = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("photo")
    .notEmpty()
    .withMessage("Photo is required")
    .isURL()
    .withMessage("Photo must be a valid URL"),
];

export const validateJob = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("categories").isArray().withMessage("Categories must be an array"),
  body("photo")
    .notEmpty()
    .withMessage("Photo is required")
    .isURL()
    .withMessage("Photo must be a valid URL"),
];

export const validateOffer = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("categories").isArray().withMessage("Categories must be an array"),
  body("photo")
    .notEmpty()
    .withMessage("Photo is required")
    .isURL()
    .withMessage("Photo must be a valid URL"),

  // Add more validation rules for each field as needed
  body("jobId").notEmpty().withMessage("Job ID is required"),
  body("userId").notEmpty().withMessage("User ID is required"),
  body("experience").notEmpty().withMessage("Experience is required"),
  body("hoursWork")
    .notEmpty()
    .withMessage("Hours of work is required")
    .isNumeric()
    .withMessage("Hours of work must be a number"),
  // Add more validation rules for each field as needed
];



export const validateWorkApplyed = [
  body("workOfferId").notEmpty().withMessage("Work Offer ID is required"),
  body("userId").notEmpty().withMessage("User ID is required"),
  body("date").notEmpty().withMessage("date is required"),
];

export const validateReview = [
  body('reviewerId').notEmpty().withMessage('User ID is required'),
  body('workerId').notEmpty().withMessage('Job ID is required'),
  body('rating').notEmpty().withMessage('Rating is required').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('comment').notEmpty().withMessage('Comment is required'),
];