import flowerbanner from '../assets/banner.jpeg';

export const MeetScreen = () => {
  return (
    <div className='relative z-0 h-[32rem] min-h-[32rem] sm:h-[80vh] sm:min-h-[42rem]'>
      <div className='h-full w-full overflow-hidden'>
        <img
          className='h-full w-full origin-left object-cover object-[76%_18%] scale-[1.12] sm:object-[72%_center] md:origin-[82%_center] md:object-center scale-125'
          src={flowerbanner}
          alt='Banner'
        />
      </div>
      <div className='absolute top-6 z-10 w-full sm:top-8 lg:top-10'>
        <div className='mx-5 flex flex-row-reverse justify-between sm:mx-8 lg:mx-36'>
          <a
            href='https://forms.gle/G6mTiEqPwGNsdGWD6'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='border-2 border-dotted border-wine bg-wine px-4 py-2 text-lg text-blush transition-colors hover:bg-transparent hover:text-wine sm:px-5 sm:text-xl lg:text-2xl'>
              OSA
            </button>
          </a>
        </div>
      </div>
      <div className='absolute top-0 max-w-[22rem] px-5 pb-10 pt-28 text-left sm:top-[20%] sm:max-w-[34rem] sm:px-20 sm:pb-0 sm:pt-0 lg:left-16 lg:max-w-none lg:px-16'>
        <h2 className='font-montserrat text-base sm:text-xl lg:text-2xl'>
          10 OKTOBER 2026
        </h2>
        <h1 className='mt-3 text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-8xl'>
          Björn Tenje
        </h1>
        <h1 className='text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-8xl'>
          Persson &
        </h1>
        <h1 className='mt-1 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-8xl'>
          Amanda Nilsson
        </h1>
        <h2 className='mt-4 max-w-[20rem] font-montserrat text-sm leading-5 sm:max-w-[32rem] sm:text-lg sm:leading-7 lg:max-w-[48rem] lg:text-2xl lg:leading-normal'>
          RÅBELÖFS KYRKA & STORA KRONOHUSET I KRISTIANSTAD
        </h2>
      </div>
      <div className='absolute w-full z-10 bottom-8 lg:bottom-10' />
    </div>
  );
};
