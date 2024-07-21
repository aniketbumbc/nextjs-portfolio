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
} from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: 'About me',
  description:
    'I love to do marathon, acquiring new skills, swim in the open water, strong believe in the meditation. Fond of traveling and observing different cultures and understanding humans. Spreading more empathy and solving humans problem with the assistance of technology.',
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
      filedName: 'Status',
      filedValue: 'Available for work',
    },
    {
      filedName: 'Email',
      filedValue: 'aniket.umbc@gmail.com',
    },

    {
      filedName: 'Language',
      filedValue: 'English',
    },

    {
      filedName: 'Experience',
      filedValue: '7+ Years',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Experience in web-based enterprise/saas applications using JavaScript/Type script and JavaScript Framework. Good understanding of Generative AI, LLM models, Function calling along with different features.',
  items: [
    {
      company: 'Priceline Technology.',
      position: 'Software Engineer II',
      duration: '2022-present',
    },
    {
      company: 'Here Technologies',
      position: 'Software Engineer II',
      duration: '2019-2021',
    },
    {
      company: 'GEP private Solution.',
      position: 'Software Engineer',
      duration: '2017-2019',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Education',
  description:
    'I graduated with Masters of Science in Information Systems from the UMBC. I am currently working in the IT industry for more than 7 years of experiences as Software Engineer.',
  items: [
    {
      institute: 'UMBC (USA).',
      degree: 'Mater of Science in Information System.',
      duration: '2013-2016',
    },
    {
      institute: 'Mumbai University.',
      degree: 'Engineering in Computer Science.',
      duration: '2009-2012',
    },
    {
      institute: 'Mumbai University.',
      degree: 'Diploma in Computer Science.',
      duration: '2006-2009',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description:
    'Looking forward to an opportunity to work with cutting-edge technologies on the challenge and diverse projects.',
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
                          className='bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='max-w-[260px] min-h-[20px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 w-[250px] text-balance'>
                              {item.company}
                            </p>
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
                          className='bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start'
                        >
                          {/* <span className='text-accent'>{item.duration}</span> */}
                          <h3 className='max-w-[260px] min-h-[30px] text-center lg:text-left'>
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

            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>

                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delay={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2  gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.filedName}</span>
                        <span className='text-accent'>{item.filedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
