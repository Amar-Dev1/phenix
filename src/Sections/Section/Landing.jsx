import '../sectionStyles/Landing.css';
import { Link } from 'react-router-dom';
import video from '../../assets/gym-video.mp4';

const Landing = () => {
  return (
    <div className="landing">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <p>Work harder, get stronger</p>
        <h1>easy with our <span>gym</span></h1>
        <button className='main-button'>
          <Link className='link' to="/Signup">become a member</Link>
        </button>
      </div>
    </div>
  )
}

export default Landing;