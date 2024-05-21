import express  from 'express'
import mongoose  from 'mongoose'
import dotenv  from 'dotenv'
import bodyParser  from 'body-parser'
import cookieParser  from 'cookie-parser'
import cors  from 'cors'
import helmet  from 'helmet'
import path from 'path';
import categoryRoutes  from './routes/categoryRoutes.js'
import jobRoutes  from './routes/jobRoutes.js'
import offerRoutes  from './routes/offerRoutes.js'
import workApplicationRoutes  from './routes/workApplicationRoutes.js'
import login  from './routes/auth.js'



dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(cookieParser()); // Parse cookies
app.use(cors({credentials:true,origin:true}))

app.use(helmet()); // Set various HTTP headers for security

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define routes



app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/offers', offerRoutes);
app.use('/api/v1/work-applications', workApplicationRoutes);
app.use('/api/v1/auth', login);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    err: err.err // Include the err property in the response

  });
});

const port = process.env.PORT;
console.log(port)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
