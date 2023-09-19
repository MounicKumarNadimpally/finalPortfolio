import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialMedia.css';
const SocialMedia = ()=>{
    return(
        <div className='socialMediaContainer'>

            <a href='https://github.com/MounicKumarNadimpally' target="_blank"><FontAwesomeIcon icon={faGithub} className="container Git" /></a>
            <a href='https://www.linkedin.com/in/mounic-kumar-nadimpally-46a4b0167' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="container linkedIn" /></a>
            {/* <a href=''><FontAwesomeIcon icon={faFacebookF} className="container Facebook"  /></a> */}
            <a href=''><FontAwesomeIcon icon={faInstagram} className="container Instagram" /></a>
            <a href=''><FontAwesomeIcon icon={faTwitter} className="container Twitter" /></a>

        </div>
    )
}

export default SocialMedia;