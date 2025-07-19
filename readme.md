# 🔐 JWT Full Authentication System

A comprehensive, production-ready authentication system built with React and Node.js, featuring JWT tokens, email verification, password reset, and secure cookie-based authentication.

![Auth Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.x-blue) ![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)

## ✨ Features

### 🔒 Authentication Features

- **User Registration** - Secure account creation with email verification
- **User Login** - JWT-based authentication with HTTP-only cookies
- **Email Verification** - OTP-based email verification system
- **Password Reset** - Secure password reset with time-limited OTP
- **Auto Authentication** - Persistent login sessions
- **Secure Logout** - Complete session cleanup

### 🎨 UI/UX Features

- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Modern UI** - Beautiful gradient backgrounds and glassmorphism effects
- **Interactive Forms** - Real-time validation and user feedback
- **Toast Notifications** - User-friendly success/error messages
- **Loading States** - Smooth user experience with loading indicators

### 🛡️ Security Features

- **JWT Tokens** - Secure token-based authentication
- **HTTP-Only Cookies** - XSS protection with secure cookie storage
- **CORS Protection** - Configured for cross-origin requests
- **Password Hashing** - bcrypt encryption for password security
- **Rate Limiting** - Built-in protection against brute force attacks
- **Input Validation** - Comprehensive server-side validation

## 🏗️ Architecture

```
jwt_full/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context for state management
│   │   └── assets/         # Static assets
│   └── public/
└── server/                 # Node.js Backend
    ├── controllers/        # Business logic
    ├── models/            # MongoDB schemas
    ├── routes/            # API endpoints
    ├── middleware/        # Authentication middleware
    └── config/            # Database and email configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB 6+
- SMTP Email Service (Brevo/SendGrid)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hardik18-hk19/jwt-full-auth.git
   cd jwt-full-auth
   ```

2. **Setup Backend**

   ```bash
   cd server
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

### Environment Configuration

#### Server Environment (.env)

```env
# Database
MONGO_URL=mongodb://localhost:27017

# JWT
JWT_SECRET=your_super_secret_jwt_key_here

# Email Configuration (Brevo)
SMTP_USER=your_brevo_email
SMTP_PASS=your_brevo_password
SENDER_EMAIL=noreply@yourapp.com

# Server
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### Client Environment (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

### 🔥 Running the Application

1. **Start the Backend Server**

   ```bash
   cd server
   npm start
   ```

2. **Start the Frontend Development Server**

   ```bash
   cd client
   npm run dev
   ```

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4000

## 📁 Project Structure

### Frontend Components

- **`pages/Home.jsx`** - Landing page with navigation
- **`pages/Login.jsx`** - Login/Register form with state switching
- **`pages/EmailVerify.jsx`** - OTP verification for email
- **`pages/ResetPassword.jsx`** - Multi-step password reset flow
- **`components/Navbar.jsx`** - Navigation with user menu
- **`components/Header.jsx`** - Welcome header component
- **`context/AppContext.jsx`** - Global state management

### Backend Structure

- **`controllers/authController.js`** - Authentication logic
- **`controllers/userController.js`** - User data management
- **`models/user.model.js`** - MongoDB user schema
- **`routes/authRoutes.js`** - Authentication endpoints
- **`routes/userRoutes.js`** - User data endpoints
- **`middleware/userAuth.js`** - JWT verification middleware

## 🔗 API Endpoints

### Authentication Routes

```
POST /api/auth/register          # User registration
POST /api/auth/login             # User login
POST /api/auth/logout            # User logout
POST /api/auth/send-verify-otp   # Send email verification OTP
POST /api/auth/verify-account    # Verify email with OTP
POST /api/auth/send-reset-otp    # Send password reset OTP
POST /api/auth/password-reset    # Reset password with OTP
GET  /api/auth/is-auth          # Check authentication status
```

### User Routes

```
GET /api/user/data              # Get user data
```

## 🎨 UI Screenshots

### Login/Register Page

Beautiful dark-themed authentication forms with gradient backgrounds and glassmorphism effects.

### Email Verification

Clean OTP input interface with automatic focus management and paste support.

### Password Reset Flow

Multi-step password reset process with clear visual feedback.

## 🛠️ Technologies Used

### Frontend

- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **Vite** - Fast build tool and dev server

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## 🔧 Configuration Options

### Cookie Configuration

```javascript
{
  httpOnly: true,        // Prevent XSS attacks
  secure: true,          // HTTPS only in production
  sameSite: "none",      // Cross-origin support
  maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
}
```

### Email Templates

The application includes beautiful HTML email templates for:

- Welcome emails
- Email verification OTPs
- Password reset OTPs

## 🚀 Deployment

### Production Build

```bash
# Build frontend
cd client
npm run build

# Start backend in production
cd ../server
NODE_ENV=production npm start
```

### Environment Variables for Production

- Set `NODE_ENV=production`
- Use secure HTTPS URLs
- Configure proper CORS origins
- Use production MongoDB cluster
- Set secure JWT secrets

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hardik** - _Full Stack Developer_

- Email: ha18.hk19@gmail.com
- GitHub: [@hardik18-hk19](https://github.com/hardik18-hk19)

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community for the robust backend framework
- Tailwind CSS for the beautiful styling system
- MongoDB team for the flexible database solution

---

⭐ **Star this repository if you found it helpful!**

For any questions or support, please open an issue or contact the author.
