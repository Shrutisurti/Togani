import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import { Container, NavLink, Row } from 'react-bootstrap';
import Group from '../images/Group.png';


function ImageOverlay() {
  return (
    <div>
    <Container style={{position:'relative'}}>
         <Row>
            <div className='col-lg-6'>
              <img src={Group} alt='Sweet' />
              <div className='btn-position'>
               <NavLink className='btnStyle' to='/'>Shop Now</NavLink>
               </div>
               </div>
         
          </Row>
     </Container>
    </div>
  );
}

export default ImageOverlay;
