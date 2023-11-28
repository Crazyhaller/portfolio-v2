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
    description: `This app was built using MERN Stack, Redux, and Material UI. It is a
      social media app that allows users to post interesting events that
      happened in their lives. Users can like and comment on each
      other&apos;s posts. The app also has a search feature that allows
      users to search for posts by title. The app also has a feature that
      allows users to upload images to their posts.`,
    tags: ['MERN Stack', 'Redux', 'Material UI'],
    imageUrl: esocial,
  },
  {
    title: 'House Marketplace',
    description: `This app was built using React JS and is hosted on Firebase. Users
      are able to search properties on sale or rent and can list their own
      property for the same. It also has a map feature that shows the
      location of the property which was implemented using Leaflet and
      Geocoding API. This app is also responsive for mobile devices. It
      also has authetication feature using Google oAuth. The backend is
      built using Firebase and Firestore.`,
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
    description: `This app was built using MERN Stack, Redux, PayPal and
      React-Bootstrap. It is an e-commerce app that allows users to add
      items to their cart and checkout using PayPal. Users can also add
      items to the store and edit or delete those items. It also has a
      search feature that allows users to search for items by name. It
      also includes complete user authentication and authorization along
      with Admin privileges. Users can also leave reviews for items and
      can pay for items using PayPal.`,
    tags: ['MERN Stack', 'Redux', 'PayPal', 'React-Bootstrap'],
    imageUrl: shopwave,
  },
  {
    title: 'Thread-X',
    description: `This app was built using Next.js, Typescript, Clerk, TailwindCSS. It
      is a social media app that allows users to post interesting events
      that happened in their lives. Users can like and comment on each
      other&apos;s posts. The app also has a search feature that allows
      users to search for posts by title. The app also has a feature that
      allows users to upload images to their posts. It uses the Clerk
      authentication service to handle user authentication and
      authorization along with its own Webhook. It also uses TailwindCSS
      for styling. It also has a feature of creating communities and
      joining communities. Users can also create posts in communities and
      comment on posts in communities.`,
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
