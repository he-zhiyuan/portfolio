import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-3">关于我</h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...sectionVariants, visible: { ...sectionVariants.visible, transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' } } }}
            className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              你好！我是一名热爱开发与写作的独立创造者。在过去几年里，我专注于构建高质量的 Web 应用，同时在技术博客和社交媒体上持续分享我的经验与思考。
            </p>
            <p>
              我相信技术与表达缺一不可——写代码让我解决真实问题，写文章让我梳理思路、与更多人连接。我享受从零到一构建产品的过程，也享受用文字把复杂的概念讲得简单易懂。
            </p>
            <p>
              目前我的技术方向是全栈开发，对前端工程化和 AI 工具的应用尤其感兴趣。如果你对合作、交流或一起做些有趣的事情感兴趣，欢迎随时联系我。
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...sectionVariants, visible: { ...sectionVariants.visible, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } } }}
            className="space-y-6"
          >
            {skillCategories.map(cat => (
              <div key={cat.category}>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
