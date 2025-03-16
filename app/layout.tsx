import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';
import RegisterDialog from '@/components/auth/RegisterDialog';
import { NuqsAdapter } from 'nuqs/adapters/react';
import LoginDialog from '@/components/auth/LoginDialog';

export const metadata: Metadata = {
  title: 'CarHub',
  description:
    'CarHub is your ultimate destination for hassle-free online car shopping',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`bg-[#EBF2F7] antialiased`}>
        <NuqsAdapter>
          <RegisterDialog />
          <LoginDialog />
          {children}
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}
