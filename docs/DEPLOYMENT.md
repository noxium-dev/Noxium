# 🚀 Deployment Guide

This guide covers deploying your Noxium Portfolio to Cloudflare Pages.

## Cloudflare Pages Deployment

### Prerequisites
- Cloudflare account
- GitHub repository (already set up at https://github.com/noxium-dev/Noxium.git)

### Step 1: Connect to Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar

2. **Create New Project**
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose "GitHub" as your Git provider

3. **Connect Repository**
   - Authorize Cloudflare to access your GitHub
   - Select the `noxium-dev/Noxium` repository

### Step 2: Configure Build Settings

Use these build configuration settings:

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (leave empty)
```

### Step 3: Environment Variables

Add these environment variables in Cloudflare Pages settings:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

### Step 4: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your Pages project settings
   - Click "Custom domains"
   - Add your domain (e.g., `noxium.dev`)

2. **DNS Configuration**
   - Add CNAME record pointing to your Cloudflare Pages URL
   - Or use Cloudflare as your DNS provider for automatic setup

### Step 5: Deploy

1. **Automatic Deployment**
   - Cloudflare Pages will automatically deploy on every push to main branch
   - First deployment will take 2-3 minutes

2. **Manual Deployment**
   - You can trigger manual deployments from the Cloudflare dashboard
   - Or push changes to your GitHub repository

## Build Configuration Files

### `wrangler.toml`
Configuration file for Cloudflare Workers/Pages integration.

### `_redirects`
Handles client-side routing for the React SPA.

## Performance Optimizations

Cloudflare Pages automatically provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Brotli compression
- ✅ HTTP/2 and HTTP/3 support
- ✅ Edge caching
- ✅ DDoS protection

## Monitoring

- **Analytics**: Available in Cloudflare Pages dashboard
- **Real User Monitoring**: Built-in performance metrics
- **Error Tracking**: Check deployment logs for issues

## Troubleshooting

### Build Failures
- Check environment variables are set correctly
- Verify Node.js version compatibility (18+)
- Review build logs in Cloudflare dashboard

### Routing Issues
- Ensure `_redirects` file is in the root directory
- Verify React Router configuration

### Environment Variables
- Double-check Supabase credentials
- Ensure GitHub token has proper permissions

## Custom Domains

For production deployment with custom domain:

1. **Purchase Domain** (if needed)
2. **Configure DNS** through Cloudflare
3. **SSL Certificate** (automatic with Cloudflare)
4. **Update Environment** variables if needed

---

Your portfolio will be live at: `https://your-project-name.pages.dev`

With custom domain: `https://your-domain.com`