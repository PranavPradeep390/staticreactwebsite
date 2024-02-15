import React from 'react'
import "./fyt.css"

function Fyt() {
  return (
    <div id='fyt'>
            <h1 className='mt-5' style={{textAlign:"center",color:'gray'}}>Featured Property Types</h1>
            <p style={{textAlign:"center"}}>Find All Type of Property.</p>
        <div id='fytin'>

            <div className="fins5">
               <div className='f5in'> <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png" alt="" srcset="" /></div>
                <h5 style={{textAlign:"center",height:"30px"}}>Family House</h5>
            <p style={{textAlign:"center"}}>122 Property</p>

            </div>
            <div className="fins5">
               <div className='f5in'> <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png" alt="" srcset="" /></div>
                <h5 style={{textAlign:"center",height:"30px"}}>House & Villa</h5>
            <p style={{textAlign:"center"}}>155 Property</p>

            </div>
            <div className="fins5">
                <div className='f5in'><img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png" alt="" srcset="" /></div>
                <h5 style={{textAlign:"center",height:"30px"}}>Apartment</h5>
            <p style={{textAlign:"center"}}>300 Property</p>

            </div>
            <div className="fins5">
       <div className='f5in'>         <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h4.png" alt="" srcset="" /></div>
                <h5 style={{textAlign:"center",height:"30px"}}>Office & Studio</h5>
            <p style={{textAlign:"center"}}>80 Property</p>

            </div>
            <div className="fins5">
              <div className='f5in'>  <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h6.png" alt="" srcset="" /></div>
                <h5 style={{textAlign:"center",height:"30px"}}>Villa & Condo</h5>
            <p style={{textAlign:"center"}}>80 Property</p>

            </div>
           

        </div>
    </div>
  )
}

export default Fyt