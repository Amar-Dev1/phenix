import './ComponentStyles/TrainerCard.css';
import {FaFacebook,FaLinkedin,FaTwitter,FaReddit}from 'react-icons/fa'
const TrainerCard = (props) => {
  return (
    <div className='trainer-card'>
      <img src={props.trainerImg} alt="" />
      <small>{props.type}</small>
      <h3>{props.name}</h3>
      <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
    <div className="social">
        <FaFacebook  className='social-icon'/>
        <FaLinkedin className='social-icon'/>
        <FaTwitter className='social-icon'/>
        <FaReddit className='social-icon'/>
  
    </div>
    </div>
  )
}

export default TrainerCard;
