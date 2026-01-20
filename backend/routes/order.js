const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Save order after payment
router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
