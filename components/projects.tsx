'use client'

import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useActiveSectionContext } from '@/context/activeSectionContext'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const { ref, inView } = useInView()
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData
          .slice()
          .reverse()
          .map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </div>
    </section>
  )
}
