# Abla's Frühstück - Digital POS System

Complete digital point-of-sale system with dynamic database backend for restaurant ordering.

## Features

✅ **Customer Portal**
- QR code scans to table popup
- Full digital menu with 35+ items
- Real-time cart management
- Beautiful order confirmation

✅ **Kitchen Dashboard**
- PIN-protected (560723) staff interface
- Real-time order updates
- Order status management
- Live statistics (pending, completed, revenue, active tables)

✅ **Dynamic Backend**
- Node.js/Express server
- Persistent order storage
- RESTful API endpoints
- CORS enabled

## Setup Instructions

### Prerequisites
- Node.js 14+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
cd /Users/anchal/Desktop/Projects/anchalgera/wetap
npm install
```

2. **Start the server:**
```bash
npm start
```

The server will run on `http://localhost:3000`

### Running in Development

For auto-reload on file changes:
```bash
npm run dev
```

## Workflow

### Customer Flow
1. Customer scans QR code → Opens index.html
2. Clicks "Digital Speisekarte" → Table number popup
3. Enters table number (e.g., "5") → Menu opens
4. Browses 35+ menu items across 10 categories
5. Adds items to cart with quantity control
6. Clicks "Zur Kasse" → Beautiful confirmation screen
7. Order automatically sent to kitchen dashboard

### Kitchen Staff Flow
1. Open dashboard.html
2. Enter PIN: **560723**
3. See all pending orders by table
4. View order details: items, quantities, prices
5. Click "✓ Abgeschlossen" to mark complete
6. Dashboard auto-updates every 2 seconds

## API Endpoints

### GET /api/orders
Fetch all orders
```bash
curl http://localhost:3000/api/orders
```

### POST /api/orders
Create new order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "table": "5",
    "items": [{"id": 1, "name": "Coffee", "qty": 2, "price": 2.90}],
    "total": 5.80,
    "status": "pending"
  }'
```

### PUT /api/orders/:id
Update order status
```bash
curl -X PUT http://localhost:3000/api/orders/123456 \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

### DELETE /api/orders/:id
Delete order
```bash
curl -X DELETE http://localhost:3000/api/orders/123456
```

## Database

Orders are stored in `orders.json` (auto-created on first order).

Example structure:
```json
{
  "id": "1675346240000",
  "table": "5",
  "items": [
    {"id": 1, "name": "Cappuccino", "qty": 1, "price": 3.60}
  ],
  "total": 3.60,
  "timestamp": "2024-02-01T10:30:40.000Z",
  "status": "pending"
}
```

## File Structure

```
wetap/
├── server.js              # Express backend
├── package.json           # Dependencies
├── orders.json            # Dynamic database
└── ablas-fruhstuck/
    ├── index.html        # Homepage with menu button
    ├── menu.html         # Customer ordering interface
    ├── dashboard.html    # Kitchen staff dashboard
    ├── hero.png          # Logo
    └── image.png         # WiFi icon
```

## Deployment

### Option 1: Railway.app (Recommended)
```bash
railway link
railway up
```

### Option 2: Heroku
```bash
heroku create your-app-name
git push heroku main
```

### Option 3: Render.com
Connect GitHub repo and deploy automatically.

## Security Notes

- ⚠️ PIN (560723) should be changed in production
- 🔒 Add authentication for API endpoints
- 🗄️ Migrate to MongoDB/PostgreSQL for production
- 🚨 Add rate limiting and input validation

## Future Improvements

- [ ] MongoDB integration
- [ ] User authentication
- [ ] Staff role management
- [ ] Order history/analytics
- [ ] Payment integration (Stripe/PayPal)
- [ ] Customer notifications
- [ ] Multi-restaurant support
- [ ] Mobile app

## Support

For issues or questions, contact development team.

---

**Made with ❤️ for Abla's Frühstück**
