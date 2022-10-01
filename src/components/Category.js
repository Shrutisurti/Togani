import React from "react";
// import { Container, Row } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import Masala from '../images/Masala.png'
// function Category() {
//   return (
//     <>
//       <Container>
//         <Row>
//           <div>
//             <h3>Shop by Category</h3>
//           </div>
//           <div className="col-lg-4">
//             <CardGroup>
//               <Card  className="card">
//                 <Card.Img variant="top" src={Masala} alt='masala'/>
//             <Card.Body className="card-body">
//             <Card.Title className="card-title">Card title</Card.Title>
//             {/* <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//             </Card.Text> */}
//             </Card.Body>

//               </Card>
//             </CardGroup>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// }
// export default Category;

import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import { Container, Row } from "react-bootstrap";
  
  export default function Category() {
    return (
        <Container>
            <Row  >
            <div className="col-lg-4">
      <MDBCard>
        <MDBRow >
          <MDBCol >
            <MDBCardImage src={Masala} alt='masala' fluid />
          </MDBCol>
          <MDBCol>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      </div>
      </Row>
      </Container>
    );
  }
