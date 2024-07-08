import Container from '../../Components/Container'
import MainTitle from '../../Components/MainTitle'
import ProgramCard from '../../Components/programCard'
import '../sectionStyles/Programs.css'
const Programs = () => {
  return (
    <div className='programs' id='about'>
      <Container>
        <MainTitle head="choose " sub="program" description="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website." />

        <div className="programs-cards">
          <ProgramCard programName="Basic Fitness" programDescription="Please do not re-distribute this template ZIP file on any template collection website. This is not allowed." />
          <ProgramCard programName="New Gym Training" programDescription="If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot." />
          <ProgramCard programName="Basic Muscle Course" programDescription="Credit goes to Pexels website for images and video background used in this HTML template." />
          <ProgramCard programName="Advanced Muscle Course" programDescription="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website." />
          <ProgramCard programName="Yoga Training" programDescription="This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections." />
          <ProgramCard programName="Body Building Course" programDescription="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor." />
        </div>
      </Container>
    </div>
  )
}

export default Programs
