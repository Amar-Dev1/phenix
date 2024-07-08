import React, { useState } from 'react';
import CardClass from '../../Components/CardClass';
import Container from '../../Components/Container';
import MainTitle from '../../Components/MainTitle';
import lesson1 from '../../assets/lesson1.jpg';
import lesson2 from '../../assets/lesson2.jpg';
import lesson3 from '../../assets/lesson3.jpg';
import lesson4 from '../../assets/lesson4.jpg';
import '../sectionStyles/Classes.css';
import ClassLesson from '../../Components/ClassLesson';

const Classes = () => {
  const [activeClass, setActiveClass] = useState("First Training Class");

  const handleCardClick = (className) => {
    setActiveClass(className);
  };

  return (
    <div className='classes-section' id='classes'>
      <Container>
        <MainTitle head="our" sub=" classes" description="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu." />
        <div className="class-container">
          <div className="classes">
            <CardClass class="First Training Class" onClick={() => handleCardClick("First Training Class")} isActive={activeClass === "First Training Class"} />
            <CardClass class="Second Training Class" onClick={() => handleCardClick("Second Training Class")} isActive={activeClass === "Second Training Class"} />
            <CardClass class="Third Training Class" onClick={() => handleCardClick("Third Training Class")} isActive={activeClass === "Third Training Class"} />
            <CardClass class="Fourth Training Class" onClick={() => handleCardClick("Fourth Training Class")} isActive={activeClass === "Fourth Training Class"} />
            <button className='main-button'>
              View all schedules
            </button>
          </div>

          {activeClass === "First Training Class" && (
            <ClassLesson lessonImg={lesson1} class="First Training class" lessonDes="Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam." />
          )}
          {activeClass === "Second Training Class" && (
            <ClassLesson lessonImg={lesson2} class="Second Training class" lessonDes="Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
          )}
          {activeClass === "Third Training Class" && (
            <ClassLesson lessonImg={lesson3} class="Third Training class" lessonDes="Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque." />
          )}
          {activeClass === "Fourth Training Class" && (
            <ClassLesson lessonImg={lesson4} class="Fourth Training class" lessonDes="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.

            " />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Classes;