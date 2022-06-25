import './Item.css'
// import logo from '../../images/fittrackpluslogo.png'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// https://github.com/brawhk/FitTrackPlus

function Item(props) {
  return (
    <div className='item'>
        <Col>
          <Card className='shadow'>
            <Card.Img variant="top" src={props.data.logoPath} />
            <Card.Body>
              <Card.Link target="_blank" href={props.data.link}>{props.data.title}</Card.Link>
              <Card.Text>
                {props.data.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </div>
    
  );
}

export default Item;
