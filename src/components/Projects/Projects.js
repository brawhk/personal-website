import Item from './Item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import logo from '../../images/fittrackpluslogo.png'
import './Projects.css'
import Fade from 'react-reveal/Fade'

const data = [
  {
    id: 0,
    logo: false,
    title: 'Personal Website',
    link: 'https://github.com/brawhk/personal-website',
    desc: 'View the source code for this website! Created using React.',
    demo: false
  },
  {
    id: 1,
    logo: true,
    logoPath: '/images/fittrackpluslogo.png',
    title: 'FitTrack Plus',
    link: 'https://github.com/brawhk/FitTrackPlus',
    desc: `A social fitness tracking application for iOS developed using React Native. Log workout data and 
    weight history with graphs to view progress over time. Log daily caloric intake using API to search for 
    calorie info on select foods, or manually add meals. Join groups with friends to chat and view their progress.`,
    demo: true,
    demoPath: '/images/fittrackplus.png'
  
  },
  {
    id: 2,
    logo: true,
    logoPath: '/images/fittracklogo.png',
    title: 'FitTrack',
    link: 'https://github.com/brawhk/FitTrack',
    desc: `A fitness tracking web app developed using Django. View suggested workouts to hit certain muscle
    groups and add them to today's workout log. Log workout data and weight history with graphs to view progress over time.`,
    demo: true,
    demoPath: '/images/Fittrack results.png'
  },
  {
    id: 3,
    logo: true,
    logoPath: '/images/burger.png',
    title: 'Restaurant Selector',
    link: 'https://github.com/brawhk/restaurant-selector',
    desc: `My first introduction into full-stack web development created during Swamphacks 2020. Allows users to select a 
    random restaurant near them and view the menu.`,
    demo: true,
    demoPath: '/images/restaurant.png',
  }
  

]

function Projects() {
  return (
    <div className='projects' id='projects'>
      <Fade bottom>
      <div className='header mb-4'>
        <h1>Projects</h1>
      </div>
      </Fade>
      <div className='items'>
        {/* <Item/> */}
        <Row xs={12} className='g-4 mx-0'>
          {Array.from({ length: data.length }).map((_, i) => (
            <Fade bottom>
            <Item data={data[i]}/>
            </Fade>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default Projects;
