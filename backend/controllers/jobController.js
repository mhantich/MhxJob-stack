
import Job from  '../Model/job.js'


// Controller functions for Job model
export const  getAllJobs = async (req, res) => {
  try {
    // const jobs = await Job.find().populate("categories");
    const jobs = await Job.find().populate('categories');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



