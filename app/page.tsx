'use client';

import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

