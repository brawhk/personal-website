import "./Landing.css";
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade'

function Landing() {
  return (
    <div className='landing' id='landing'>
      <div className='type'>
        <h1 style={{visibility: 'hidden'}}> </h1>
        <h1>
          <code>
            <Typewriter onInit={(typewriter) => {
              typewriter.typeString('Hello World!')
                .start();
              }}
            />
          </code>
        </h1>
      </div>
      <Fade bottom delay={2000}>
        <h2>My name is Brock Major.</h2>
      </Fade>
      <Fade bottom delay={2500}>
        <h3>I am a Computer Science student looking for full time opportunities.</h3>
      </Fade>
    </div>
  );
}

export default Landing;
