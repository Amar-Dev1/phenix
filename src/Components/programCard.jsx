import './ComponentStyles/programCard.css';
import programImg from '../assets/program.png';
const ProgramCard = (props) => {
    return (
        <div className='program-card'>
            <img src={programImg} />
            <div className="text">
                <h3>{props.programName}</h3>
                <p>{props.programDescription}</p>
                <a href="#">DISCOVER MORE</a>
            </div>
            
        </div>
    )
}

export default ProgramCard;
