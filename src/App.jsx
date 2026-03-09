import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import DockNav from './components/DockNav'
import DotPattern from './components/dot-pattern'
import PillNav from './components/PillNav'
import './index.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

/* Simple inline SVG data URI for the AD logo — works as a round icon */
const adLogoSvg = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="3"/>
  <text x="50" y="58" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="36" font-weight="700" fill="currentColor">AD</text>
</svg>
`)}`

function App() {
  return (
    <>
      <div className="dot-pattern-wrapper">
        <DotPattern
          width={24}
          height={24}
          cr={1.2}
          glow={false}
        />
      </div>
      <PillNav
        logo={adLogoSvg}
        logoAlt="AD Logo"
        items={navItems}
        activeHref="#home"
      />
      <div className="app">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <DockNav />
      </div>
    </>
  )
}

export default App
