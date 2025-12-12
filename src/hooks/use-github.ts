import { useQuery } from "@tanstack/react-query";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  fetchGitHubEvents,
  GitHubProfile,
  GitHubRepo,
  GitHubEvent,
} from "@/lib/github";

export function useGitHubProfile(username?: string) {
  return useQuery<GitHubProfile | null>({
    queryKey: ["github-profile", username],
    queryFn: () => fetchGitHubProfile(username),
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
  });
}

export function useGitHubRepos(username?: string, limit = 6) {
  return useQuery<GitHubRepo[]>({
    queryKey: ["github-repos", username, limit],
    queryFn: () => fetchGitHubRepos(username, limit),
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
  });
}

export function useGitHubEvents(username?: string, limit = 10) {
  return useQuery<GitHubEvent[]>({
    queryKey: ["github-events", username, limit],
    queryFn: () => fetchGitHubEvents(username, limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
}
