'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import WorkSliderBtn from '@/components/ui/web-components/WorkSliderBtn';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Search Your Country',
    description:
      'Search your country based on region and enter the name on search area. Implementation using search country API.',
    stack: [{ name: 'React JS' }, { name: 'SCSS' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png',
    live: 'https://aniketbumbc.github.io/search-you-country/',
    github: 'https://github.com/aniketbumbc/search-you-country',
  },
  {
    num: '02',
    category: 'frontend-responsive',
    title: 'Project-2',
    description:
      'Enjoy Delicious home titleSushi Food websites for food ordering purpose. See new menus add and order shushis',
    stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb2.png',
    live: 'https://aniket-shushi-restro.netlify.app/',
    github: 'https://github.com/aniketbumbc/shusi-restro-project',
  },
  {
    num: '03',
    category: 'frontend-angular',
    title: 'Project-3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi aperiam minus numquam delectus velit fuga quam quisquam',
    stack: [{ name: 'Next js' }, { name: 'Node' }, { name: 'Tailwand.css' }],
    image: '/assets/work/thumb3.png',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} Project
              </h2>
              <p className='text-white/60'>{project.description}</p>

              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.live} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 h-full bg-black/10 z-10'></div>

                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
