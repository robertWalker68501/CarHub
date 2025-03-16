import Link from 'next/link';
import { CarFrontIcon, Dot } from 'lucide-react';

export default function Logo() {
  return (
    <Link
      href='/'
      className='flex items-center gap-2'
    >
      <div className='relative flex size-7 items-center justify-center rounded-full bg-white'>
        <CarFrontIcon className='size-5 text-primary' />
        <span className='absolute -bottom-3 -right-2 text-white'>
          <Dot />
        </span>
      </div>
      <span className='text-base font-semibold text-white'>CarHub</span>
    </Link>
  );
}
