# CommerceCore: Multi-Tenant MERN Engine

Welcome to the CommerceCore platform! We've built a highly scalable, multi-tenant headless commerce engine along with a stunning React front-end application.

## Architecture & Stack

### Backend
- **Framework:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Configuration:** Zod for environment variables
- **Logging:** Pino (with `pino-pretty` for development)
- **Multi-Tenancy:** Custom middleware resolving the `storeId` context to isolate tenant data.
- **Pattern:** Modular Monolithic architecture with strict domain boundaries.

### Frontend
- **Framework:** React + Vite
- **Styling:** Tailwind CSS V4 + Vanilla CSS for custom Glassmorphism effects
- **Routing:** React Router DOM
- **Icons:** Lucide React

## Getting Started

### 1. Start MongoDB (Required)
Ensure you have a local MongoDB instance running on `mongodb://127.0.0.1:27017`. You can easily spin one up via Docker:
```bash
docker run -d -p 27017:27017 --name mongo-commerce mongo
```

### 2. Install Dependencies
From the root directory of the project, run:
```bash
npm run install:all
```
This script will navigate to both the `backend` and `frontend` directories and install their respective packages.

### 3. Run the Development Servers
We've set up a root-level script to launch both the backend and frontend simultaneously. Run:
```bash
npm run dev
```

This will start:
- **Backend API:** `http://localhost:5000`
- **Frontend App:** `http://localhost:5173`

---

## Exploring the Application

### 1. The Home Page
Navigate to `http://localhost:5173/`. You'll be greeted by a premium, dark-themed hero section utilizing modern web design best practices (subtle gradients, glowing effects, and responsive design).

### 2. The Dashboard (Tenant Management)
Go to the **Dashboard** (`/dashboard`). This connects to the `GET /api/stores` endpoint on the backend.
- It displays global metrics and a list of registered stores.
- **To create a store:** In a separate terminal or using Postman, you can send a `POST` request to create a tenant:
```bash
curl -X POST http://localhost:5000/api/stores \
-H "Content-Type: application/json" \
-d '{"name": "My Cool Store", "domain": "coolstore.com", "plan": "premium"}'
```
Refresh the Dashboard, and you'll see your newly created store!

### 3. Products Catalog
Go to the **Products** (`/products`). This page demonstrates a beautiful product catalog with glassmorphism product cards and hover effects, showcasing a seamless commerce experience.

## Next Steps for Expansion
The foundation is firmly in place. To further expand upon the initial requirements:
1. **GraphQL:** Add Apollo Server configurations in `src/config/graphql.js` and mount it to `/graphql` on the Express app.
2. **Workers:** Configure the BullMQ Redis queue inside `src/common/services/jobs/queue.js`.
3. **Authentication:** Implement JWT-based auth in `src/modules/auth`.

Enjoy building on top of this robust MERN commerce engine!
