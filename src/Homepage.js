import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Homepage() {
  const navigate = useNavigate();
  return (
    <div >
      <div className='logo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='/4l.png' alt='leaf' style={{ width: '50px', marginTop: '20px' }} />
      </div>
      <div style={{ width: '90%', marginLeft: '20px', marginTop: "-20px" }}>
        <h2 className='heading'>Seeds of Change: Support Tree Growth</h2>
        <p>Donate now to grow a virtual and real tree in AR, making a lasting impact on our environment. Your contribution makes a tangible difference in fostering a greener world.</p>
      </div>
      <div>
        {/* <h2 style={{ textAlign: 'center' }} className='heading'>Donate To Plant A Tree!</h2> */}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src='/123.gif' alt='plant' style={{ width: '300px', }} />
        <button className='donate-btn'onClick={()=> navigate('/donate')} >DONATE</button>

        {/* Transparent Circle with Black Border */}
        <div className='transparent-circle'></div>
      </div>

    </div>
  );
}

export default Homepage;
