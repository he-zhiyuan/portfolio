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
              你好，我是何致远——2003 年生于深圳，计算机专业在读，曾获全国编程竞赛奖项。开发者、写作者，也是一个长期主义者。
            </p>
            <p>
              我的兴趣横跨科技互联网、AI 应用与跨学科阅读写作。我喜欢构建有实际用途的工具，也喜欢把复杂的东西写得清晰易懂。代码是我思考的载体，文字是我表达的方式。
            </p>
            <p>
              目前专注于全栈开发和 AI 工具的落地应用。如果你对合作、交流或一起做些有趣的事情感兴趣，欢迎随时联系我。
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
