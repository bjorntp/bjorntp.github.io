import emma from '../assets/emma.jpeg';
import per from '../assets/pb.jpeg';

export const ToastMasters = () => {
  return (
    <div className='mx-auto flex w-full flex-col px-4 py-12 text-wine lg:px-12'>
      <div className='mx-auto mt-8 grid w-full max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
        <div className='flex min-h-[16rem] w-full flex-col items-center justify-center gap-5 px-4 py-4 text-left md:flex-row md:gap-8'>
          <img
            src={per}
            alt='Per'
            className='h-64 w-64 shrink-0 rounded-full object-cover object-[center_20%] md:h-72 md:w-72'
          />
          <div className='flex min-w-0 flex-1 flex-col justify-center gap-3 text-center'>
            <span className='font-montserrat text-base font-light text-wine/90 md:text-lg'>
              Toastmaster
            </span>
            <span className='text-balance font-playfairdisplay text-3xl font-bold leading-tight md:text-4xl'>
              Per Isberg
            </span>
            <span className='whitespace-nowrap font-montserrat text-base font-semibold md:text-lg'>
              Mobil: 076-844 05 99
            </span>
          </div>
        </div>

        <div className='flex min-h-[16rem] w-full flex-col items-center justify-center gap-5 px-4 py-4 text-left md:flex-row md:gap-8'>
          <img
            src={emma}
            alt='Emma'
            className='h-64 w-64 shrink-0 rounded-full object-cover object-[center_25%] md:h-72 md:w-72'
          />
          <div className='flex min-w-0 flex-1 flex-col justify-center gap-3 text-center'>
            <span className='font-montserrat text-base font-light text-wine/90 md:text-lg'>
              Toastmadame
            </span>
            <span className='text-balance font-playfairdisplay text-3xl font-bold leading-tight md:text-4xl'>
              Emma Malmström
            </span>
            <span className='whitespace-nowrap font-montserrat text-base font-semibold md:text-lg'>
              Mobil: 070-843 55 88
            </span>
          </div>
        </div>
      </div>

      <div className='mx-auto mt-12 w-full max-w-3xl bg-blush px-6 py-10 md:px-10 md:py-12'>
        <span className='block text-center font-montserrat text-sm leading-7 md:text-base'>
          Alla gäster är varmt välkomna att hålla tal - det är något vi ser fram
          emot! Om du vill hålla ett tal, vänligen kontakta Emma eller Per i god
          tid innan brölloppet. Det är enbart föranmälda tal som gäller och vi
          uppskattar om de hålls runt 3 minuter så att alla som vill kan få
          chansen.
        </span>
      </div>
    </div>
  );
};
