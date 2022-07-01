import './Item.css'
// import logo from '../../images/fittrackpluslogo.png'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// https://github.com/brawhk/FitTrackPlus

function Item(props) {
  return (
    <div className='item'>
        <Col className='outer' xs={12} sm={10} md={props.data.demo ? 6 : 12} xl={props.data.demo ? 4 : 8}>
          <Card className='shadow'>
            {props.data.logo && <Card.Img variant="top p-5" src={props.data.logoPath} />}
            <Card.Body>
              <Card.Link target="_blank" href={props.data.link}>{props.data.title}</Card.Link>
              <Card.Text>
                {props.data.desc}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* {
            props.data.demo &&
            <Col md={2}>
              <img className='demo' src={props.data.demoPath}/>
            </Col>
          } */}
        </Col>
        {
            props.data.demo &&
            <Col className='inner mx-0' md={6} xl={4}>
              <img className='demo' src={props.data.demoPath}/>
            </Col>
          }
    </div>
  );
}

export default Item;
