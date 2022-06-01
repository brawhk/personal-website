import Item from './Item'
import './Projects.css'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='header'>
        <h1>Projects</h1>
      </div>
      <div className='items'>
        <Item/>
      </div>
    </div>
  );
}

export default Projects;
