# Real Estate Management Platform

A modern, full-stack real estate application built with Next.js, Node.js, and AWS services. This platform enables property managers to list properties and tenants to search, apply, and manage their rental applications.

## 🏠 Features

### For Property Managers

- **Property Management**: Create, edit, and manage property listings
- **Application Processing**: Review and manage tenant applications
- **Dashboard**: Comprehensive dashboard for property overview
- **Settings**: Manage profile and account settings

### For Tenants

- **Property Search**: Browse available properties with advanced filtering
- **Property Details**: View detailed property information, photos, and amenities
- **Application System**: Submit rental applications with ease
- **Favorites**: Save and manage favorite properties
- **Application Tracking**: Monitor application status

### Core Features

- **Interactive Map**: Mapbox integration for property location visualization
- **Image Management**: AWS S3 integration for property photo storage
- **Authentication**: AWS Cognito for secure user authentication
- **Real-time Updates**: Modern UI with real-time data updates
- **Responsive Design**: Mobile-first design with Tailwind CSS

## 🛠 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Redux Toolkit** - State management
- **React Hook Form** - Form handling with Zod validation
- **Mapbox GL** - Interactive maps
- **AWS Amplify** - AWS integration

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Prisma** - Database ORM with PostgreSQL
- **PostGIS** - Geographic data support
- **JWT** - Authentication tokens
- **AWS SDK** - AWS services integration

### Database

- **PostgreSQL** - Primary database
- **PostGIS** - Geographic extensions for location data

### AWS Services

- **AWS Cognito** - User authentication and management
- **AWS S3** - File storage for property images
- **AWS EC2** - Application hosting
- **AWS RDS** - Database hosting (PostgreSQL)

## 📁 Project Structure

```
aws-learn/
├── client/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/           # App Router pages and layouts
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and constants
│   │   ├── state/         # Redux store and API state
│   │   └── types/         # TypeScript type definitions
│   └── public/            # Static assets
├── server/                # Node.js backend application
│   ├── src/
│   │   ├── controllers/   # API route handlers
│   │   ├── middleware/    # Express middleware
│   │   └── routes/        # API route definitions
│   └── prisma/           # Database schema and migrations
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database
- AWS account (for production deployment)

### Frontend Setup

1. **Navigate to the client directory:**

   ```bash
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the client directory with:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`

### Backend Setup

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the server directory with:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/real_estate_db"
   JWT_SECRET=your_jwt_secret
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_S3_BUCKET=your_s3_bucket_name
   ```

4. **Set up the database:**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   npm run seed
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   The backend API will be available at `http://localhost:3001`

## 🗄 Database Schema

The application uses PostgreSQL with PostGIS for geographic data. Key models include:

- **Property**: Property listings with amenities, location, and pricing
- **Manager**: Property managers with authentication via AWS Cognito
- **Tenant**: Users who can search and apply for properties
- **Application**: Rental applications submitted by tenants
- **Lease**: Active lease agreements
- **Payment**: Payment tracking for leases
- **Location**: Geographic data with PostGIS coordinates

## 🚀 Deployment

### AWS EC2 Deployment

The application is designed to be deployed on AWS EC2. See `server/aws-ec2-instructions.md` for detailed deployment instructions.

Key deployment steps:

1. Set up EC2 instance with Node.js
2. Configure environment variables
3. Set up PostgreSQL database (RDS recommended)
4. Configure AWS services (Cognito, S3)
5. Deploy using PM2 for process management

### Environment Variables

Ensure all required environment variables are set for production:

- Database connection string
- JWT secrets
- AWS credentials and configuration
- API endpoints
- Mapbox token

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.
