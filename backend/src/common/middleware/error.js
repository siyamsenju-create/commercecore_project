const AppError = require('../errors/AppError');
const logger = require('../../config/logger');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.errorCode,
        message: err.message,
        details: err.details || [],
      },
      requestId: req.id,
    });
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400, 'DUPLICATE_ERROR');
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = new AppError(message, 400, 'VALIDATION_ERROR');
  }

  // Zod validation error
  if (err.name === 'ZodError') {
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid input data',
        details: err.errors,
      },
      requestId: req.id,
    });
  }

  logger.error({ err, reqId: req.id }, 'Unhandled error');

  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      code: error.errorCode || 'SERVER_ERROR',
      message: error.message || 'Server Error',
      details: [],
    },
    requestId: req.id,
  });
};

module.exports = errorHandler;
