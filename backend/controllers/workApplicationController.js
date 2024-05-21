
import WorkApplication from  '../model/workApplyed.js';

// Controller functions for Work Application model


export const getWorkApplicationById = async (req, res) => {
  // Implementation to get work application by ID
  const { id } = req.params;
  try {
    const workApplication = await WorkApplication.find({userId:id});
    if (workApplication) {
      res.status(200).json(workApplication);
    } else {
      res.status(404).json({ message: "Work application not found" });
    }

}catch (err) {
  return next(err);
}
};

export const createWorkApplication = async (req, res) => {
 const { workOfferId,
  userId,
  date
} = req.body;

try {
  const workApplication = new WorkApplication({
    workOfferId,
    userId,
    date
  });
  const newWorkApplication = await workApplication.save();
  res.status(201).json(newWorkApplication);
}
catch (err) {
  res.status(400).json({ message: err.message });
}
}

export const deleteWorkApplication = async (req, res) => {
  // Implementation to delete a work application
  const { id } = req.params;
  try {
    const workApplication = await WorkApplication.findById(id);
    if (workApplication) {
      await workApplication.remove();
      res.json({ message: "Work application deleted" });
    }
    else {
      res.status(404).json({ message: "Work application not found" });
    }

}catch (err) {
  return next(err);
}
}
