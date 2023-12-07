import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import bestdeal from '@/public/bestdeal.png'
import esocial from '@/public/e-social.jpeg'
import housemarketplace from '@/public/housemarketplace.png'
import projectmanager from '@/public/project-manager.png'
import shopwave from '@/public/shop-wave.png'
import threadx from '@/public/thread-x.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Web Developer Intern',
    location: 'Remote',
    description:
      'I worked as a web developer for 2 months where I worked on multiple Frontend projects. I also upskilled to the Full Stack Development.',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2022 - Jan 2023',
  },
  {
    title: 'Full-Stack Developer Intern',
    location: 'Remote',
    description:
      'I worked as a full-stack developer for 4 and a half months on a project with the Dev team to design and build a complete web platform for the organization. I worked on UI/UX, Frontend and Backend development of the project.',
    icon: React.createElement(FaReact),
    date: 'May 2023 - Sep 2023',
  },
] as const

export const projectsData = [
  {
    title: 'Best Deal',
    description: `The app is a web scraper that
    scrapes the Amazon website for the best deals on products.`,
    tags: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Bright Data',
      'Cheerio',
      'Nodemailer',
    ],
    imageUrl: bestdeal,
  },
  {
    title: 'E-Social',
    description: `
    This social media app enables users to share life events through posts, engaging with likes and comments.`,
    tags: ['MERN Stack', 'Redux', 'Material UI'],
    imageUrl: esocial,
  },
  {
    title: 'House Marketplace',
    description: `This property marketplace app allows users to search and list properties for sale or rent.`,
    tags: ['React.js', 'Firebase', 'Leaflet', 'Geocoding API'],
    imageUrl: housemarketplace,
  },
  {
    title: 'Project Manager',
    description: `
      It is a project management app that allows users to create projects
      and add tasks to those projects.`,
    tags: ['MERN Stack', 'GraphQL', 'React-Bootstrap'],
    imageUrl: projectmanager,
  },
  {
    title: 'Shop Wave',
    description: `This e-commerce app enables users to add items to their cart, checkout with PayPal, and manage their store inventory.`,
    tags: ['MERN Stack', 'Redux', 'PayPal', 'React-Bootstrap'],
    imageUrl: shopwave,
  },
  {
    title: 'Thread-X',
    description: `It enables users to share life events with posts, including images. Users can also create and join communities, posting and commenting within them.`,
    tags: ['Next.js', 'TypeScript', 'Clerk', 'TailwindCSS'],
    imageUrl: threadx,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'TailwindCSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Redux Toolkit',
  'Next.js',
  'Node.js',
  'MongoDB',
  'Express.js',
  'Git',
  'GitHub',
  'GraphQL',
  'Apollo GraphQL',
  'SQL',
  'MySQL',
  'Java',
] as const
