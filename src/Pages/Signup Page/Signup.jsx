import './Signup.css'
import { CiUser } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='signup-page'>
      <h2>Create a new account !</h2>
      <form>

        <span>
          <input type='text' placeholder='First Name' required/>
          <CiUser className='icon' />
        </span>
        <span><input type='text' placeholder='Last Name' />
          <CiUser className='icon' />
        </span>

        <span>
          <input type='text' placeholder='Email' required/>
          <SlEnvolope className='icon' />
        </span>

        <span>
          <input type='password' placeholder='Password' required/>
          <IoLockClosedOutline className='icon' />
        </span>
        <button className='main-button'>Create</button>
        <p>Already have an account? <Link to="/Login">Login</Link></p>
      </form>

    </div>
  )
}

export default Signup
