import kronohuset from '../assets/CIV.webp';

export const Accommodation = () => {
  return (
    <div className='flex w-full flex-col gap-24 px-6 md:flex-row md:items-stretch md:px-20'>
      <div className='flex flex-1 flex-col text-left'>
        <div>
          <h1 className='text-4xl font-bold mt-12'>Boende</h1>
          <p className='mt-8 font-montserrat'>
            Det finns flera trevlig hotell runt omkring festlokalen. Brudparet
            kommer att bo vid{' '}
            <a
              className='font-semibold underline'
              href='https://www.strawberry.se/hotell/sverige/kristianstad/home-hotel-christian-iv/'
              target='_blank'
              rel='noreferrer'
            >
              Home Hotell Christians IV
            </a>
            . Andra hotell som ligger i närheten är:
          </p>
          <ul className='mt-2 list-disc list-inside  font-montserrat'>
            <li>
              <a
                className='font-semibold underline'
                href='https://www.stadshotelletkristianstad.se/'
                target='_blank'
                rel='noreferrer'
              >
                Stadshotellet Kristianstad
              </a>
            </li>
            <li>
              <a
                className='font-semibold underline'
                href='https://hotelparkalle.se/rum'
                target='_blank'
                rel='noreferrer'
              >
                Hotell Park Allé
              </a>
            </li>
            <li>
              <a
                className='font-semibold underline'
                href='https://www.booking.com/hotel/se/quality-grand-kristianstad.sv.html'
                target='_blank'
                rel='noreferrer'
              >
                Profil Hotels Grand Kristianstad
              </a>
            </li>
          </ul>
        </div>
        <h1 className='text-4xl mt-12 font-bold'>Parkering</h1>
        <p className='mt-8 font-montserrat'>
          På Stora torg finns det flera parkeringar som är gratis efter kl 14.00
          på lördagar t.om. söndagar. Runt torget finns det även några
          gatuparkeringar.{' '}
        </p>
        <p className='mt-8 font-montserrat'>
          Parkeringshuset Galleria Boulevard ligger knappt 5 minuter från
          bröllopslokalen och kostar 10kr/h.
        </p>
      </div>
      <div className='mt-2 aspect-[5/4] w-full overflow-hidden md:mt-12 md:max-w-[36rem] md:flex-1 md:self-stretch'>
        <img
          className='h-full w-full object-cover object-center'
          src={kronohuset}
          alt='Bild på Rabbe'
        />
      </div>
    </div>
  );
};
