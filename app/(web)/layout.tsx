import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export default function WebLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='flex h-auto w-full flex-col'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
