import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import { Container, NavLink, Row } from 'react-bootstrap';
import Group from '../images/Group.png';
import Group35793 from '../images/Group35793.png';


function ImageOverlay() {
  return (
    <div>
     <Container>
         <Row>
            <div className='col-lg-6'>
              <img src={Group} alt='Sweet' />
              <div className='btn-position'>
               <NavLink className='btnStyle' to='/'>Shop Now</NavLink>
               </div>
               </div>
            <div className='col-lg-6'>
            <img src={Group35793} alt='Sweet' />
            <div className='btn-position1'>
               <NavLink to='/' className='btnStyle'
               >Shop Now</NavLink>
               </div>
               </div>
          </Row>
     </Container>
    </div>
  );
}

export default ImageOverlay;
