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
      'I worked as a web developer for 2 months where I worked on multiple Frotend projects. I also upskilled to the Full Stack.',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2022 - Jan 2023',
  },
  {
    title: 'Full-Stack Developer Intern',
    location: 'Remote',
    description:
      'I worked as a full-stack developer for 4 and a half months on a project with the Dev team to design and build a complete web platform for the organization. I worked on UI/UX, Frotend and Backend development of the project.',
    icon: React.createElement(FaReact),
    date: 'May 2023 - Sep 2023',
  },
] as const

export const projectsData = [
  {
    title: 'Best Deal',
    description: `This app was built using Next.js, Typescript, Bright Data,
    TailwindCSS, Cheerio and Nodemailer. The app is a web scraper that
    scrapes the Amazon website for the best deals on products. The app
    then sends an email to the user with the best deals on products that
    they are interested in.`,
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
    Built with MERN Stack, Redux, and Material UI, this social media app enables users to share life events through posts, engaging with likes and comments. The app includes a search feature for post titles and allows users to upload images to enhance their posts.`,
    tags: ['MERN Stack', 'Redux', 'Material UI'],
    imageUrl: esocial,
  },
  {
    title: 'House Marketplace',
    description: `Built with React JS and hosted on Firebase, this property marketplace app allows users to search and list properties for sale or rent. It features a map displaying property locations using Leaflet and Geocoding API. The app is responsive for mobile devices and includes Google OAuth for authentication. The backend is implemented with Firebase and Firestore.`,
    tags: ['React JS', 'Firebase', 'Leaflet', 'Geocoding API'],
    imageUrl: housemarketplace,
  },
  {
    title: 'Project Manager',
    description: `This app was built using MERN Stack, GraphQL, and React-Bootstrap.
      It is a project management app that allows users to create projects
      and add tasks to those projects. Users can also add other users to
      their projects.`,
    tags: ['MERN Stack', 'GraphQL', 'React-Bootstrap'],
    imageUrl: projectmanager,
  },
  {
    title: 'Shop Wave',
    description: `Built with MERN Stack, Redux, PayPal, and React-Bootstrap, this e-commerce app enables users to add items to their cart, checkout with PayPal, and manage their store inventory. The app includes a search feature for item names, complete user authentication, authorization, and Admin privileges. Users can leave reviews and make payments using PayPal.`,
    tags: ['MERN Stack', 'Redux', 'PayPal', 'React-Bootstrap'],
    imageUrl: shopwave,
  },
  {
    title: 'Thread-X',
    description: `This social media app, built with Next.js, Typescript, Clerk, and TailwindCSS, enables users to share life events with posts, including images. Featuring a search function, users can find posts by title. The app utilizes Clerk for authentication, authorization, and its Webhook, and employs TailwindCSS for styling. Additionally, users can create and join communities, posting and commenting within them.`,
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
  'Redux',
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
