import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const gradients = [
  'from-violet-400 to-indigo-600',
  'from-blue-400 to-cyan-600',
  'from-emerald-400 to-teal-600',
  'from-orange-400 to-pink-600',
  'from-rose-400 to-red-600',
  'from-amber-400 to-orange-600',
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold mb-3">代码项目</h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`h-44 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-white text-6xl font-bold select-none">
                    {project.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub 仓库`}
                    className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} 在线演示`}
                      className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <ExternalLink size={15} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
