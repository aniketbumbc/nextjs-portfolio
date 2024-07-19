'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Good understanding of creating, building, and maintaining websites and web applications that run online on a browser.',
    href: 'https://aniketb-designer-developer.netlify.app/code',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:
      'UI design which are responsible for creating, designing, and organizing interactive elements.',
    href: 'https://aniketb-designer-developer.netlify.app/portfolio',
  },
  {
    num: '03',
    title: 'Backend development',
    description:
      'Good knowledge of backend technologies like Java, NodeJS and Python programming language. Experience in writing APIs, creating libraries.',
    href:
      'https://github.com/aniketbumbc?tab=repositories&q=&type=&language=java&sort=',
  },
  {
    num: '04',
    title: 'Native Apps',
    description:
      'Experienced and build React Native iOS and Android apps. The framework lets you create an application for various platforms by using the same codebase.',
    href: 'https://github.com/aniketbumbc/RN-FoodTemplate',
  },
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='grid grid-cols-1  md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
              >
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                    target='_blank'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
                <p className='text-white/60'>{service.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
