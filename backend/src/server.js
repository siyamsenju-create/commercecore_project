const app = require('./app');
const connectDB = require('./config/db');
const logger = require('./config/logger');
const env = require('./config/env');

process.on('uncaughtException', (err) => {
  logger.fatal({ err }, 'UNCAUGHT EXCEPTION! 💥 Shutting down...');
  process.exit(1);
});

const startServer = async () => {
  try {
    await connectDB();
    
    const server = app.listen(env.PORT, () => {
      logger.info(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });

    process.on('unhandledRejection', (err) => {
      logger.fatal({ err }, 'UNHANDLED REJECTION! 💥 Shutting down...');
      server.close(() => {
        process.exit(1);
      });
    });
  } catch (error) {
    logger.fatal({ error }, 'Failed to start server');
    process.exit(1);
  }
};

startServer();
