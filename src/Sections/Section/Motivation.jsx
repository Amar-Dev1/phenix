import '../sectionStyles/Motivation.css';
import { Link } from 'react-router-dom';
const Motivation = () => {
  return (
    <div className='motivation'>
      <h3>DON’T <span>THINK,</span> BEGIN <span>TODAY!</span></h3>
      <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
      <button className="main-button">
        <Link className='link' to="/Signup">BECOME A MEMBER</Link>
      </button>
    </div>
  )
}

export default Motivation
