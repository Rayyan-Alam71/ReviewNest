## Book Review App Starter Template

>This is a starter template for a Book Review web app using **Next.js**, **Prisma**, and **NextAuth.js**. Easily adaptable for your own projects!

---

### Features
- Next.js 14 App Router
- Prisma ORM (with PostgreSQL)
- NextAuth.js authentication (Google provider)
- Environment variable support

---

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd book-review
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Copy `.env.sample` to `.env` and fill in your credentials:
```bash
cp .env.sample .env
```

Edit `.env`:
- `DATABASE_URL` – Your PostgreSQL connection string
- `GOOGLE_CLIENT_ID` – Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` – Google OAuth client secret
- `NEXTAUTH_SECRET` – A random string for NextAuth session encryption (use `openssl rand -base64 32` to generate one)

### 4. Set up the database
```bash
npx prisma migrate dev --name init
```

### 5. Start the development server
```bash
npm run dev
```

---

## Useful Commands
- `npx prisma studio` – Open Prisma Studio to view/edit your database
- `npx prisma generate` – Regenerate Prisma client

---

## Folder Structure
- `/app` – Next.js app directory
- `/prisma` – Prisma schema and migrations
- `/db/prisma.ts` – Prisma client instance
- `/app/api/auth/[...nextauth]/route.ts` – NextAuth.js API route

---

## License
MIT





<!-- TODO -->
Image upload functionality
Begin the names with capital
text- color of descrition should be little darker