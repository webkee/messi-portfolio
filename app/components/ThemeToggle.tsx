'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="테마 토글"
    >
      {theme === 'light' ? (
        <FiMoon className="w-6 h-6 text-gray-800" />
      ) : (
        <FiSun className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
}

