'use client';

import { Sheet, SheetTrigger, SheetContent } from '../sheet';

import { usePathname } from 'next/navigation';
import { Link } from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'contact',
    path: '/contact',
  },
  {
    name: 'home',
    path: '/',
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent>content</SheetContent>
    </Sheet>
  );
};

export default MobileNav;
