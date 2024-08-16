import React from 'react';
import profil from "../assets/profil_cropped.jpg"

function About() {
    return (
        <div className='grid grid-cols-9 w-screen'>
            <div className='col-start-3 col-span-2 m-5 flex flex-col content-between'>
                <img src={profil} alt="Björn" className='rounded-full mb-5'/>
                <div className='bg-gray-200/30 backdrop-blur-md rounded-md p-2'>  
                    <h3 className=''>Hejsan!</h3>
                    <p className=' mt-2'>Mitt namn är Björn, jag kommer från Kristianstad men har sedan 2019 bosatt mig i Lund tillsammans med min sambo.</p>
                </div>
                <div className='bg-gray-200/30 backdrop-blur-md rounded-md mt-5 p-2'>  
                    <h3 className=''>KONTAKTINFORMATION</h3>
                    <h4>Telefonnummber</h4>
                </div>
            </div>
            <div className='col-start-5 col-span-3 bg-gray-200/30 backdrop-blur-md rounded-md m-5 p-2 '>
                <h3>Utbildning</h3>
            </div>

        </div>
    );
}

export default About;