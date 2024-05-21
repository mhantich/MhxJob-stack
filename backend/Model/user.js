import mongoose from "mongoose";


// Define the schema for the user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profilePhoto: {
    type: String, // Assuming profile photo is stored as a URL
    default: 'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f5' // Assuming default profile photo URL

  },
  gender: {
    type: String,
    enum: ['Male', 'Female'] // Assuming gender can be one of these values
  },
  age: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true // Assuming usernames should be unique
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Assuming emails should be unique
  },
  password: {
    type: String,
    required: true
  },
  isWorker: {
    type: Boolean,
    default: false // Assuming default value for isWorker is false
  },
  isAdmin: {
    type: Boolean,
    default: false // Assuming default value for isWorker is false
  }
},
{ timestamps: true });

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
