import './Landing.css'

function Landing() {
  return (
    <div className='landing' id='landing'>
      <div className='landing-inner'>
        <div className='landing-text'>
          <h1 className='landing-name'>Brock Major</h1>
          <div className='landing-details'>
            <p className='landing-role'>Software Engineer</p>
            <p className='landing-context'>3+ years at Epic Systems &middot; Available for SDE2 in New York</p>
          </div>
        </div>
        <div className='landing-photo-col'>
          <img
            className='landing-photo'
            src='/images/webpic.jpg'
            alt='Brock Major'
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
