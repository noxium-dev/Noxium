import { useState } from 'react'
import { useGitHub } from '../hooks/useGitHub'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ExternalLink, Star, GitFork, RefreshCw, Calendar, Code } from 'lucide-react'

export function GitHubRepos() {
  const { 
    user, 
    repos, 
    loading, 
    syncing, 
    error, 
    syncData, 
    getFeaturedRepos, 
    getRecentRepos, 
    getTotalStats 
  } = useGitHub()

  const [activeTab, setActiveTab] = useState('featured')
  
  const stats = getTotalStats()
  const featuredRepos = getFeaturedRepos()
  const recentRepos = getRecentRepos()

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cosmic-cyan"></div>
      </div>
    )
  }

  if (error && !error.includes('No GitHub data found')) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <Button onClick={syncData} disabled={syncing}>
          <RefreshCw className={`w-4 h-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
          Retry
        </Button>
      </div>
    )
  }

  // Show sync prompt if no data
  if (!loading && repos.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">No GitHub data found</h3>
        <p className="text-muted-foreground mb-6">
          Click the sync button to fetch your repositories from GitHub
        </p>
        <Button onClick={syncData} disabled={syncing} size="lg">
          <RefreshCw className={`w-4 h-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
          {syncing ? 'Syncing...' : 'Sync GitHub Data'}
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header with sync button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">GitHub Projects</h2>
          <p className="text-muted-foreground">
            Showcasing my latest work and contributions
          </p>
        </div>
        <Button 
          onClick={syncData} 
          disabled={syncing}
          variant="outline"
          size="sm"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
          {syncing ? 'Syncing...' : 'Sync'}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-cosmic-cyan">{stats.totalRepos}</div>
            <div className="text-sm text-muted-foreground">Repositories</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-cosmic-purple">{stats.totalStars}</div>
            <div className="text-sm text-muted-foreground">Stars</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-cosmic-pink">{stats.totalForks}</div>
            <div className="text-sm text-muted-foreground">Forks</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-cosmic-orange">{stats.languages.length}</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </CardContent>
        </Card>
      </div>

      {/* Repository Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        
        <TabsContent value="featured" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RepoCard({ repo }: { repo: any }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-cosmic-cyan/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold group-hover:text-cosmic-cyan transition-colors">
            {repo.name}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {repo.description || 'No description available'}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Language and Topics */}
          <div className="flex flex-wrap gap-2">
            {repo.language && (
              <Badge variant="secondary" className="text-xs">
                <Code className="w-3 h-3 mr-1" />
                {repo.language}
              </Badge>
            )}
            {repo.topics?.slice(0, 2).map((topic: string) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {repo.stargazers_count}
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {repo.forks_count}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(repo.updated_at)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}