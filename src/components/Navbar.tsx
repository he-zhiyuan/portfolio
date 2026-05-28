import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

interface NavbarProps {
  theme: string
  onToggleTheme: () => void
}

const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '文章', href: '#articles' },
  { label: '社交媒体', href: '#social' },
  { label: '联系我', href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav
        aria-label="主导航"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        <a
          href="#"
          className="text-lg font-bold text-accent-600 dark:text-accent-400 hover:opacity-80 transition-opacity"
        >
          何致远
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? '切换为亮色模式' : '切换为暗色模式'}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? '切换为亮色模式' : '切换为暗色模式'}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="切换菜单"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 pb-4 pt-3 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
