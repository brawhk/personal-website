import Item from './Item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import logo from '../../images/fittrackpluslogo.png'
import './Projects.css'

const data = [
  {
    id: 0,
    logoPath: '',
    title: 'Personal Website',
    link: 'https://github.com/brawhk/personal-website',
    desc: 'View the source code for this website! Created using React'
  },
  {
    id: 1,
    logoPath: '/images/fittrackpluslogo.png',
    title: 'FitTrack Plus',
    link: 'https://github.com/brawhk/FitTrackPlus',
    desc: `A social fitness tracking application for iOS developed using React Native. Log workout data and 
    weight history with graphs to view progress over time. Log daily caloric intake using API to search for 
    calorie info on select foods, or manually add meals. Join groups with friends to chat and view their progress`
  },
  {
    id: 2,
    logoPath: '/images/fittracklogo.png',
    title: 'FitTrack',
    link: 'https://github.com/brawhk/FitTrack',
    desc: `A fitness tracking web app developed using Django. View suggested workouts to hit certain muscle
    groups and add them to today's workout log. Log workout data and weight history with graphs to view progress over time.`
  },
  

]

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='header'>
        <h1>Projects</h1>
      </div>
      <div className='items'>
        {/* <Item/> */}
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: data.length }).map((_, i) => (
            <Item data={data[i]}/>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Projects;
