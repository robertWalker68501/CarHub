'use client';

import Logo from '@/components/logo';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { PlusIcon, Search } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <header
      className='sticky top-0 z-10 h-14 w-full bg-primary px-3 align-top md:px-0'
      style={{ boxShadow: '1px 1px 4px #50727D66' }}
    >
      <nav className='mx-auto flex h-full max-w-7xl items-center'>
        <Logo />
        <ul className='mx-9 hidden flex-1 items-center justify-start space-x-6 text-white/80 lg:flex'>
          <li className='hidden flex-[0.6] md:flex'>
            <div className='relative h-10 w-full max-w-[320px] rounded-lg bg-white'>
              <form>
                <div className='flex items-center justify-between'>
                  <Input
                    type='search'
                    name='keyword'
                    autoComplete='off'
                    placeholder='Type your search here'
                    className='h-10 flex-1 !border-0 text-black !shadow-none !ring-0'
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <Search className='mr-2 size-5 text-gray-600' />
                </div>
              </form>
            </div>
          </li>

          <li>
            <Link
              href='/'
              className='text-sm font-medium'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm font-medium'
            >
              Services & Repair
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm font-medium'
            >
              Pricing
            </Link>
          </li>
        </ul>

        <div className='ml-auto flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <button className='text-sm font-extralight text-white'>
              Login
            </button>
            <Separator
              orientation='vertical'
              className='h-3 text-white'
            />
            <button className='text-sm font-extralight text-white'>
              Register
            </button>
          </div>

          <Button className='!h-10 !bg-[#FEA03C]'>
            <PlusIcon />
            <span>Sell Car</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
