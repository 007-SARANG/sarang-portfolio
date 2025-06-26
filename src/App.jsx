import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CustomCursor from './components/CustomCursor';
import HackModal from './components/HackModal';
import BootIntro from './components/BootIntro';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import FunTestimonials from './components/FunTestimonials';
import LayoutWrapper from './components/LayoutWrapper';

export default function App() {
  // Reset scroll after boot intro ends
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <BootIntro />
      <LayoutWrapper>
        <Sidebar />
        <CustomCursor />
        <HackModal />

        <main className="ml-20 px-4 sm:px-8 md:px-16 space-y-20">
          <section id="home">
            <ProfileCard />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="fun">
            <FunTestimonials />
          </section>
        </main>
        <footer className="text-center text-sm text-gray-500 py-6">
         Made with <span className="text-red-500">❤️</span> by <span className="font-semibold text-white">Sarang</span>
        </footer>

      </LayoutWrapper>
    </>
  );
}
