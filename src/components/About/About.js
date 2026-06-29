import { useEffect, useRef, useState } from 'react'
import './About.css'

function useCountUp(target, suffix, duration = 1800) {
  const [display, setDisplay] = useState('0' + suffix)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!triggered) return
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * target) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, target, suffix, duration])

  return [display, ref]
}

function About() {
  const [users, usersRef] = useCountUp(190, 'M+')
  const [ecards, ecardsRef] = useCountUp(15, 'K+')

  return (
    <div className='about' id='about'>
      <div className='about-grid'>

        <div className='about-bio'>
          <span className='about-col-label'>About Me</span>
          <p className='about-bio-text'>
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
              <div className='stat-value' ref={usersRef}>{users}</div>
              <div className='stat-label'>users reached</div>
            </div>
            <div className='stat'>
              <div className='stat-value' ref={ecardsRef}>{ecards}</div>
              <div className='stat-label'>patient e-cards sent</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;
