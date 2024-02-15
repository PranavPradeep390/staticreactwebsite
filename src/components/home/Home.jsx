import React from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div id='home'>
       <div id='nav'>
      <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand className='navltr' href="#home">Rent<span style={{color:'green',fontWeight:"600"}}>UP</span></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className='navltr' href="#">Home</Nav.Link>
              <Nav.Link className='navltr' href="#">About</Nav.Link>
              <Nav.Link className='navltr' href="#">Services</Nav.Link>
              <Nav.Link className='navltr' href="#">Blog</Nav.Link>
              <Nav.Link className='navltr' href="#">Pricing</Nav.Link>
              <Nav.Link className='navltr' href="#">Contact</Nav.Link>
            </Nav>
            <Navbar.Brand href="#"> <Button variant="success">Sign In</Button>{' '}</Navbar.Brand>

          </Container>
        </Navbar>
       </div>
         <div id='home-content'>
           <div><h1 style={{textAlign:"center",color:"white",height:"130px",fontSize:"60px"}}>Search Your Next Home</h1></div>
           <div><p className='mb-5' style={{textAlign:"center",color:"white",fontSize:"17px"}}>Find new & featured property located in your local city.</p></div>
           <div id="data_box">
            <div className="dboxes">
              <p>City/Street</p>
              <input type="text" placeholder='Location' />
            </div>
            <div className="dboxes">
              <p>Property Type</p>
              <input type="text" placeholder='Property Type' />
            </div>
            <div className="dboxes">
              <p>Price Range</p>
              <input type="text" placeholder='Price Range' />
            </div>
            <div className="dboxes dblast">
              <p>Advance Filter</p>
              <Button variant="success">Search</Button>{' '}
            </div>
           </div>
         </div>
    </div>
  )
}

export default Home