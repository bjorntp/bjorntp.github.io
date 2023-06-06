import profil from '../assets/profil_cropped.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MainBox = () => {

    return ( 
        <div className="bg-gray-200/30 backdrop-blur-md rounded-md h-full w-full flex">
            <div className="flex-col h-full w-3/5 ">
                <div className=" h-1/2 flex place-items-center justify-around"><h1 className="text-2xl">Hej, mitt namn är Björn!</h1></div>
                <div className="flex justify-around place-items-center  h-1/2">
                    <div className=""> <FontAwesomeIcon icon={faLinkedin} size='2xl'/></div>
                    <div className=""> <FontAwesomeIcon icon={faGithub} size='2xl'/></div>
                    <div className=""> <FontAwesomeIcon icon={faEnvelope} size='2xl'/></div>
                </div>
            </div>
            <div className="w-2/5 overflow-hidden"><img className="" src={profil}></img></div>
        </div>
    )
}

export default MainBox;