import React from 'react';
import Sidebar from './components/Sidebar';
import CustomCursor from './components/CustomCursor';
import BootIntro from './components/BootIntro';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import FunTestimonials from './components/FunTestimonials';
import HackModal from './components/HackModal';

export default function App() {
  return (
    <>
      <Sidebar />
      <CustomCursor />
      <HackModal />

      <main className="ml-20">
        <section id="home">
          <BootIntro />
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
    </>
  );
}
