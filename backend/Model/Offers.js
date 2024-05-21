import mongoose from "mongoose";


// Define the schema for offers
const offerSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  hoursWork: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "closed"],
    default: "active",
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  categories: [{
    type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }],
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

// Create the Offer model
const Offer = mongoose.model("Offer", offerSchema);

export default Offer;
