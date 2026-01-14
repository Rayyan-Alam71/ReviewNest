# ReviewNest — Full-Stack Book Review Platform

[![Vercel](https://img.shields.io/badge/Deployed-Vercel-blue)](https://reviewnest.vercel.app)  
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/YourUsername/reviewnest)

---

## Overview

ReviewNest is a **modular full-stack platform** designed to help developers quickly set up a book review application. Users can authenticate via Google, browse books, submit reviews, and discover new reads based on community feedback.  

The project is intentionally **minimal and extensible**, making it an ideal foundation for personal projects, portfolios, or small-scale reading communities. While the live deployment currently features a **static landing page**, the architecture is ready for full interactive functionality.

---

## Core Features

- **User Authentication:** Google OAuth via NextAuth.js with secure session handling  
- **Protected & Public Routes:** Server-side route protection for adding books and reviews  
- **Database Integration:** Type-safe operations using Prisma ORM and PostgreSQL  
- **Modular Project Structure:**  
  - `actions/` — Server Actions (form handling, CRUD operations)  
  - `components/` — Reusable UI components  
  - `hooks/` — Custom React hooks for logic abstraction  
  - `lib/` & `db/` — Utilities and Prisma client  
- **Extensible Architecture:** Ready for book listing, search, reviews, user profiles, and additional features  
- **Vercel-Optimized Deployment:** Fast, scalable hosting with static landing page

---

## Tech Stack

- **Frontend & Framework:** Next.js 14 (App Router), TypeScript  
- **Backend & Database:** Prisma ORM, PostgreSQL  
- **Authentication:** NextAuth.js (Google provider)  
- **Styling & UI:** Tailwind CSS, ShadCN/UI  
- **Deployment:** Vercel  
- **Architecture Concepts:** Server Actions, Modular Component Design, Protected Routes  

---

## Project Structure

```text
reviewnest/
├── app/                  # Next.js App Router pages, layouts, and API routes
├── actions/              # Server Actions for handling form submissions & DB operations
├── components/           # Reusable React components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helper functions
├── db/                   # Prisma client & database utilities
├── prisma/               # Prisma schema & migrations
├── public/               # Static assets (images, icons)
├── middleware.ts         # Route protection & authentication middleware
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
