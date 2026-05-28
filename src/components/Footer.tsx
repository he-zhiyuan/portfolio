const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '文章', href: '#articles' },
  { label: '社交媒体', href: '#social' },
  { label: '联系我', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {year} 你的名字. All rights reserved.
          </p>

          <nav aria-label="页脚导航" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 dark:text-gray-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
