import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { songRoutes } from './api/routes/songs.js';
import errorHandlingMiddleware from './api/middleware/errorHandling.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';


dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', songRoutes);

// Static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catchall
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Error handling middleware
app.use(errorHandlingMiddleware);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
