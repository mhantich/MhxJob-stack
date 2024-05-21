// // offerController.js
import Offer from  '../Model/Offer.js';

// Controller functions for Offer model
export const getAllOffers = async (req, res) => {
  // const result = await Offer.insertMany(offers);
  const filter={}
  const sort={}
  if(req.query.cati){
    filter.categories=req.query.cati
}

if(req.query.city){
    filter.city=req.query.city
}

if(req.query.country){
  filter.country=req.query.country
}
if(req.query.JObid){
  filter.jobId=req.query.JObid
}

if(req.query.sort){
    sort[req.query.sort]=req.query.order==='asc'?1:-1
}

  try {
    const offers = await Offer.find(filter).populate({
      path: 'userId',
      select: '_id profilePhoto username' 
    }).populate({
      path: 'categories' // Assuming 'cati' is the name of the field you want to populate
      // You can add additional options like select, model, etc. if needed
  }).sort(sort);
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: 'server err' });
  }
};
// 
export const getOfferById = async (req, res) => {
  // Implementation to get offer by ID
  const { id } = req.params;
  try {
    const offer = await Offer.findById(id);
    if (offer) {
      res.status(200).json(offer);
    } else {
      res.status(404).json({ message: "Offer not found" });
    }

}catch (err) {
  res.status(400).json({ message: err.message });
}
}






export const createOffer = async (req, res) => {
 const { jobId, userId, experience, hoursWork, salary, country, city } = req.body;
 const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(errorHandler(400, "Validation error", errors.array()));
  }
  try {
    const offer = new Offer({
      jobId,
      userId,
      experience,
      hoursWork,
      salary,
      country,
      categories,
      city,
    });
    const newOffer = await offer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
 
}
};



