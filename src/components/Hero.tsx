import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
          className="mb-8 flex justify-center"
        >
          <img
            src="/favicon.png"
            alt="何致远"
            className="w-28 h-28 rounded-full object-cover shadow-xl ring-4 ring-accent-100 dark:ring-accent-900"
          />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        >
          何致远
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.2)}
          className="text-lg sm:text-xl text-accent-600 dark:text-accent-400 font-medium mb-5"
        >
          开发者 · 写作者 · 长期主义者
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.3)}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          用代码构建产品，用文字传递思考。关注科技互联网、AI 与跨学科阅读写作。
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.4)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 active:bg-accent-800 text-white font-medium transition-colors shadow-md hover:shadow-lg"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-accent-400 dark:hover:border-accent-500 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 font-medium transition-colors"
          >
            联系我
          </a>
        </motion.div>
      </div>
    </section>
  )
}
