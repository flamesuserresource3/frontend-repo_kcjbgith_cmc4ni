import { useEffect, useState } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 py-3 mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 bg-white/60 dark:bg-black/40 border border-black/10 dark:border-white/10 flex items-center justify-between transition-colors duration-500">
        <a href="#home" className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-600 grid place-items-center shadow-inner">
            <Sparkles className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>
          <span className="font-semibold tracking-wide">Mumtaz A. Rosyid</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a className="hover:underline underline-offset-8" href="#about">About</a>
          <a className="hover:underline underline-offset-8" href="#experience">Experience</a>
          <a className="hover:underline underline-offset-8" href="#skills">Skills</a>
          <a className="hover:underline underline-offset-8" href="#contact">Contact</a>
        </div>
        <button
          aria-label="Toggle dark mode"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-gray-800 dark:text-gray-200 bg-white/50 dark:bg-black/30 hover:bg-white/70 dark:hover:bg-black/50 transition-colors duration-300"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-4 w-4" />
              <span className="hidden sm:inline">Light</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span className="hidden sm:inline">Dark</span>
            </>
          )}
        </button>
      </nav>
    </header>
  );
}
