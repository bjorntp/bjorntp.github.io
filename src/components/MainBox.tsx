import profil from '../assets/profil_cropped.jpg'
//<!-- <div className="w-2/5 overflow-hidden"><img className="" src={profil}></img></div> --> 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MainBox = () => {

    return ( 
        <div className="bg-gray-200/30 backdrop-blur-md rounded-md h-full w-full flex">
            <div className="flex-col h-full w-80 p-3">
                <div className=" h-1/2 flex place-items-center justify-around"><h1 className="text-2xl">Hej, mitt namn är Björn!</h1></div>
                {/* <div><p className="text-justify">Just nu läser jag en master i information- och kommunikationsteknik på Lunds Tekniska Högskola. Denna sida är under konstruktion men jag har inga stora planer för den just nu. Om ni har hamnat här och vill ha kontakt med mig kan ni ta det på följande länkar.</p></div> */}
                <div className="flex justify-around place-items-center h-1/2 pt-3">
                    <div className="hover:text-black/25"> <a href="https://www.linkedin.com/in/bj%C3%B6rntenjepersson/"><FontAwesomeIcon icon={faLinkedin} size='2xl'/></a></div>
                    <div className="hover:text-black/25"> <a href="https://github.com/bjorntp"><FontAwesomeIcon icon={faGithub} size='2xl'/></a></div>
                    <div className="hover:text-black/25"> <a href="mailto:bjorn@tenje.se"><FontAwesomeIcon icon={faEnvelope} size='2xl'/></a></div>
                </div>
            </div>
        </div>
    )
}

export default MainBox;
