import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='w-full'>
      <div className='flex h-auto w-full flex-col'>
        <main>{children}</main>
      </div>
    </div>
  );
}
