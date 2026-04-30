const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const errorHandler = require('./common/middleware/error');
const env = require('./config/env');
const logger = require('./config/logger');

const app = express();

// Request ID Middleware
app.use((req, res, next) => {
  req.id = req.headers['x-request-id'] || uuidv4();
  next();
});

// Security & Utility Middleware
app.use(helmet());
app.use(cors({ origin: '*' })); // Allow all for dev, restrict in prod
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env.NODE_ENV !== 'test') {
  app.use(morgan('dev', {
    stream: { write: (message) => logger.info(message.trim()) }
  }));
}

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
// app.use('/api/auth', require('./modules/auth/auth.routes'));
// app.use('/api/users', require('./modules/users/user.routes'));
app.use('/api/stores', require('./modules/stores/store.routes'));
// app.use('/api/products', require('./modules/products/product.routes'));

// Global Error Handler
app.use(errorHandler);

module.exports = app;
