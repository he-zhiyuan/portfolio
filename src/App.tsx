import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Articles />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
