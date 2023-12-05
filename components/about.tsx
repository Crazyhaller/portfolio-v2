'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './sectionHeading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        While currently pursuing BTech degree in{' '}
        <span className="font-medium">IT</span>, I decided to start my journey
        for programming / development. I enrolled in an online course and
        learned <span className="font-medium">Full-Stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        designing and building projcts. I{' '}
        <span className="underline">love</span> the feeling of finally
        completing the project or solving errors and bugs during the process. My
        core stack is{' '}
        <span className="font-medium">
          React, Next.js, Tailwind, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and the programming language Java.
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a Full
        Stack or Frontend Developer.
      </p>

      <p>
        <span className="italic font-medium">When I'm not coding</span>, I enjoy
        playing football, listening to music, play video games and watch
        YouTube. I also enjoy{' '}
        <span>
          listening to podcasts, read articles and stuff and watch doumentaries
          about different things
        </span>
        . I also want to learn mountain climbing and swimming in the future as I
        am very fond of nature, mountains and water.
      </p>
    </motion.section>
  )
}
