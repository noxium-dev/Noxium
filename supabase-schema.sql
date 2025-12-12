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

-- Create policies for authenticated insert/update (you can modify these based on your needs)
CREATE POLICY "Allow authenticated insert on github_users" ON github_users
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on github_users" ON github_users
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated insert on github_repos" ON github_repos
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on github_repos" ON github_repos
  FOR UPDATE USING (true);