import mongoose from "mongoose";



// Define the schema for work applications
const workApplicationSchema = new mongoose.Schema({
  workOfferId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  }
},
{ timestamps: true });

// Create the WorkApplication model
const WorkApplication = mongoose.model('WorkApplication', workApplicationSchema);

export default WorkApplication;
