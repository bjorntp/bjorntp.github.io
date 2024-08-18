import React from 'react';
import profil from "../assets/profil_cropped.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// <div className='bg-gray-200/30 backdrop-blur-md rounded-md p-2'>
function About() {

  return (
    <div className='grid md:grid-cols-9 grid-cols-1 w-screen'>
      <div className='md:col-start-3 md:col-span-2 md:m-5 mx-5 mt-5 flex flex-col content-between'>
        <img src={profil} alt="Björn" className='rounded-full mb-5' />
        <div className='about-window mt-0'>
          <h3 className='text-xl mb-2'>Hejsan!</h3>
          <p className=''>Mitt namn är Björn, välkommen till min sida!</p>
        </div>

        <div className='about-window'>
          <h3 className='text-xl mb-2'>KONTAKT</h3>
          <h4 className='font-bold'>Telefonnummer</h4>
          <p className='indent-1'>(+46) 0727 19 96 89</p>
          <h4 className='font-bold'>E-post</h4>
          <p className='indent-1'><a href="mailto:bjorn@tenje.se">bjorn@tenje.se</a></p>
          <h4 className='font-bold'>GitHub</h4>
          <p className='indent-1'><a href="https://github.com/bjorntp">bjorntp</a></p>
        </div>

        <div className='about-window'>
          <div className="flex justify-around place-items-center p-2">
            <div className="hover:text-black/25"> <a href="https://www.linkedin.com/in/bj%C3%B6rntenjepersson/"><FontAwesomeIcon icon={faLinkedin} size='2xl' /></a></div>
            <div className="hover:text-black/25"> <a href="https://github.com/bjorntp"><FontAwesomeIcon icon={faGithub} size='2xl' /></a></div>
            <div className="hover:text-black/25"> <a href="mailto:bjorn@tenje.se"><FontAwesomeIcon icon={faEnvelope} size='2xl' /> </a></div>
          </div>
        </div>
      </div>


      <div className='md:col-start-5 md:col-span-3 md:m-5 mx-5 mb-5 flex-col content-between'>

        <div className='about-window'>
          <h3 className='text-xl mb-2'>KORT OM MIG</h3>
          <p>
            Jag kommer ursprungligen från Kristianstad, men bor nu i Lund med min sambo. Min passion för datorer har alltid varit en stor del av mitt liv, och jag älskar allt från programmering till att sköta min egen hemmaserver. Det var detta intresset som gjorde att jag valde min utbildning. Utöver teknik är jag en entusiastisk skidåkare och har ett djupt intresse för kaffe.
          </p>
        </div>

        <div className='about-window'>
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

        <div className='about-window'>
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
          <h3 className='font-bold'>Harry's bruger</h3>
          <ul className='indent-2'>
            <li>2016-2017</li>
            <li>Köksarbete under högsäsong i skidort</li>
          </ul>
        </div>

        <div className='about-window'>
          <h2 className='text-xl'>KUNSKAPER</h2>
          <h3 className='font-bold'>Inom IT</h3>
          <ul className='indent-2'>
            <li>Objektorienterad programmering med flera språk </li>
            <li>Webprogrammering med JS/TS med flera ramverk</li>
            <li>Databasprogrammering med SQL</li>
            <li>Mycket van Linuxanvändare</li>
          </ul>
          <h3 className='font-bold'>Språk</h3>
          <ul className='indent-2'>
            <li>Svenska - modersmål</li>
            <li>Engelska - flytande</li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default About;
