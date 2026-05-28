import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'

const FEATURED_PLATFORMS = ['GitHub', '掘金', '知乎']

export default function Contact() {
  const featuredLinks = socialLinks.filter(l => FEATURED_PLATFORMS.includes(l.platform))

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold mb-3">联系我</h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full mb-6 mx-auto" />
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
            无论是项目合作、技术交流还是一起聊聊有趣的想法，都欢迎给我发邮件，我会尽快回复。
          </p>
        </motion.div>

        <motion.a
          href="mailto:your@email.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent-600 hover:bg-accent-700 active:bg-accent-800 text-white font-medium text-lg transition-colors shadow-md hover:shadow-lg mb-12"
        >
          <Mail size={20} />
          your@email.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          {featuredLinks.map(link => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`访问我的 ${link.platform}`}
              className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              {link.platform}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
