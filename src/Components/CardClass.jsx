import './ComponentStyles/CardClass.css';
import tap from '../assets/classes-tap.png';

const CardClass = ({ class: className, onClick, isActive }) => {
  return (
    <div
      className={`card-class ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={tap} />
      <h4>{className}</h4>
    </div>
  );
};

export default CardClass;