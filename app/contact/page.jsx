'use client';

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { toast, ToastContainer } from 'react-toast';
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
import { useState, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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
  const form = useRef();

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
    e.preventDefault();
    console.log(form);
    console.log('send Email');
    console.log(mailData);
    const name = mailData.fname + ' ' + mailData.lname;
    const phone = mailData.phone;
    const message = mailData.textAreaText + ' ' + phone;
    const emailSend = mailData.email;

    const formData = {
      to_name: 'Aniket',
      from_name: name,
      message: message,
      reply_to: emailSend,
    };

    emailjs
      .sendForm('service_9qkhkdc', 'template_4kieui5', form.current, {
        publicKey: 'gNNUemprIfu64Tll9',
      })
      .then(
        (data) => {
          if (data?.status === 200) {
            toast.success('Email successfully send.', {
              backgroundColor: '#00ff99',
              color: 'rgb(28 28 34)',
            });
            form.current.reset();
          }
        },
        (error) => {
          toast.error('Oops! Something went wrong.');
          console.error(error);
        }
      );
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
      <ToastContainer />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form section */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
                I'm quietly confident, naturally curious, good learner, and
                perpetually working on improving my chops one design problem at
                a time.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='name'
                  placeholder='Enter Your Name'
                  name='to_name'
                />

                <Input
                  type='email'
                  placeholder='Email Address'
                  name='reply_to'
                  onChange={(e) =>
                    setMailData({ ...mailData, email: e.target.value })
                  }
                />
                <Input
                  type='Phone'
                  placeholder='Whats App Number'
                  name='message'
                  onChange={(e) =>
                    setMailData({ ...mailData, phone: e.target.value })
                  }
                />
              </div>
              {/* <Select onChange={onSelectChange}>
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
              </Select> */}

              {/* Text area */}

              <Textarea
                className='h-[200px]'
                placeholder='Type your message here'
                name='message'
                onChange={(e) => {
                  setMailData({ ...mailData, textAreaText: e.target.value });
                }}
              />
              <Button size='md' className='max-w-40 h-10' type='submit'>
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
