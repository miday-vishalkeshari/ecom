const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')
const connectDB = require('./config/db'); // Use CommonJS require syntax
const authRoutes = require('./routes/authRoute');
const categoryRoutes = require('./routes/CategoryRoutes')
const productRoutes = require('./routes/ProductRoutes')

// Config environment for .env
dotenv.config();

// Database config  connecting to database
connectDB();

// Create an Express app  adding express instance
const app = express();  

// Middleware             
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/api/v1/auth", authRoutes); 
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

// REST API
app.get('/', (req, resp) => {
    resp.send("<h1>Welcome to your eCommerce app</h1>");
});

const PORT = process.env.PORT || 8080; // Use uppercase PORT  coming from env

// Run the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgCyan.white);
});
