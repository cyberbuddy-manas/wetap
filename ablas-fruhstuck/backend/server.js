const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ORDERS_FILE = path.join(__dirname, 'orders.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('ablas-fruhstuck'));

// Helper functions
function loadOrders() {
  try {
    if (fs.existsSync(ORDERS_FILE)) {
      const data = fs.readFileSync(ORDERS_FILE, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading orders:', error);
    return [];
  }
}

function saveOrders(orders) {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (error) {
    console.error('Error saving orders:', error);
  }
}

// Routes

// GET all orders
app.get('/api/orders', (req, res) => {
  const orders = loadOrders();
  res.json(orders);
});

// POST new order
app.post('/api/orders', (req, res) => {
  const { table, items, total, timestamp, status } = req.body;
  
  if (!table || !items || !total) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const orders = loadOrders();
  const newOrder = {
    id: Date.now().toString(),
    table,
    items,
    total,
    timestamp: timestamp || new Date().toISOString(),
    status: status || 'pending'
  };

  orders.push(newOrder);
  saveOrders(orders);

  res.status(201).json(newOrder);
});

// PUT update order status
app.put('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  const orders = loadOrders();
  const orderIndex = orders.findIndex(o => o.id === id);

  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }

  orders[orderIndex].status = status;
  saveOrders(orders);

  res.json(orders[orderIndex]);
});

// DELETE order
app.delete('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const orders = loadOrders();
  const filteredOrders = orders.filter(o => o.id !== id);

  if (filteredOrders.length === orders.length) {
    return res.status(404).json({ error: 'Order not found' });
  }

  saveOrders(filteredOrders);
  res.json({ message: 'Order deleted' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🍽️  POS Server running on http://localhost:${PORT}`);
});
