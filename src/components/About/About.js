import './About.css'

function About() {
  return (
    <div className='about' id='about'>
      <div className='about-grid'>

        <div className='about-bio'>
          <span className='about-col-label'>About Me</span>
          <p>
            I'm a software engineer with 3+ years of full-stack experience building
            features that reach real people. I graduated from the University of Florida
            in 2022 with a degree in Computer Science and I'm currently looking for
            SDE2 opportunities in New York City.
          </p>
          <p className='about-stack'>
            {['React', 'TypeScript', '.NET / C#', 'Swift', 'Kotlin', 'SQL'].join(' · ')}
          </p>
        </div>

        <div className='about-experience'>
          <span className='about-col-label'>Experience</span>
          <div className='about-entry-header'>
            <img src='/images/epic-logo.png' alt='Epic Systems' className='about-epic-logo' />
            <div>
              <div className='about-entry-role'>Software Engineer</div>
              <div className='about-entry-company'>Epic Systems &middot; March 2023 – June 2026</div>
            </div>
          </div>
          <p className='about-entry-summary'>
            Built full-stack features for MyChart Bedside, a patient-facing platform used
            by over 190 million people globally, across web, iOS, and Android. This included
            leading development of a communication portal that let patients and their
            families exchange digital greeting cards throughout their hospital stay.
          </p>
          <div className='about-stats'>
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

    </div>
  );
}

export default About;
