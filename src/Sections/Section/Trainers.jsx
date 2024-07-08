import Container from '../../Components/Container'
import MainTitle from '../../Components/MainTitle'
import '../sectionStyles/Trainers.css'
import TrainerCard from '../../Components/TrainerCard'
import trainer1 from '../../assets/trainer1.jpg'
import trainer2 from '../../assets/trainer2.jpg'
import trainer3 from '../../assets/trainer3.jpg'
const Trainers = () => {
  return (
    <div className='trainers'>
      <Container>
        <MainTitle head="expert " sub="trainers" description="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu." />
        <div className="trainers-cards">
          <TrainerCard trainerImg={trainer1} type="Power Trainer" name="Paul D. Newman" />
          <TrainerCard trainerImg={trainer2} type="Muscle Trainer" name="The Rock" />
          <TrainerCard trainerImg={trainer3} type="Strength Trainer" name="Bret D. Bowers" />
        </div>
      </Container>
    </div>
  )
}

export default Trainers
