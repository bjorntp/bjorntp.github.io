import React from 'react';
import profil from "../assets/profil_cropped.jpg"

function About() {
  return (
    <div className='grid md:grid-cols-9 grid-cols-1 w-screen'>
      <div className='md:col-start-3 md:col-span-2 m-5 flex flex-col content-between'>
        <img src={profil} alt="Björn" className='rounded-full mb-5' />
        <div className='bg-gray-200/30 backdrop-blur-md rounded-md p-2'>
          <h3 className='text-xl mb-2'>Hejsan!</h3>
          <p className=''>Mitt namn är Björn, välkommen till min sida!</p>
        </div>

        <div className='bg-gray-200/30 backdrop-blur-md rounded-md mt-5 p-2'>
          <h3 className='text-xl mb-2'>KONTAKTINFORMATION</h3>
          <h4 className='font-bold'>Telefonnummer</h4>
          <p className='indent-1'>(+46) 0727 19 96 89</p>
          <h4 className='font-bold'>E-post</h4>
          <p className='indent-1'><a href="mailto:bjorn@tenje.se">bjorn@tenje.se</a></p>
          <h4 className='font-bold'>GitHub</h4>
          <p className='indent-1'><a href="https://github.com/bjorntp">bjorntp</a></p>
        </div>
      </div>

      <div className='md:col-start-5 md:col-span-3 m-5 flex-col content-between'>
        <div className='bg-gray-200/30 backdrop-blur-md rounded-md mt-5 p-2'>
          <h2 className='text-3xl'>BJÖRN TENJE PERSSON</h2>
        </div>
        <div className='bg-gray-200/30 backdrop-blur-md rounded-md m-5 p-2 mx-auto w-full'>
          <h2 className='text-xl'>UTBILDNING</h2>
          <h3 className='font-bold'>Lunds Tekniska Högskola</h3>
          <p>2019 - pågående</p>
          <p>Civilingenjör i Information- och kommunikationsteknik</p>
          <ul className='list-disc ml-4'>
            <li>Programmeringsteknik och flertrådad programmering</li>
            <li>Avancerad interraktionsdesign</li>
            <li>Dator- och webbsäkerhet</li>
          </ul>
        </div>
        <div className='bg-gray-200/30 backdrop-blur-md rounded-md m-5 p-2 mx-auto w-full'>
          <h2 className='text-xl'>ARBETE</h2>
          <h3 className='font-bold'>Teknikfokus Arbetsmässa (volontär)</h3>
          <ul className='indent-2'>
            <li>2021 - 2022</li>
            <li>IT-ansvaring</li>
            <li>Omskrivning av webbsidan samt en del av projektgruppen som skapade årets <a className='underline underline-offset-2' href="https://github.com/teknikfokus/fair.teknikfokus.se">onlineplattform</a>.</li>
          </ul>
          <h3 className='font-bold'>Sekreterare i bostadsrättsförening</h3>
          <ul className='indent-2'>
            <li>2019 - pågående</li>
          </ul>
          <h3 className='font-bold'>Mio möbler</h3>
          <ul className='indent-2'>
            <li>2017 - pågående</li>
            <li>Säljare och lagermedarbetare</li>
          </ul>
        </div>

        <div className='bg-gray-200/30 backdrop-blur-md rounded-md m-5 p-2 mx-auto w-full'>
          <h2 className='text-xl'>KUNSKAPER</h2>
          <h3 className='font-bold'>Inom IT</h3>
          <ul className='indent-2'>
            <li>Objektorienterad programmering i olika </li>
            <li>Web programmering med JS/TS med flera ramverk</li>
            <li>Databasprogrammering med SQL</li>
          </ul>
          <h3 className='font-bold'>Språk</h3>
          <ul className='indent-2'>
            <li>Svenska - modersmål</li>
            <li>Engelska - flytande</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
