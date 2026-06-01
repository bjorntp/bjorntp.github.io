interface ScheduleTextBoxProps {
  title: string;
  subtitle: string;
  time: string;
  place: string;
  address: string;
  transport: string;
  description: string;
}

export const Schedule = () => {
  const ScheduleTextBox = (props: ScheduleTextBoxProps) => {
    const { title, subtitle, time, place, address, transport, description } =
      props;
    return (
      <div className='flex flex-col item-center py-4 md:py-0'>
        <hr className='mx-auto w-3/4 border-1 border-wine px-14' />
        <div className='pt-6 md:pt-4 font-montserrat'>
          <span>{title}</span>
        </div>
        <div className='pt-7 md:pt-6'>
          <span className='text-4xl font-bold'>
            {subtitle} {time}
          </span>
        </div>
        <div className='flex flex-col pt-9 md:pt-8 font-montserrat'>
          <span className='font-bold'>{place}</span>
          <span>{address}</span>
        </div>
        <div className='pt-6 md:pt-4  font-montserrat'>
          <span>{transport}</span>
        </div>
        <div className='pt-6 md:pt-4 font-montserrat'>
          <span>{description}</span>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full py-8 md:py-10 lg:py-12 bg-blush'>
      <div className='mx-auto w-full'>
        <div className='mx-6 flex min-h-[36vh] flex-col items-start gap-4 md:mx-12 md:flex-row md:justify-center md:gap-0'>
          <div className='flex flex-1 items-center justify-between text-center'>
            <ScheduleTextBox
              title='Vigsel'
              subtitle='Vigsel'
              time='15:30'
              place='Råbelöfs Kyrka'
              address='Råbelöfsallén 100-21, 291 96 Kristianstad'
              transport='Transport till kyrkan planeras på egen hand genom bil eller taxi. Samåkning rekommenderas.'
              description='Vi vill inte att gästerna fotograferar under vigselns intåg. Därefter ber vi er vara sparsamma med att ta bilder då vi mycket hellre ser era ansikten än en kamera/mobil!'
            />
          </div>
          <div className='flex flex-1 items-center justify-center pt-2 text-center md:px-8 md:pt-0'>
            <ScheduleTextBox
              title='Mingel'
              subtitle='Brudskål'
              time='17:15'
              place='Stora Kronohuset'
              address='Christian IV:s gata, 291 29 Kristianstad'
              transport='Kronohuset ligger mitt i stan på Stora torg - nära till både hotell, tågstation och parkeringsmöjligheter. '
              description='Mellan vigseln och minglet finns det tid att parkera bilen, checka in på ert hotell, eller ta en drink vid någon av de närliggande barerna, innan det är dags för brudskål i festlokalen.'
            />
          </div>
          <div className='flex flex-1 items-center justify-center pt-2 text-center md:px-8 md:pt-0'>
            <ScheduleTextBox
              title='Middag'
              subtitle='Middag'
              time='18:30'
              place='Stora Kronohuset'
              address='Christian IV:s gata, 291 29 Kristianstad'
              transport='Till middagen bjuds på vin, öl, cider och alkoholfritt, därefter är det självförsörjning i baren (Notera att baren endast tar emot kontanter!).'
              description='Sen firar och dansar vi tillsammans fram till lokalen stänger kl 01.00 - därefter får de som vill utforska Kristianstads nattliv.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
