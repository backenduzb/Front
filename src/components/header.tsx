import { useState } from "react";
import ImageLogo from "../assets/img/image.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Header() {
  const [isDark, setIsDark] = useState(
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <header className="bg-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-around items-center">
        <div className="h-[60px] flex justify-around items-center">
          <img src={ImageLogo} className="h-[120px] w-[120px] mt-4" />
          <h1 className="text-xl font-bold text-black dark:text-white text-[24px]">EDUTEST</h1>
        </div>
        <nav className="hidden md:flex space-x-6 items-center gap-3">
          <a
            href="#"
            className="relative text-gray-800 dark:text-gray-200 group transition-transform duration-300 ease-in-out"
          >
           {t('tests')}
            <span className="absolute rounded left-0 -bottom-1 w-0 h-[2.5px] bg-indigo-500 dark:bg-green-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
          <a
            href="#"
            className="relative rounded group text-gray-800 dark:text-gray-200 transition-transform duration-300 ease-in-out"
          >
            {t('connect')}
            <span className="absolute rounded left-0 -bottom-1 w-0 h-[2.5px] bg-indigo-500 dark:bg-green-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
          <a
            href="#"
            className="relative group text-gray-800 dark:text-gray-200 transition-transform duration-300 ease-in-out"
          >
            {t('info')}
            <span className="absolute rounded left-0 -bottom-1 w-0 h-[2.5px] bg-indigo-500 dark:bg-green-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
          <Link to="/raiting">
          <a
            className="relative group text-gray-800 dark:text-gray-200 transition-transform duration-300 ease-in-out"
          >
            {t('raiting')}
            <span className="absolute rounded left-0 -bottom-1 w-0 h-[2.5px] bg-indigo-500 dark:bg-green-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
          </Link>
          <div className="">
            <Link to="student/login">
              <a
                className="relative group text-[14px]  text-gray-200 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-green-700 dark:bg-green-600 p-3 m-1 transition-all duration-300 ease-out"
              >
                {t('student_login')}
              </a>
            </Link>
            <Link to="teacher/login">
              <a
                className="relative group text-[14px]  text-gray-200 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-green-700 dark:bg-green-600 p-3 m-1 transition-all duration-300 ease-out"
              >
                {t('teacher_login')}
              </a>
            </Link>
          </div>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center ml-4 justify-center rounded-full transition"
          >
            {isDark ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-50" viewBox="0 0 16 16">
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-black" viewBox="0 0 16 16">
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
            </svg>}
          </button>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-gray-100 dark:bg-zinc-800 text-sm text-black dark:text-white px-2 py-1 rounded ml-2"
          >
            <option value="uz">O‘zbekcha</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>

        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {isDark ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
            </svg>}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900">
          <a href="#" className="block text-gray-800 dark:text-gray-200">Bosh sahifa</a>
          <a href="#" className="block text-gray-800 dark:text-gray-200">Haqida</a>
          <a href="#" className="block text-gray-800 dark:text-gray-200">Aloqa</a>
        </div>
        
      )}
    </header>
  );
}