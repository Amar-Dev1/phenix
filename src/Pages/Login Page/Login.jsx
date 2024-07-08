import './Login.css'
import { SlEnvolope } from "react-icons/sl";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='login-page'>

            <h2>Continue to your account !</h2>
            <form>
                <span>
                    <input type='text' placeholder='Email' required/>
                    <SlEnvolope className='icon' />
                </span>

                <span>
                    <input type='password' placeholder='Password' required/>
                    <IoLockClosedOutline className='icon' />
                </span>
                <button className='main-button'>Login</button>
                <p>Dont Have Account? <Link to="/Signup">Sign Up</Link></p>

            </form>

        </div>
    )
}

export default Login;
