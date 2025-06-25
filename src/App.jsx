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

export default function App() {
  // ⬇️ This ensures we reset scroll once BootIntro is gone
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 4000); // same as BootIntro hide delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <BootIntro />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <Sidebar />
        <CustomCursor />
        <HackModal />
        <main className="px-4 sm:px-8 md:px-16 space-y-20">
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
      </div>
    </>
  );
}
