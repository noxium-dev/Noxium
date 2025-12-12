// GitHub API types and utilities
import { GitHubRepo, GitHubUser } from './supabase';

// Re-export types for backward compatibility
export type { GitHubRepo, GitHubUser as GitHubProfile };

// Legacy interface for backward compatibility
export interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
    url: string;
  };
  payload: {
    action?: string;
    commits?: Array<{
      sha: string;
      message: string;
    }>;
    ref?: string;
    ref_type?: string;
  };
}

const GITHUB_USERNAME = "noxiumwebx"; // Default username, can be overridden

// Updated functions to use Supabase data
export async function fetchGitHubProfile(username = GITHUB_USERNAME): Promise<GitHubUser | null> {
  // This now uses the stored data from Supabase
  const { getStoredUser } = await import('./github-api');
  return getStoredUser();
}

export async function fetchGitHubRepos(
  username = GITHUB_USERNAME,
  limit = 6
): Promise<GitHubRepo[]> {
  // This now uses the stored data from Supabase
  const { getStoredRepos } = await import('./github-api');
  const repos = await getStoredRepos();
  
  // Filter and sort repos
  return repos
    .filter((repo) => repo.visibility === 'public')
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, limit);
}

export async function fetchGitHubEvents(
  username = GITHUB_USERNAME,
  limit = 10
): Promise<GitHubEvent[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=${limit}`
    );
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch GitHub events:", error);
    return [];
  }
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    TypeScript: "hsl(199, 89%, 48%)",
    JavaScript: "hsl(45, 90%, 55%)",
    Python: "hsl(210, 60%, 50%)",
    Rust: "hsl(25, 80%, 55%)",
    Go: "hsl(190, 80%, 45%)",
    Ruby: "hsl(0, 70%, 55%)",
    Java: "hsl(15, 80%, 50%)",
    "C++": "hsl(330, 60%, 55%)",
    C: "hsl(210, 40%, 50%)",
    HTML: "hsl(15, 80%, 55%)",
    CSS: "hsl(260, 70%, 60%)",
    Vue: "hsl(150, 60%, 50%)",
    Svelte: "hsl(15, 100%, 55%)",
    PHP: "hsl(235, 35%, 55%)",
    Shell: "hsl(120, 40%, 45%)",
  };
  return colors[language || ""] || "hsl(var(--muted-foreground))";
}

export function formatEventType(type: string): string {
  const eventTypes: Record<string, string> = {
    PushEvent: "Pushed to",
    CreateEvent: "Created",
    DeleteEvent: "Deleted",
    WatchEvent: "Starred",
    ForkEvent: "Forked",
    IssuesEvent: "Issue",
    IssueCommentEvent: "Commented on",
    PullRequestEvent: "Pull Request",
    PullRequestReviewEvent: "Reviewed",
    ReleaseEvent: "Released",
  };
  return eventTypes[type] || type.replace("Event", "");
}

export function getRepoLanguageBreakdown(repos: GitHubRepo[]): Record<string, number> {
  const breakdown: Record<string, number> = {};
  
  repos.forEach((repo) => {
    if (repo.language) {
      breakdown[repo.language] = (breakdown[repo.language] || 0) + 1;
    }
  });
  
  return breakdown;
}
