import './Experience.css'

function Experience() {
  return (
    <div className='experience' id='experience'>
      <h1>Experience</h1>
      <div className='experience-entry'>
        <div className='experience-header'>
          <img src='/images/epic-logo.png' alt='Epic Systems' className='epic-logo' />
          <div>
            <div className='role'>Software Engineer</div>
            <div className='company'>Epic Systems &middot; March 2023 – June 2026</div>
          </div>
        </div>
        <p className='experience-summary'>
          Built full-stack features for MyChart Bedside, a patient-facing platform used
          by over 190 million people globally, across web, iOS, and Android. This included
          leading development of a communication portal that let patients and their
          families exchange digital greeting cards throughout their hospital stay.
        </p>
        <div className='experience-stats'>
          <div className='stat'>
            <div className='stat-value'>190M+</div>
            <div className='stat-label'>users reached</div>
          </div>
          <div className='stat'>
            <div className='stat-value'>15K+</div>
            <div className='stat-label'>patient e-cards sent</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
