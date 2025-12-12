# 🔧 Setup Guide

Complete setup instructions for the Noxium Portfolio project.

## 📋 Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** or **yarn** package manager
- **Supabase** account (free tier available)
- **Git** for version control

## 🗄️ Database Setup

### 1. Supabase Configuration

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Environment Variables**
   Create `.env.local` file:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Run Database Setup**
   ```bash
   npm run setup:db
   ```

### 2. Database Tables

The setup script creates these tables:

#### Contact Submissions
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Newsletter Subscriptions
```sql
CREATE TABLE newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);
```

## 📧 Email Configuration

### Contact Form
The contact form stores submissions in Supabase. To enable email notifications:

1. **Set up Supabase Edge Functions** (optional)
2. **Configure email service** (SendGrid, Resend, etc.)
3. **Add webhook endpoints** for real-time notifications

### Newsletter
Newsletter subscriptions are stored in Supabase. Integration options:
- **Mailchimp API**
- **ConvertKit**
- **Custom email service**

## 🎨 Customization

### Personal Information
Edit `src/lib/data.ts`:

```typescript
// Update with your information
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@domain.com",
  // ... other details
};
```

### Projects
Replace sample projects with your own:

```typescript
export const projects: Project[] = [
  {
    id: "your-project",
    title: "Your Project",
    description: "Project description",
    // ... project details
  }
];
```

### Skills & Technologies
Update your tech stack:

```typescript
export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "BrandReact" },
  // ... your skills
];
```

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**
   ```bash
   vercel --prod
   ```

2. **Environment Variables**
   Add in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Netlify
1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Environment Variables**
   Add in Netlify dashboard

### Custom Server
```bash
npm run build
# Serve the dist/ folder
```

## 🔧 Development

### Code Quality
```bash
npm run lint          # ESLint
npm run type-check    # TypeScript
npm run format        # Prettier
```

### Testing
```bash
npm run test          # Run tests
npm run test:watch    # Watch mode
```

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Verify environment variables

**Database Connection**
- Verify Supabase URL and key
- Check network connectivity
- Ensure RLS policies are configured

**Styling Issues**
- Clear browser cache
- Check Tailwind CSS compilation
- Verify custom CSS imports

### Getting Help

1. Check the [Issues](https://github.com/noxium-dev/portfolio/issues) page
2. Review this documentation
3. Contact: noxiumdev@proton.me

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion)

---

Need help? Open an issue or contact noxiumdev@proton.me