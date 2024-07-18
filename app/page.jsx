import { Button } from '../components/ui/button';
import { FiDownload } from 'react-icons/fi';
import SocialIcons from '@/components/ui/web-components/SocialIcons';
import Photo from '@/components/ui/web-components/Photo';
import Stats from '@/components/ui/web-components/Stats';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span> Software Engineer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br />{' '}
              <span className='text-accent'>Aniket Bhavsar</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white'>
              I am currently working in the IT industry for more than 7+ years
              of experiences. I am proficient in various programing language and
              technologies.
            </p>
            {/*  Button social media  */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a
                href='../assets/resume/CV-Aniket-Bhavsar.pdf'
                download='CV-Aniket-Bhavsar'
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2 hover:text-primary'
                >
                  <span className='text-xl'>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <SocialIcons
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500
                  '
                />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
