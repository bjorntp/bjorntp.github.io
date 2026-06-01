import flowerbanner from '../assets/banner.jpeg';

export const Footer = () => {
  return (
    <div className='h-[40vh] w-full overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${flowerbanner})` }}
        className='flex h-full w-full flex-col items-center justify-center gap-8 bg-cover bg-center px-6 py-6 text-center md:py-8'
      >
        <h1 className='font-playfairdisplay text-4xl font-semibold leading-tight md:text-5xl'>
          Vi hoppas ni kan komma
          <br />
          och fira med oss!
        </h1>

        <a
          href='https://forms.gle/G6mTiEqPwGNsdGWD6'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='min-w-[12rem] border-2 border-dotted border-wine bg-wine px-10 py-3 text-xl text-blush transition-colors hover:bg-transparent hover:text-wine md:min-w-[16rem] md:text-2xl'>
            OSA
          </button>
        </a>
      </div>
    </div>
  );
};
