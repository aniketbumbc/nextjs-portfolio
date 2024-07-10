import { Button } from '../components/ui/button';
import { FiDownload } from 'react-icons/fi';
import SocialIcons from '@/components/ui/web-components/SocialIcons';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24'>
          <div className='text-center xl:text-left'>
            <span> Software Engineer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br />{' '}
              <span className='text-accent'>Aniket Bhavsar</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white'>
              I excel at crafting elegant digital experience and I am proficient
              in various programing language and technologies.
            </p>
            {/*  Button social media  */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span className='text-xl'>Download CV</span>
                <FiDownload />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <SocialIcons />
              </div>
            </div>
          </div>

          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
