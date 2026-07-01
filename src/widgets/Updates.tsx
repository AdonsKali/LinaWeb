import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Block from "../ui/Block";
import AboutSection from "../ui/AboutSection";
import { useTranslation } from "react-i18next";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

const LatestUpdates: React.FC = () => {
  const { t } = useTranslation();
  
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  useEffect(() => {
    loadCommits();
    const interval = setInterval(loadCommits, 300000);
    return () => clearInterval(interval);
  }, []);

  const loadCommits = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/commits-cache.json`);
      
      if (!response.ok) {
        const altResponse = await fetch(`commits-cache.json`);
        if (!altResponse.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await altResponse.json();
        setCommits(Array.isArray(data) ? data : []);
        setLastUpdate(new Date().toLocaleString());
        return;
      }
      
      const data = await response.json();
      
      if (Array.isArray(data) && data.length > 0) {
        setCommits(data);
        setLastUpdate(new Date().toLocaleString());
      } else if (data && data.message) {
        throw new Error(`GitHub API: ${data.message}`);
      } else {
        setCommits([]);
      }
      
    } catch (err) {
      console.error('Failed to load commits:', err);
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      
      try {
        const cached = localStorage.getItem('cached-commits');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setCommits(parsed);
            setError(null); 
          }
        }
      } catch (e) {
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return "только что";
    if (diffMins < 60) return `${diffMins} мин. назад`;
    if (diffHours < 24) return `${diffHours} ч. назад`;
    if (diffDays === 1) return "вчера";
    if (diffDays < 7) return `${diffDays} дн. назад`;
    
    const data_format = (t("lang") == "RU") ? date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long"
    }) : date.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "long"
    });
    return data_format;
  };

  if (loading && commits.length === 0) {
    return (
      <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
        <div className="animate-pulse space-y-3">
          <div className="h-5 bg-purple-200 rounded w-1/3"></div>
          {[1, 2, 3].map(i => (
            <div key={i} className="h-12 bg-purple-100 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error && commits.length === 0) {
    return (
      <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
        <p className="text-red-500 text-sm">❌ {error}</p>
        <button 
          onClick={loadCommits}
          className="mt-3 text-purple-600 hover:text-purple-800 underline text-sm"
        >
          {t("last_updates_section.try_again")}
        </button>
      </div>
    );
  }

  return (
    <>
      <AboutSection id="updates" aria-label="Последние обновления и изменения в Lina AI">
        {t('last_updates_section.header')}
      </AboutSection>
      <Block>
        <div className="space-y-2 max-h-100 overflow-y-auto">
          {commits.map((commit, index) => (
            <motion.a
              key={commit.sha}
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-xl hover:bg-purple-50 transition-all border border-purple-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex gap-3">
                <div className="shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-purple-900 text-sm font-medium wrap-break-word">
                    {commit.commit.message.split('\n')[0]}
                  </p>
                  <div className="flex gap-3 mt-1 text-xs text-purple-500">
                    <span>{formatDate(commit.commit.author.date)}</span>
                    <span>•</span>
                    <span>{commit.commit.author.name}</span>
                    <span className="font-mono text-purple-300">
                      {commit.sha.substring(0, 7)}
                    </span>
                  </div>
                </div>
                <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-4 pt-3 border-t border-purple-100 text-center">
          <a 
            href="https://github.com/AdonsKali/LinaDesk/commits/dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-600 hover:text-purple-800 underline"
          >
            {t("last_updates_section.all_updates")}
          </a>
          {lastUpdate && (
            <p className="text-xs text-purple-300 mt-2">
              {t("last_updates_section.updated")}: {lastUpdate}
            </p>
          )}
        </div>
      </Block>
    </>
  );
};

export default LatestUpdates;