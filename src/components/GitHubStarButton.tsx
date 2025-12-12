import { useState, useEffect } from 'react';
import { Star, Github } from 'lucide-react';
import { Button } from './ui/button';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';

interface GitHubRepo {
  stargazers_count: number;
  html_url: string;
}

export function GitHubStarButton() {
  const [stars, setStars] = useState<number | null>(null);
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/noxium-dev/freelance-portfolio', {
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
          }
        });
        
        if (response.ok) {
          const data: GitHubRepo = await response.json();
          setStars(data.stargazers_count);
          setRepoUrl(data.html_url);
        } else {
          // Fallback if repo doesn't exist or is private
          setStars(0);
          setRepoUrl('https://github.com/noxium-dev');
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error);
        setStars(0);
        setRepoUrl('https://github.com/noxium-dev');
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, []);

  if (loading) {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-md rounded-md border border-cosmic-cyan/30 shadow-lg shadow-cosmic-cyan/10"></div>
        <Button
          variant="outline"
          size="default"
          className="relative bg-transparent border-transparent"
          disabled
        >
          <Github className="w-5 h-5 mr-2" />
          <Star className="w-5 h-5 mr-2 text-yellow-400" />
          <span>...</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-md rounded-md border border-cosmic-cyan/30 shadow-lg shadow-cosmic-cyan/10"></div>
      <Button
        variant="outline"
        size="default"
        className="relative bg-transparent border-transparent hover:bg-background/20 hover:border-cosmic-cyan/50 transition-all duration-200"
        asChild
      >
        <a
          href="https://github.com/noxium-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-medium">{stars}</span>
        </a>
      </Button>
    </div>
  );
}