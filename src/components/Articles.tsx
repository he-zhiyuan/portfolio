import { motion } from 'framer-motion'
import { ArrowUpRight, Eye, ThumbsUp } from 'lucide-react'
import { articles } from '../data/articles'
import type { Article } from '../types'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const platformConfig: Record<Article['platform'], { label: string; bg: string; text: string }> = {
  juejin:      { label: '掘金',     bg: 'bg-blue-100 dark:bg-blue-900/40',   text: 'text-blue-600 dark:text-blue-400' },
  zhihu:       { label: '知乎',     bg: 'bg-sky-100 dark:bg-sky-900/40',     text: 'text-sky-600 dark:text-sky-400' },
  wechat:      { label: '公众号',   bg: 'bg-green-100 dark:bg-green-900/40', text: 'text-green-600 dark:text-green-400' },
  weibo:       { label: '微博',     bg: 'bg-red-100 dark:bg-red-900/40',     text: 'text-red-600 dark:text-red-400' },
  xiaohongshu: { label: '小红书',   bg: 'bg-rose-100 dark:bg-rose-900/40',   text: 'text-rose-600 dark:text-rose-400' },
}

function formatNumber(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)
}

export default function Articles() {
  return (
    <section
      id="articles"
      className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold mb-3">精选文章</h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 gap-6"
        >
          {articles.map(article => {
            const platform = platformConfig[article.platform]
            return (
              <motion.article key={article.id} variants={cardVariants}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${platform.bg} ${platform.text}`}>
                      {platform.label}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {article.publishedAt}
                    </span>
                  </div>

                  <h3 className="font-semibold text-base mb-2 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3 mb-4">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
                      {article.views !== undefined && (
                        <span className="flex items-center gap-1">
                          <Eye size={12} />
                          {formatNumber(article.views)}
                        </span>
                      )}
                      {article.likes !== undefined && (
                        <span className="flex items-center gap-1">
                          <ThumbsUp size={12} />
                          {formatNumber(article.likes)}
                        </span>
                      )}
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-gray-300 dark:text-gray-600 group-hover:text-accent-500 transition-colors"
                    />
                  </div>
                </a>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
