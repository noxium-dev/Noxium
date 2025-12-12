import { supabase, GitHubRepo, GitHubUser } from './supabase'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ''

// GitHub API response types (different from our database types)
interface GitHubApiRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  default_branch: string
  private: boolean // This is the property causing the issue
}

const headers = {
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
  'Accept': 'application/vnd.github.v3+json',
  'X-GitHub-Api-Version': '2022-11-28'
}

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/user`, { headers })
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const userData = await response.json()
    
    // Store in Supabase
    const { error } = await supabase
      .from('github_users')
      .upsert({
        id: userData.id,
        login: userData.login,
        name: userData.name,
        bio: userData.bio,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url,
        blog: userData.blog,
        location: userData.location,
        email: userData.email,
        hireable: userData.hireable,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        created_at: userData.created_at,
        updated_at: userData.updated_at,
        synced_at: new Date().toISOString()
      })
    
    if (error) {
      console.error('Error storing user data:', error)
    }
    
    return userData
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    return null
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const apiRepos: GitHubApiRepo[] = []
    let page = 1
    const perPage = 100
    
    while (true) {
      const response = await fetch(
        `https://api.github.com/user/repos?page=${page}&per_page=${perPage}&sort=updated&direction=desc`,
        { headers }
      )
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      const pageRepos: GitHubApiRepo[] = await response.json()
      
      if (pageRepos.length === 0) break
      
      apiRepos.push(...pageRepos)
      page++
    }
    
    // Convert API repos to database format and store in Supabase
    const dbRepos: GitHubRepo[] = []
    
    for (const apiRepo of apiRepos) {
      const dbRepo: GitHubRepo = {
        id: apiRepo.id,
        name: apiRepo.name,
        full_name: apiRepo.full_name,
        description: apiRepo.description,
        html_url: apiRepo.html_url,
        homepage: apiRepo.homepage,
        language: apiRepo.language,
        stargazers_count: apiRepo.stargazers_count,
        forks_count: apiRepo.forks_count,
        topics: apiRepo.topics || [],
        created_at: apiRepo.created_at,
        updated_at: apiRepo.updated_at,
        pushed_at: apiRepo.pushed_at,
        size: apiRepo.size,
        default_branch: apiRepo.default_branch,
        visibility: apiRepo.private ? 'private' : 'public'
      }
      
      dbRepos.push(dbRepo)
      
      const { error } = await supabase
        .from('github_repos')
        .upsert({
          ...dbRepo,
          synced_at: new Date().toISOString()
        })
      
      if (error) {
        console.error(`Error storing repo ${apiRepo.name}:`, error)
      }
    }
    
    return dbRepos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export async function getStoredRepos(): Promise<GitHubRepo[]> {
  try {
    const { data, error } = await supabase
      .from('github_repos')
      .select('*')
      .order('updated_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching stored repos:', error)
      return []
    }
    
    return data || []
  } catch (error) {
    console.error('Error getting stored repos:', error)
    return []
  }
}

export async function getStoredUser(): Promise<GitHubUser | null> {
  try {
    const { data, error } = await supabase
      .from('github_users')
      .select('*')
      .single()
    
    if (error) {
      // PGRST116 means no rows found, which is expected before first sync
      if (error.code === 'PGRST116') {
        console.log('No user data found in database yet (expected before first sync)')
        return null
      }
      console.error('Error fetching stored user:', error.message)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error getting stored user:', error instanceof Error ? error.message : 'Unknown error')
    return null
  }
}

export async function syncGitHubData(): Promise<{ user: GitHubUser | null; repos: GitHubRepo[] }> {
  console.log('Syncing GitHub data...')
  
  const [user, repos] = await Promise.all([
    fetchGitHubUser(),
    fetchGitHubRepos()
  ])
  
  console.log(`Synced ${repos.length} repositories`)
  
  return { user, repos }
}