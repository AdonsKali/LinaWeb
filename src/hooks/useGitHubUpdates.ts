import { useEffect, useState } from 'react';

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
      name: string;
    };
  };
  html_url: string;
}

export function useGitHubUpdates(repoOwner: string, repoName: string, refreshInterval: number = 160000) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [isNewUpdate, setIsNewUpdate] = useState(false);

  const fetchCommits = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/commits?per_page=5`
      );
      
      if (!response.ok) throw new Error('Failed to fetch');
      
      const data = await response.json();
      
      if (commits.length > 0 && data[0]?.sha !== commits[0]?.sha) {
        setIsNewUpdate(true);
        setTimeout(() => setIsNewUpdate(false), 5000);
      }
      
      setCommits(data);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error fetching commits:', error);
    }
  };

  useEffect(() => {
    fetchCommits();
    const interval = setInterval(fetchCommits, refreshInterval);
    
    return () => clearInterval(interval);
  }, [repoOwner, repoName, refreshInterval]);

  return { commits, lastUpdate, isNewUpdate, refetch: fetchCommits };
}