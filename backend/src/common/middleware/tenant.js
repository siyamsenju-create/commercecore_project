const AppError = require('../errors/AppError');
const Store = require('../../modules/stores/store.model'); // Ensure this model exists

const tenantMiddleware = async (req, res, next) => {
  const storeId = req.headers['x-store-id'] || req.query.storeId;

  if (!storeId) {
    return next(new AppError('Store ID is required', 400, 'MISSING_TENANT'));
  }

  try {
    // In a real app, you might want to cache this using Redis
    const store = await Store.findById(storeId);
    
    if (!store) {
      return next(new AppError('Store not found', 404, 'TENANT_NOT_FOUND'));
    }

    if (store.status !== 'active') {
      return next(new AppError('Store is not active', 403, 'TENANT_INACTIVE'));
    }

    req.tenant = {
      storeId: store._id.toString(),
      plan: store.plan,
      settings: store.settings,
    };

    next();
  } catch (error) {
    next(new AppError('Error resolving tenant', 500, 'SERVER_ERROR'));
  }
};

module.exports = tenantMiddleware;
