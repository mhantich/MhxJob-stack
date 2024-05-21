import mongoose from "mongoose";

// Define the schema for the job
const jobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // Assuming you have a Category model defined
        required: true,
      },
    ],
    photo: {
      type: String, // Assuming photo is stored as a URL
      default: "default_job_photo_url.jpg", // You can set a default photo URL here
    },
  },
  { timestamps: true }
);

// Create the Job model
const Job = mongoose.model("Job", jobSchema);

export default Job;
