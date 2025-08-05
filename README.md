# Portfolio v2

A modern and responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my skills, projects, and provides a way for visitors to get in touch.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router) for optimal performance and developer experience.
- **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile phones to desktops.
- **Theming**: Light and Dark mode support, powered by `next-themes`.
- **Component-Based**: Developed with reusable components from `shadcn/ui` and Radix UI.
- **Animations**: Smooth page transitions and interactive elements using `framer-motion`.
- **Internationalization (i18n)**: Content structure ready for multiple languages with `next-intl`.
- **Contact Form**: A functional contact form with client-side validation using `react-hook-form` and `zod`.

---

## 🚀 Tech Stack

This project is built with a curated selection of modern web technologies:

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Headless UI**: Radix UI
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Schema Validation**: Zod
- **Internationalization**: Next-Intl
- **Theming**: next-themes
- **Icons**: Lucide React

---

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v18 or later recommended)
- pnpm (as seen from the lockfile)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    pnpm install
    ```

3.  **Run the development server:**
    ```sh
    pnpm dev
    ```

Open http://localhost:3000 with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 📜 Available Scripts

In the project directory, you can run:

- **`pnpm dev`**: Runs the app in development mode.
- **`pnpm build`**: Builds the app for production to the `.next` folder.
- **`pnpm start`**: Starts a Next.js production server.
- **`pnpm lint`**: Runs ESLint to find and fix problems in your code.

---

## 📁 Project Structure

The project follows the standard Next.js App Router structure:

```
portfolio-v2/
├── app/                  # Main application folder (App Router)
│   ├── (main)/           # Route group for main pages
│   │   ├── page.tsx      # Home page
│   │   └── layout.tsx    # Main layout
│   ├── api/              # API routes
│   └── layout.tsx        # Root layout
├── components/           # Shared and UI components
│   └── ui/               # Components from shadcn/ui
├── lib/                  # Utility functions and helpers
│   └── utils.ts          # Tailwind Merge utility
├── public/               # Static assets (images, fonts, etc.)
├── .eslintrc.json        # ESLint configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

---

## ☁️ Deployment

The easiest way to deploy this Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.

---
