const express = require('express');
const Store = require('./store.model');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json({ success: true, data: store, requestId: req.id });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const stores = await Store.find();
    res.status(200).json({ success: true, data: stores, requestId: req.id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
