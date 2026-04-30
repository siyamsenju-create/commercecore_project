const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String, required: true, unique: true },
  status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' },
  plan: { type: String, enum: ['free', 'basic', 'premium'], default: 'free' },
  settings: {
    currency: { type: String, default: 'USD' },
    taxRate: { type: Number, default: 0 },
  }
}, { timestamps: true });

module.exports = mongoose.model('Store', storeSchema);
