import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/groupcard.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row } from 'react-bootstrap';
import Sweet from '../images/Sweet.png';
import Chilli from '../images/Chilli.png';
// import Sweet from '../images/Sweet.png';

function GroupCard() {
  
  return (
    <Container>
      <Row style={{marginTop:'3.5rem'}}>
        <div style={{marginBottom:'20px'}}>
          <h3>New Arrivals</h3>
        </div>
        <div className='col-lg-3'>
    <CardGroup>
      <Card>
        <div >
        <label style={{backgroundColor:'#FB800A',marginTop:'10px',padding:'3px'}}>32% off</label>
        </div>
        <Card.Img variant="top" src={Sweet} alt="sweet" className='cardimg'/>
         <div>
          <small style={{padding:'10px',color: '#BCBCBC',
          textAlign: 'left',
          font: 'normal normal medium 14px/15px Lato',
          letterSpacing: '0px',
          color: '#BCBCBC',
          opacity: '1'}}>Buy Anita's kitchen</small>
          <span className="star" style={{color:'#F6C800',marginLeft:'22px'}}> &#9733;</span>
          <small style={{padding:'10px'}} className='text-muted'>4.9(98)</small>
          </div>
          <div>
        <p style={{color: '#6A6A6A',
        textAlign: 'left',
        font: 'normal normal bold 18px/15px Lato',
        letterSpacing: '0px',
        color: '#6A6A6A',padding:'10px'}}>Bessan Laddu (Desi Ghee)</p>
        </div>
      </Card>
    </CardGroup>
    </div>
    </Row>
    </Container>
  );
}

export default  GroupCard;

// function GroupCard() {
//   const cardInfo = [
//     {image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
//     {image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
//     {image: "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
//     {image: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
//   ];
  
//   const renderCard = (card,index)=> {
//     return (

//       <>
//        <Container>
//         <Row>
//         <Col>
//       <Card style={{ width: '18rem' }} key={index} className="box">
//       <Card.Img style={{ width: '50%', justifyContent:'center' }} variant="top" src={card.image}/>
//       <Card.Body>
//         <Card.Title>{card.title}</Card.Title>
//         <Card.Text>
//           {card.text}
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </Col>
//     </Row>
//     </Container>
//     </>
//     )
//   }
//   return (
//     <div className='row'>
//       {cardInfo.map(renderCard)}
//     </div>
//   );
// }

// export default GroupCard;