import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  postgresql,
  rubyrails,
  movie,
  moringa,
  dcc,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'Italanta',
    icon: dcc,
    iconBg: '#333333',
    date: 'Feb 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Movie Web',
    description: 'This is a single-page application that lets you view movies, view its cast and watch its trailler.',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'Restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/jeffoty/movie-web',
    demo: 'https://movie-web-jeffoty.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Moringa Alumni Website',
    description:
      'This is an alumni website for moringa students where they can register and login to interact and get job opportunities.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Ruby on Rails',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: moringa,
    repo: 'https://github.com/iamkibeh/client',
    demo: 'https://moringa-alumni.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
