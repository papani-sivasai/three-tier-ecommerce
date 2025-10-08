# MERN E-commerce Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart functionality
- Order management system
- Admin panel for product and order management
- Payment integration with PayPal
- Responsive design with modern UI components
- Image upload and management with Cloudinary

## Tech Stack

### Frontend
- **React 18** with Vite
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Radix UI** components
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Cloudinary** for image storage
- **PayPal SDK** for payments
- **CORS** enabled


## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/papani-sivasai/three-tier-ecommerce.git
   cd three-tier-ecommerce
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` files in both client and server directories:
   
   **Server `.env`:**
   ```
   MONGODB_URI= your_mongodb_uri
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:5173
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PAYPAL_MODE=sandbox
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   ```
   
   **Client `.env`:**
   ```
   VITE_API_URL=http://localhost:5000
   VITE_NODE_ENV=development
   ```

### Running the Application

1. **Start the server**
   ```bash
   cd server
   npm start
   ```
   Server runs on http://localhost:5000

2. **Start the client**
   ```bash
   cd client
   npm run dev
   ```
   Client runs on http://localhost:5173

### Creating Admin Users

**Note:** There are currently no API routes to create admin users directly. Admin privileges need to be set manually in the database.

**Steps to create an admin user:**

1. **Register a regular user** through the application's registration form
2. **Access your MongoDB database** (using MongoDB Atlas, CLI, or your preferred tool)
3. **Find the user document** in the `users` collection
4. **Update the user's role to admin**
5. **Restart the application** and login with the updated user credentials

The admin user will now have access to:
- Admin dashboard
- Product management (Create, Update, Delete)
- Order management

## Features Overview

### User Features
- Browse products with search and filters
- Add products to cart
- Secure checkout with PayPal
- Order history and tracking
- Product reviews and ratings

### Admin Features
- Product management (CRUD operations)
- Order management and status updates
- Admin Dashboard
- Image upload for products
- **Note:** Admin users must be created manually in the database (see setup instructions above)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

