import '../sectionStyles/Header.css';
import Container from '../../Components/Container';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const Header = () => {

  const barRef = useRef(null);
  const exitRef = useRef(null);

  const menuRef = useRef(null);

  const showMenu = () => {
    menuRef.current.classList.add('show');
    barRef.current.style.display = "none";
  }
  const hideMenu = () => {
    menuRef.current.classList.remove('show');
    barRef.current.style.display = "block";
  }
  return (
    <div className='header'>
      <Container>
        <div className="logo">
          <a href="/"><h1>Phenix<span>Studio</span></h1></a>
        </div>

        <ul ref={menuRef} className="sideBar">
          <ImCross onClick={hideMenu} className='exit-icon icon' ref={exitRef} />
          <li><Link className='link' to="/" onClick={hideMenu}>Home</Link></li>
          <li><Link className='link' to="#about" onClick={hideMenu}>about</Link></li>
          <li><Link className='link' to="#classes" onClick={hideMenu}>classes</Link></li>
          <li><Link className='link' to="#contact" onClick={hideMenu}>contact</Link></li>
          <button className='main-button'>
            <Link className='link' onClick={hideMenu} to="/Signup">Sign Up</Link>
          </button>
        </ul>



        <FaBars onClick={showMenu} className='bar-icon icon' ref={barRef} />
        <ul className="links">
          <li><Link onClick={hideMenu} className='link' to="/">Home</Link></li>
          <li><Link onClick={hideMenu} className='link' to="#about">about</Link></li>
          <li><Link onClick={hideMenu} className='link' to="#classes">classes</Link></li>
          <li><Link onClick={hideMenu} className='link' to="#contact">contact</Link></li>
          <button className='main-button'>
            <Link className='link' onClick={hideMenu} to="/Signup">Sign Up</Link>
          </button>
        </ul>
      </Container>
    </div>
  )
}

export default Header
