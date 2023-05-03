const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const songRoutes = require('./api/routes/songs');
const errorHandlingMiddleware = require('./api/middleware/errorHandling');

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', songRoutes);


// Error handling middleware
app.use(errorHandlingMiddleware);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
