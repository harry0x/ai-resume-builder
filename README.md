# AI-Powered Resume Builder

An intelligent, modern resume builder that helps users create professional, ATS-friendly resumes using Google's Gemini AI. Built with Next.js, MongoDB, and Tailwind CSS, this app enables fast resume creation with AI assistance, secure authentication, and a step-by-step resume workflow.

## Table of Contents

- [What It Does](#what-it-does)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [User Flow](#user-flow)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Testing and Build](#testing-and-build)
- [Project Structure](#project-structure)
- [Deployment Notes](#deployment-notes)
- [Contributing](#contributing)
- [License](#license)

## What It Does

This project provides a resume authoring platform that uses AI to help users:

- Generate a strong, professional resume summary.
- Automatically expand experience and project descriptions.
- Suggest skills relevant to a selected role or industry.
- Evaluate resume text for ATS compatibility.
- Persist resume drafts and resume steps to MongoDB.

## Key Features

- **🤖 AI-Powered Content Generation**: Generate summaries, skills, project descriptions, and career-focused content with Gemini AI.
- **🧠 ATS Score Insights**: Analyze resume text to surface ATS readiness and improve keyword targeting.
- **🔐 User Authentication**: Login and registration with JWT-based authentication and secure password hashing using bcrypt.
- **📝 Multi-Step Resume Builder**: Guide users through personal info, education, experience, projects, and skills.
- **📂 Resume Management**: Create, list, continue editing, and delete resume drafts.
- **✨ Responsive UI**: Modern design built with Tailwind CSS and Lucide React iconography.

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS v4, TypeScript
- **Backend**: Next.js App Router API routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **AI**: Google Gemini API via `@google/genai`
- **Client API**: Axios calls from `src/apis/*.api.ts`

## Architecture

The app is organized around an App Router structure:

- `src/app/` contains the server-rendered pages and API routes.
- `src/components/` contains reusable UI components such as modals, resume cards, and step controls.
- `src/apis/` exposes client-side wrappers for backend APIs.
- `src/lib/` holds utility modules for MongoDB connection, JWT handling, and Gemini integration.
- `src/models/` defines Mongoose schemas for `User` and `Resume` documents.
- `src/types/` stores shared TypeScript interfaces used throughout the app.

## User Flow

1. Visitor lands on the home page.
2. User registers or logs in.
3. User creates a new resume draft.
4. The app saves the draft to MongoDB and routes the user into the resume builder.
5. User fills in personal info, experience, education, projects, and skills.
6. AI helpers can generate content or improve written sections.
7. User can preview the resume and return to edit it later.

## Getting Started

### Prerequisites

- Node.js 20 or newer
- MongoDB instance or MongoDB Atlas cluster
- Google Gemini API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/resume-builder.git
   cd resume-builder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file based on the environment configuration below.

## Environment Variables

Create a `.env.local` file in the project root with the following values:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Optional:

```env
NEXTAUTH_URL=http://localhost:3000
```

## Local Development

Start the local development server:

```bash
npm run dev
```

Open the app at `http://localhost:3000`.

## Testing and Build

Run TypeScript checks and build the app for production:

```bash
npm run build
```

If you want to run ESLint manually:

```bash
npm run lint
```

## Project Structure

- `src/app/`
  - `auth/`: authentication pages and routes
  - `resume/`: resume listing and resume builder pages
  - `api/`: server-side API routes for resume and AI features
- `src/components/`: reusable UI fragments and form controls
- `src/apis/`: client-side API wrappers used by pages
- `src/lib/`: shared utilities and service helpers
- `src/models/`: MongoDB schema definitions
- `src/types/`: TypeScript domain models and shapes

## Deployment Notes

- Make sure `MONGODB_URI`, `JWT_SECRET`, and `GEMINI_API_KEY` are configured in your deployment environment.
- Deploy to Vercel or another platform that supports Next.js App Router.
- If deploying to Vercel, use the default `npm run build` command and ensure the `public/` and `src/` directories are included.

## Contributing

Contributions are welcome! Suggested improvements:

- Add a resume template preview generator.
- Improve AI prompt tuning for better resume outputs.
- Add form validation with `react-hook-form` and Zod.
- Improve accessibility and keyboard navigation.

Developed by harry0x 


