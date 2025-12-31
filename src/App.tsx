import './App.css'
import data from './assets/info.json'
import type { PortfolioData } from './types/Portfolio'
import { ThemeToggle } from './component/shared/ThemeToggle'
import { HeroSection } from './component/sections/HeroSection'
import { SkillsSection } from './component/sections/SkillsSection'
import { ExperienceSection } from './component/sections/ExperienceSection'
import { ProjectsSection } from './component/sections/ProjectsSection'
import { EducationSection } from './component/sections/EducationSection'
import { CertificationsSection } from './component/sections/CertificationsSection'
import { AwardsSection } from './component/sections/AwardsSection'

const portfolio = data as unknown as PortfolioData

function App() {
  return (
    <div className="overflow-hidden w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 overflow-x-hidden">
      {/* Floating Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <main className="w-full h-screen overflow-x-hidden overflow-y-auto">
        <HeroSection user={portfolio.user} />
        <SkillsSection skills={portfolio.user.skills} />
        <ExperienceSection experiences={portfolio.experiences} />
        <ProjectsSection projects={portfolio.projects} />
        <EducationSection education={portfolio.education} />
        <CertificationsSection certifications={portfolio.certifications} />
        <AwardsSection awards={portfolio.awards} />
      </main>
    </div>
  )
}

export default App
