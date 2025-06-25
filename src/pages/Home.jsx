import React from 'react';
import BootIntro from '../components/BootIntro';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <>
      <BootIntro />
      <ProfileCard />
    </>
  );
}


// About.jsx
import React from 'react';
import AboutSection from '../components/AboutSection';

export default function About() {
  return <AboutSection />;
}


// Projects.jsx
import React from 'react';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
  return <ProjectsSection />;
}
