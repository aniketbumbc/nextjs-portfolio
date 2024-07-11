'use client';

import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaJs,
  FaFigma,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor magnam, eveniet quibusdam incidunt libero at eius.',
  info: [
    {
      filedName: 'Name',
      filedValue: 'Aniket Bhavsar',
    },
    {
      filedName: 'Phone Number',
      filedValue: '+918879989714',
    },
    {
      filedName: 'Email',
      filedValue: 'aniket.umbc@gmail.com',
    },
    {
      filedName: 'Work Status',
      filedValue: 'Available for work',
    },
    {
      filedName: 'Language',
      filedValue: 'English',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure, obcaecati suscipit nihil officiis nemo voluptas voluptatum.',
  items: [
    {
      company: 'Tech Solution Inc.',
      position: 'Fullstack Developer',
      duration: '2022-present',
    },
    {
      company: 'Tech Solution Inc.',
      position: 'Fullstack Developer',
      duration: '2022-present',
    },
    {
      company: 'Tech Solution Inc.',
      position: 'Fullstack Developer',
      duration: '2022-present',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure, obcaecati suscipit nihil officiis nemo voluptas voluptatum.',
  items: [
    {
      institute: 'Tech Solution Inc.',
      degree: 'Fullstack Developer',
      duration: '2022-present',
    },
    {
      institute: 'Tech Solution Inc.',
      degree: 'Fullstack Developer',
      duration: '2022-present',
    },
    {
      institute: 'Tech Solution Inc.',
      degree: 'Fullstack Developer',
      duration: '2022-present',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure, obcaecati suscipit nihil officiis nemo voluptas voluptatum.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'Html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },

    {
      icon: <FaJs />,
      name: 'java script',
    },
    {
      icon: <FaAngular />,
      name: 'Angular 2+',
    },
    {
      icon: <FaReact />,
      name: 'React JS',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node JS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next JS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },

    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ],
};

const Resume = () => {
  return <div> hello resume </div>;
};

export default Resume;
