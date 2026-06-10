export const Clothes = () => {
  return (
    <div className='mx-auto flex w-full flex-col px-2 py-16 text-white lg:px-12 lg:py-20'>
      <div className='mx-auto mt-6 grid w-[92%] max-w-6xl gap-6 lg:grid-cols-2 lg:gap-12'>
        <div className='bg-wine px-6 py-12 text-base sm:px-10 lg:px-9 lg:py-14 lg:text-lg'>
          <h1 className='text-3xl lg:text-[2rem]'>Klädkod</h1>
          <p className='mt-8 font-montserrat text-sm leading-7 lg:text-[0.95rem]'>
            Till vårt bröllop gäller smoking eller mörk kostym. Har du smoking
            får du gärna bära den, annars fungerar en mörk kostym perfekt. För
            er som bär klänning ser vi gärna festklädsel i lite mer uppklädd
            stil - det kan vara allt från elegant cocktailklänning till
            långklänning, det viktigaste är att du känner dig fin och festklädd
            för en riktigt härlig kväll tillsammans med oss.
          </p>
        </div>
        <div className='bg-wine px-6 py-12 text-base sm:px-10 lg:px-9 lg:py-14 lg:text-lg'>
          <h1 className='text-3xl lg:text-[2rem]'>Bröllopsgåva</h1>
          <p className='mt-8 font-montserrat text-sm leading-7 lg:text-[0.95rem]'>
            Den finaste gåvan för oss är att få fira dagen tillsammans med er.
            Vi önskar oss därför inga saker. Vill ni ändå ge en present blir vi
            väldigt glada för ett bidrag till vår bröllopsresa. Det gör ni
            enklast genom att Swisha brudens mor: <br /> Marie Nilsson på
            073-396 52 96.
          </p>
        </div>
      </div>
    </div>
  );
};
