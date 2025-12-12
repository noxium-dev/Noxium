# 🚀 Quick Setup Guide

## Current Status
✅ Supabase credentials configured  
✅ GitHub token embedded  
❌ Database tables need to be created  

## Next Steps (5 minutes):

### 1. Create Database Tables
1. **Open your Supabase dashboard**: https://brdnpwvquamjwkpiczpb.supabase.co
2. **Click "SQL Editor"** in the left sidebar
3. **Copy this SQL** and paste it in the editor:

```sql
-- Create GitHub Users table
CREATE TABLE IF NOT EXISTS github_users (
  id BIGINT PRIMARY KEY,
  login TEXT NOT NULL,
  name TEXT,
  bio TEXT,
  avatar_url TEXT,
  html_url TEXT,
  blog TEXT,
  location TEXT,
  email TEXT,
  hireable BOOLEAN,
  public_repos INTEGER,
  followers INTEGER,
  following INTEGER,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  synced_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create GitHub Repositories table
CREATE TABLE IF NOT EXISTS github_repos (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  full_name TEXT NOT NULL,
  description TEXT,
  html_url TEXT NOT NULL,
  homepage TEXT,
  language TEXT,
  stargazers_count INTEGER DEFAULT 0,
  forks_count INTEGER DEFAULT 0,
  topics TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  pushed_at TIMESTAMPTZ,
  size INTEGER DEFAULT 0,
  default_branch TEXT DEFAULT 'main',
  visibility TEXT CHECK (visibility IN ('public', 'private')) DEFAULT 'public',
  synced_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_github_repos_updated_at ON github_repos(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_github_repos_language ON github_repos(language);
CREATE INDEX IF NOT EXISTS idx_github_repos_stargazers ON github_repos(stargazers_count DESC);
CREATE INDEX IF NOT EXISTS idx_github_repos_visibility ON github_repos(visibility);

-- Enable Row Level Security (RLS)
ALTER TABLE github_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE github_repos ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on github_users" ON github_users
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access on github_repos" ON github_repos
  FOR SELECT USING (true);

-- Create policies for authenticated insert/update
CREATE POLICY "Allow authenticated insert on github_users" ON github_users
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on github_users" ON github_users
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated insert on github_repos" ON github_repos
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on github_repos" ON github_repos
  FOR UPDATE USING (true);
```

4. **Click "Run"** to execute the SQL

### 2. Test the Connection
1. Go to your About page: http://localhost:3000/about
2. Click "Test Supabase Connection"
3. You should see "✅ Supabase connected and tables exist!"

### 3. Test GitHub Sync
1. Once tables are created, click "Test GitHub Sync" 
2. This will fetch all your repositories from GitHub
3. Check your Supabase dashboard > Table Editor to see the data

### 4. Use the Components
Add the GitHub repos component to any page:
```tsx
import { GitHubRepos } from '@/components/GitHubRepos'

// In your component
<GitHubRepos />
```

## Troubleshooting

**"Tables don't exist"**: Make sure you ran the SQL in step 1  
**"GitHub API error"**: Your token might be expired or invalid  
**"Connection failed"**: Check your environment variables in `.env.local`  

## What You'll Get
- 📊 Real-time GitHub stats (repos, stars, forks)
- 🎨 Beautiful repository cards with hover effects
- 🔄 Manual sync button to refresh data
- 🏷️ Language badges and topic tags
- 📱 Fully responsive design

Ready to go! 🚀