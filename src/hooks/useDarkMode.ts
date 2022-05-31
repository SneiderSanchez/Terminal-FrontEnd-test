import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, toggleTheme, setTheme };
};
