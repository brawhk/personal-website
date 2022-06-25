import './About.css'
// import pic from '/images/webpic.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About() {
  return (
    <div className='about' id='about'>
      <div className='header mb-4'>
        <h1>About Me</h1>
      </div>
      {/* <div className='body'>
        <p className='fs-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, magna eu mollis commodo, ex velit condimentum nibh, et ornare elit magna in tellus. Sed vulputate nisi eros, in posuere elit ullamcorper et. Praesent consequat ante at elementum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus est vel ante accumsan, in pulvinar elit fringilla. Curabitur faucibus tempor orci, sit amet tempor ligula varius nec. Nulla porttitor ac urna et efficitur. Nam et fringilla urna. Phasellus euismod, neque vel iaculis interdum, nunc turpis viverra massa, id sollicitudin lectus nisl at leo. Maecenas sit amet quam ut risus pharetra bibendum. Nunc a dapibus nisl, id elementum urna.

          Quisque et dapibus mauris. Pellentesque nulla odio, consequat ac mollis eget, sodales eget nulla. Aliquam nunc magna, lobortis ut luctus vitae, hendrerit et arcu. Etiam commodo massa eget purus congue tincidunt. Proin nec turpis pellentesque, maximus leo in, tincidunt nulla. Sed blandit vitae est non porta. Vestibulum pretium nec urna vehicula blandit. In euismod venenatis mollis. In augue ligula, tempus non pellentesque quis, vestibulum et nisi.
        </p>
        <img className='pic' src={pic}/>
      </div> */}

      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={7}>
          <p>
            Hello! My name is Brock and I am a Spring 2022 graduate from the University of Florida with a major in Computer Science and a minor in Business Administration. I began coding back in 2014, and have had a passion for it ever since!
            <br/>
            <br/>
            I am currently searching for full time Software Engineering positions.
          </p>
        </Col>
        <Col xs={12} md={6} lg={5}>
          <img className='mx-auto d-block picture' src='/images/webpic.jpg'/>
        </Col>
      </Row>
    </div>
  );
}

export default About;
