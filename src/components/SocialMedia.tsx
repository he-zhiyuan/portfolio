import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

function PlatformIcon({ icon, color }: { icon: string; color: string }) {
  if (icon === 'github') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  }

  return (
    <span
      className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {icon === 'juejin'      && '掘'}
      {icon === 'zhihu'       && '知'}
      {icon === 'wechat'      && '微'}
      {icon === 'weibo'       && '博'}
      {icon === 'xiaohongshu' && '红'}
    </span>
  )
}

export default function SocialMedia() {
  return (
    <section id="social" className="py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold mb-3">社交媒体</h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {socialLinks.map(link => (
            <motion.div key={link.platform} variants={cardVariants}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`访问我的 ${link.platform} 主页`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${link.color}18` }}
                >
                  <span style={{ color: link.color }}>
                    <PlatformIcon icon={link.icon} color={link.color} />
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {link.platform}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                    {link.handle}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-gray-300 dark:text-gray-600 group-hover:text-accent-500 transition-colors flex-shrink-0"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
