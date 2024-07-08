import './ComponentStyles/ClassLesson.css'
const ClassLesson = (props) => {
    return (
        <div className='class-lesson'>
            <img src={props.lessonImg} />
            <h3>{props.class}</h3>
            <p>{props.lessonDes}</p>
            <button className="main-button">
                VIEW SCHEDULE
            </button>
        </div>
    )
}

export default ClassLesson;
