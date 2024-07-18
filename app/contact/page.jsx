'use client';

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+(91) 8879989714',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'aniket.umbc@gmail.com',
  },

  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Mumbai Maharastra',
  },
];

const Contact = () => {
  const tempEmailData = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    selectedService: '',
    textAreaText: '',
  };

  const [mailData, setMailData] = useState(tempEmailData);

  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault();
    console.log('send Email');
    console.log(mailData);
  };

  const onSelectChange = (e) => {
    console.log(e);
    setMailData({ ...mailData, selectedService: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form section */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit hic quis accusantium culpa amet.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='fname'
                  placeholder='First Name'
                  onChange={(e) =>
                    setMailData({ ...mailData, fname: e.target.value })
                  }
                />
                <Input
                  type='lname'
                  placeholder='Last Name'
                  onChange={(e) =>
                    setMailData({ ...mailData, lname: e.target.value })
                  }
                />
                <Input
                  type='email'
                  placeholder='Email Address'
                  onChange={(e) =>
                    setMailData({ ...mailData, email: e.target.value })
                  }
                />
                <Input
                  type='Phone'
                  placeholder='Phone Number'
                  onChange={(e) =>
                    setMailData({ ...mailData, phone: e.target.value })
                  }
                />
              </div>
              <Select onChange={onSelectChange}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>

                <SelectContent onChange={onSelectChange}>
                  <SelectGroup onChange={onSelectChange}>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='est'>Web Development</SelectItem>
                    <SelectItem value='cst'>UX/UI Design</SelectItem>
                    <SelectItem value='vst'>Node JS Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Text area */}

              <Textarea
                className='h-[200px]'
                placeholder='Type your message here'
                onChange={(e) => {
                  setMailData({ ...mailData, textAreaText: e.target.value });
                }}
              />
              <Button size='md' className='max-w-40 h-10' onClick={sendEmail}>
                Send message
              </Button>
            </form>
          </div>

          {/* info section */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
