import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
                <div className='thankyou-card'>
                    <h3 style={{fontSize:'1.4rem'}}>Thank you for your donation!</h3>
                    <p style={{fontSize:"0.9rem", marginTop:'-5px'}}>The receipt has been sent to name@gmail.com.</p>

                    <p>Your plant ID</p>
                    <p className='plant-number' style={{fontSize:'1.4rem', marginTop:"2px"}}> 12345</p>
                    <img src='/plant.gif' alt='plant' style={{ width: '200px' }} />
                </div>
                <button className='donate2-btn' onClick={() => navigate('/')}>Back To Homepage</button>
            </div>
        </div>
    )
}

export default ThankYou
