# 🚀 Noxium Portfolio

> Modern, responsive full-stack developer portfolio built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](./screenshots/portfolio-preview.png)

## ✨ Features

- **Modern Design**: Glassmorphism UI with cosmic gradient themes
- **Responsive**: Mobile-first approach with seamless desktop experience
- **Animated**: Smooth animations with Framer Motion
- **Tech Stack Display**: Interactive marquee with brand icons
- **Project Showcase**: Filterable project gallery with detailed views
- **Contact System**: Integrated contact forms with email notifications
- **Newsletter**: Subscription system with Supabase integration
- **GitHub Integration**: Live repository stats and star button
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Legal Pages**: Privacy policy and terms of service

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation

### Backend & Database
- **Supabase** - PostgreSQL database with real-time features
- **Email Integration** - Contact form submissions
- **Newsletter System** - Subscription management

### Development & Deployment
- **Vite** - Fast build tool and dev server
- **ESLint & Prettier** - Code linting and formatting
- **Vercel** - Deployment and hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account (for database features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/noxium-dev/Noxium.git
   cd Noxium
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   ```bash
   npm run setup:db
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:5173` to see your portfolio!

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, Projects, etc.)
│   └── ui/            # Base UI components
├── pages/              # Route components
├── lib/               # Utilities and configurations
├── hooks/             # Custom React hooks
└── assets/            # Static assets
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the cosmic theme:
```js
theme: {
  extend: {
    colors: {
      'cosmic-cyan': '#00f5ff',
      'cosmic-purple': '#8b5cf6',
      'cosmic-pink': '#f472b6'
    }
  }
}
```

### Content
- Update personal information in `src/lib/data.ts`
- Replace project data with your own projects
- Modify testimonials and skills sections

## 📧 Contact Form Setup

The contact form uses Supabase for data storage. See [SETUP.md](./docs/SETUP.md) for detailed configuration.

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run setup:db     # Setup database tables
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience with animations
- **4K**: Scales beautifully on large displays

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. **Connect Repository**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Connect your GitHub repository: `noxium-dev/Noxium`

2. **Build Settings**
   ```
   Framework: Vite
   Build command: npm run build
   Build output: dist
   ```

3. **Environment Variables**
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_GITHUB_TOKEN=your_github_token
   ```

4. **Deploy**
   - Automatic deployment on every push to main
   - Live at: `https://your-project.pages.dev`

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed deployment guide.

## 🔒 License

© 2024 Noxium. All rights reserved.

This project is proprietary and not available for use, modification, or distribution without explicit permission.

## 📞 Contact

- **Email**: noxiumdev@proton.me
- **GitHub**: [@noxium-dev](https://github.com/noxium-dev)
- **Portfolio**: [noxium.dev](https://noxium.dev)

---

Built with ❤️ by Noxium