import './ComponentStyles/MainTitle.css';
import img from '../assets/line-dec.png'
const MainTitle = (props) => {
  return (
    <div className='main-title'>
      <h1>{props.head}<span>{props.sub}</span></h1>
      <img src={img} />
      <p>{props.description}</p>
    </div>
  )
}

export default MainTitle;
