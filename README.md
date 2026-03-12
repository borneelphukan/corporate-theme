# The Legacy Apartment

Official website and community management portal for **The Legacy Apartment**, located in F.A. Ahmad Nagar, Purnabasti, Panjabari Road, Six Mile, Guwahati, Assam.

This project is a full-stack monorepo designed to streamline apartment management, financial tracking, and resident engagement.

## 🚀 Project Overview

The system consists of three main components:
- **Resident Website (`apps/frontend`)**: A public-facing portal for residents to view announcements, society rules, committee members, and the community gallery.
- **Admin Dashboard (`apps/admin`)**: A secure management interface for society officials to manage residents, finances, documents, and content.
- **Backend API (`apps/server`)**: A robust NestJS server handling authentication, role-based access control (RBAC), and database interactions via Prisma.

## 🛠 Tech Stack

- **Frameworks**: [Next.js](https://nextjs.org/) (Frontend/Admin), [NestJS](https://nestjs.com/) (Backend)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Monorepo Management**: [Turborepo](https://turbo.build/) & [pnpm](https://pnpm.io/)
- **UI Components**: Shared vanilla CSS and Tailwind-powered components in `packages/ui`
- **Authentication**: JWT-based auth with Role-Based Access Control

## 👥 Role Management

The system supports granular permissions for various society roles:
- **President**: Full administrative access.
- **Secretary**: Management of announcements.
- **Treasurer**: Financial oversight and document management.
- **Cultural Head**: Gallery and event management.
- **Other Roles**: Advisor, Technical Advisor, Welfare Head, Gym Head, Gardening, and Catering.

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v20` or higher
- **pnpm**: `v8` or higher
- **PostgreSQL**: Running instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/borneelphukan/legacy-apartment.git
   cd legacy-apartment
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Environment Setup**:
   Create `.env` files in the following locations based on the `.env.example` templates (if available) or standard requirements:
   - `apps/server/.env` (Include `DATABASE_URL` and `JWT_SECRET`)
   - `apps/frontend/.env.local`
   - `apps/admin/.env`

### Database Initialization

Navigate to the server directory and run migrations:
```bash
cd apps/server
npx prisma migrate dev
npx prisma db seed
```

### Running Locally

From the root directory, run the development command:
```bash
pnpm dev
```
This will start all applications concurrently:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Admin**: [http://localhost:3001](http://localhost:3001)
- **Server**: [http://localhost:4000](http://localhost:4000)

## 📄 License

This project is private and intended only for the management of The Legacy Apartment.
