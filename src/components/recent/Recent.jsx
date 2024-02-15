import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './recent.css'


function Recent() {
  return (
    <div id='recent'>
         <h1 className='mt-5' style={{textAlign:"center",color:'gray',height:'60px'}}>Recent Property Listed</h1>
            <p style={{textAlign:"center"}}>Find All Type of Property.</p>
            <div id='recentin'>


    <Card className='cards'>
      <Card.Img variant="top" src="https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png" />
      
      <Card.Body>
        <Card.Text>
        <i className="fa-regular fa-heart"></i>
        &nbsp;&nbsp;
        <span>For Rent</span>
        </Card.Text>
        <Card.Title>Red Carpet Real Estate </Card.Title>
        <Card.Text>
        <i className="fa-solid fa-location-dot"></i> 210 Zirak Road, Canada
        </Card.Text>
        <Button variant="success">$3,700</Button>
        &nbsp;&nbsp;Apartment
      </Card.Body>
    </Card>
    
    <Card className='cards'>
      <Card.Img variant="top" src="https://funny-daffodil-350bc9.netlify.app/images/list/p-2.png" />
      <Card.Body>
      <Card.Text>
        <i className="fa-regular fa-heart"></i>
        &nbsp;&nbsp;
        <span>For Rent</span>
        </Card.Text>
        <Card.Title>Fairmount Properties </Card.Title>
        <Card.Text>
        <i className="fa-solid fa-location-dot"></i> 5698 Zirak Road, NewYork
        </Card.Text>
        <Button variant="success">$9,750</Button>
        &nbsp;&nbsp;Homes & Villas
      </Card.Body>
    </Card>
    
    <Card className='cards'>
      <Card.Img variant="top" src="https://funny-daffodil-350bc9.netlify.app/images/list/p-7.png" />
      <Card.Body>
      <Card.Text>
        <i className="fa-regular fa-heart"></i>
        &nbsp;&nbsp;
        <span>For Rent</span>
        </Card.Text>
        <Card.Title>The Real Estate Corner </Card.Title>
        <Card.Text>
        <i className="fa-solid fa-location-dot"></i> 5624 Mooker Market, USA
        </Card.Text>
        <Button variant="success">$5,860</Button>
        &nbsp;&nbsp;Offices
      </Card.Body>
    </Card>
    
    
    <Card className='cards'>
      <Card.Img variant="top" src="https://funny-daffodil-350bc9.netlify.app/images/list/p-4.png" />
      <Card.Body>
      <Card.Text>
        <i className="fa-regular fa-heart"></i>
        &nbsp;&nbsp;
        <span>For Rent</span>
        </Card.Text>
        <Card.Title>Herringbone Realty </Card.Title>
        <Card.Text>
        <i className="fa-solid fa-location-dot"></i> 5621 Liverpool, London
        </Card.Text>
        <Button variant="success">$7,750</Button>
        &nbsp;&nbsp; Homes & Villas
      </Card.Body>
    </Card>
    
    
    <Card className='cards'>
      <Card.Img variant="top" src="https://funny-daffodil-350bc9.netlify.app/images/list/p-5.png" />
      <Card.Body>
      <Card.Text>
        <i className="fa-regular fa-heart"></i>
        &nbsp;&nbsp;
        <span>For Rent</span>
        </Card.Text>
        <Card.Title>Brick Lane Realty</Card.Title>
        <Card.Text>
        <i className="fa-solid fa-location-dot"></i> 210 Montreal Road, Canada
        </Card.Text>
        <Button variant="success">$4,850</Button>
        &nbsp;&nbsp; Commercial
      </Card.Body>
    </Card>
    
    
    <Card className='cards'>
      <Card.Img variant="top" src="https://funny-daffodil-350bc9.netlify.app/images/list/p-6.png" />
      <Card.Body>
      <Card.Text>
        <i className="fa-regular fa-heart"></i>
        &nbsp;&nbsp;
        <span>For Rent</span>
        </Card.Text>
        <Card.Title>Banyon Tree Realty <br />
 </Card.Title>
        <Card.Text>
        <i className="fa-solid fa-location-dot"></i> 210 Zirak Road, Canada
        </Card.Text>
        <Button variant="success">$2,742</Button>
        &nbsp;&nbsp; Apartment
      </Card.Body>
    </Card>
    
            </div>
             <div id='awards'>
            <p className='mt-5'style={{textAlign:"center",color:'green',fontSize:"30px"}}>Our Awards</p>
             <h1  style={{textAlign:"center",color:'white',height:'100px'}}>Over 1,24,000+ Happy User Bieng With Us Still <br /> They Love Our Services</h1>
             <div id='awardin'>
                <div className='awrds'>
                <i className="fa-solid fa-award " style={{color:'white',fontSize:'30px'}}></i>
                <h1 style={{color:'white',fontSize:'40px' ,height:'50px'}}>32M</h1>
                <p style={{color:'white'}}>Blue Burmin Award</p>
                </div>

                <div className='awrds'>
                <i className="fa-solid fa-award " style={{color:'white',fontSize:'30px'}}></i>
                <h1 style={{color:'white',fontSize:'40px' ,height:'50px'}}>43M</h1>
                <p style={{color:'white'}}>Mimo X11 Award</p>
                </div>

                <div className='awrds'>
                <i className="fa-solid fa-award " style={{color:'white',fontSize:'30px'}}></i>
                <h1 style={{color:'white',fontSize:'40px' ,height:'50px'}}>51M</h1>
                <p style={{color:'white'}}>Blue Burmin Award</p>
                </div>

                <div className='awrds'>
                <i className="fa-solid fa-award " style={{color:'white',fontSize:'30px'}}></i>
                <h1 style={{color:'white',fontSize:'40px' ,height:'50px'}}>42M</h1>
                <p style={{color:'white'}}>IITCA Green Award</p>
                </div>

             </div>

             </div>
             <div id='locations'>
             <h1 className='mt-5' style={{textAlign:"center",color:'gray',height:"60px"}}>Explore By Location</h1>
            <p style={{textAlign:"center"}}>Find All Type of Property by Location</p>
            <div id='locin'>

            <Card className='lpic' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://github.com/sunil9813/Real-estate-website/blob/master/public/images/location/city-1.png?raw=true" />
             <Card.Body>
        
               <Card.Text>
               Montreal, Canada
12 Villas07 Offices 10 Apartments
               </Card.Text>
             </Card.Body>
            </Card>

            <Card className='lpic' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://github.com/sunil9813/Real-estate-website/blob/master/public/images/location/city-2.png?raw=true" />
             <Card.Body>
        
               <Card.Text>
               Jerrsy, United State
12 Villas07 Offices10 Apartments
               </Card.Text>
             </Card.Body>
            </Card>

            <Card className='lpic' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://github.com/sunil9813/Real-estate-website/blob/master/public/images/location/city-3.png?raw=true" />
             <Card.Body>
        
               <Card.Text>
               Liverpool, London
12 Villas07 Offices 10 Apartments
               </Card.Text>
             </Card.Body>
            </Card>


            <Card className='lpic' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://github.com/sunil9813/Real-estate-website/blob/master/public/images/location/city-4.png?raw=true" />
             <Card.Body>
        
               <Card.Text>
               NewYork, United States
12 Villas07 Offices 10 Apartments
               </Card.Text>
             </Card.Body>
            </Card>


            <Card className='lpic' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://github.com/sunil9813/Real-estate-website/blob/master/public/images/location/city-5.png?raw=true" />
             <Card.Body>
        
               <Card.Text>
               Jerrsy, United State
12 Villas07 Offices10 Apartments
               </Card.Text>
             </Card.Body>
            </Card>

            <Card className='lpic' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://github.com/sunil9813/Real-estate-website/blob/master/public/images/location/city-6.png?raw=true" />
             <Card.Body>
        
               <Card.Text style={{color:'black'}}>
               New Orleans, Louisiana
               12 Villas07 Offices10 Apartments  
               </Card.Text>
             </Card.Body>
            </Card>









    
            </div>
             </div>
             <div id='green'>
        <div id='greenin'>
                  <div>
                  <h4 className='mt-5' style={{textAlign:"left",color:'white',height:'60px'}}>Do You Have Questions ?</h4>
              <p style={{textAlign:"left",color:'white'}}>We'll help you to grow your career and growth.</p>
                  </div>
                  <div> <Button variant="light">Contact Us Today</Button>{' '}</div>
               </div>
        </div>
             <div id='footer'>
              <div id='footerin'>
                <div className="foot mr-3" style={{color:'white'}}><p>RENTUP</p></div>
                <div className="foot">
                  <p style={{color:'white'}}>Do You Need Help With Anything?</p>
                </div>
                <div className="foot">
                  <p>CONTACTS</p>
                  <p>SERVICES</p>
                  <p>COMPANY</p>
                  
                </div>
              </div>
             </div>
    </div>
  )
}

export default Recent