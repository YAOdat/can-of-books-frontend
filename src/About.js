import { Component } from "react";
import Card from 'react-bootstrap/Card';
import image from './components/myProfile.jpg';
class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return ( 
    <> 
    <h3> This project was created as part of the tasks required from me to do. </h3>
    <p> About me: </p>
    <Card style={{ width: '19rem' }}>
    <Card.Img variant="Secondary" src={image} />
    <Card.Body>
      <Card.Title>Yaser Odat</Card.Title>
      <Card.Text>
       Junior Full-Stack Developer.
      </Card.Text>
    </Card.Body>
  </Card>
    
    </>
  )}
};

export default About;
