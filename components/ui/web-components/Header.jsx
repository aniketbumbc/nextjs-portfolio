import Link from 'next/link';
import { Button } from '../button';
import MobileNav from './MobileNav';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      {/* Logo*/}
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Aniket<span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* 
          Desktop nav & hire me button
        */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>HIRE ME</Button>
          </Link>
        </div>

        {/* Mobile Nav */}

        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
