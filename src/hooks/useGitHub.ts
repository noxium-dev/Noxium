import { useState, useEffect } from 'react'
import { GitHubRepo, GitHubUser } from '../lib/supabase'
import { syncGitHubData, getStoredRepos, getStoredUser } from '../lib/github-api'

export function useGitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load stored data on mount
  useEffect(() => {
    loadStoredData()
  }, [])

  const loadStoredData = async () => {
    try {
      setLoading(true)
      const [storedUser, storedRepos] = await Promise.all([
        getStoredUser(),
        getStoredRepos()
      ])
      
      setUser(storedUser)
      setRepos(storedRepos)
      
      // Only set error if there are actual issues, not just empty data
      if (!storedUser && storedRepos.length === 0) {
        setError('No GitHub data found. Click sync to fetch your repositories.')
      } else {
        setError(null)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const syncData = async () => {
    try {
      setSyncing(true)
      setError(null)
      
      const { user: newUser, repos: newRepos } = await syncGitHubData()
      
      setUser(newUser)
      setRepos(newRepos)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sync data')
    } finally {
      setSyncing(false)
    }
  }

  const getReposByLanguage = (language: string) => {
    return repos.filter(repo => repo.language === language)
  }

  const getFeaturedRepos = (limit = 6) => {
    return repos
      .filter(repo => repo.visibility === 'public')
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
  }

  const getRecentRepos = (limit = 6) => {
    return repos
      .filter(repo => repo.visibility === 'public')
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, limit)
  }

  const getTotalStats = () => {
    const publicRepos = repos.filter(repo => repo.visibility === 'public')
    
    return {
      totalRepos: publicRepos.length,
      totalStars: publicRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      totalForks: publicRepos.reduce((sum, repo) => sum + repo.forks_count, 0),
      languages: [...new Set(publicRepos.map(repo => repo.language).filter(Boolean))],
      followers: user?.followers || 0,
      following: user?.following || 0
    }
  }

  return {
    user,
    repos,
    loading,
    syncing,
    error,
    syncData,
    loadStoredData,
    getReposByLanguage,
    getFeaturedRepos,
    getRecentRepos,
    getTotalStats
  }
}