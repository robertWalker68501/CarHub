import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import HeroFilter from '@/app/(web)/_components/_common/hero-filter';

export default function HeroSection() {
  return (
    <div
      className='mb-4 min-h-[500px] w-full'
      style={{
        background: 'linear-gradient(160.29deg, #00B53F .67%, #00831E 100.93%)',
      }}
    >
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 py-8 lg:flex-row lg:py-16'>
        <div className='flex-1 px-10 md:px-0'>
          <Card className='w-full !max-w-[29rem] shadow-sm'>
            <CardContent className='px-5 py-10'>
              <div className='flex w-full flex-col items-center'>
                <h2 className='text-[30px] font-extrabold leading-10 md:text-[46px] md:leading-[50px]'>
                  <span className=''>
                    Find the Car You <br />
                    Want
                  </span>{' '}
                  <span className='text-primary'>Your Way</span>
                </h2>
                <HeroFilter />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='flex-1 lg:ml-auto'>
          <div className='relative mt-5 w-[350px] sm:w-[400px] md:mt-8 md:w-[500px] lg:mt-0 lg:w-[700px]'>
            <Image
              src='/images/hero-car.png'
              alt='car'
              className='h-auto w-full scale-100 object-cover md:scale-100 lg:scale-110'
              height={500}
              width={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
