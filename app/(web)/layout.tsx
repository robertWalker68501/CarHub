import { ReactNode } from 'react';

export default function WebLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='flex h-auto w-full flex-col'>
      <main>{children}</main>
    </div>
  );
}
