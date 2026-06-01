import amandabjorn from '../assets/bjornamandasquare.jpeg';

export const Welcome = () => {
  const numberArray = Array.from({ length: 200 }, (_, i) => i + 1);

  return (
    <div className='py-10'>
      <div className='mx-auto h-full w-full px-6 text-center lg:px-16'>
        <div className='mx-auto w-full text-4xl font-bold lg:w-1/3 lg:text-5xl'>
          <h2>Varmt välkomna till</h2>
          <h2>vårt bröllop</h2>
        </div>
        <div className='mx-auto w-full pt-5 font-montserrat lg:w-1/2'>
          <p>
            Vi ser otroligt mycket fram emot att få fira den här dagen
            tillsammans med er - våra nära och kära - förhoppningsvis i soligt
            oktoberväder. Här på vår hemsida hittar ni information om tider,
            adresser, toastmasters, klädkod samt hur ni OSA:r till bröllopet.
          </p>
        </div>
        <div className='mx-auto pt-10'>
          <img
            className='my-auto mx-auto rounded-full w-64 h-64 object-cover hover:animate-spin'
            src={amandabjorn}
            alt='Amanda och Björn'
          />
        </div>
        <div className='overflow-x-hidden pt-5 font-bold'>
          <div className='flex items-center whitespace-nowrap animate-[marquee_5s_linear_infinite] sm:animate-marquee'>
            {numberArray.map((number) => (
              <div key={number} className='flex items-center'>
                <p className='text-xl whitespace-nowrap mx-1'>
                  BAREN TAR ENBART KONTANTER!
                </p>
                <div className='w-px h-5 bg-wine mx-2' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
