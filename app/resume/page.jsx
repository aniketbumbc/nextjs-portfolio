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

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tabs';
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className='min-h-[70vh] w-full'>
            {/* experience tab */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                            <p className='text-white/60'>{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
