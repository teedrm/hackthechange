import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [donationAmount, setDonationAmount] = useState('');

    // function DonationForm() {
    //     const [donationAmount, setDonationAmount] = useState('');
    //     const [customAmount, setCustomAmount] = useState('');

    //     const handleAmountChange = (event) => {
    //         const value = event.target.value;
    //         setDonationAmount(value);

    //         if (value !== 'Other') {
    //             setCustomAmount('');
    //         }
    //     };
    // }

    // const handleCustomAmountChange = (event) => {
    //     const value = event.target.value;
    //     setCustomAmount(value);
    //     setDonationAmount(value);
    // };

    const [isConfettiActive, setConfettiActive] = useState(false);

    const handleConfetti = () => {
        setConfettiActive(true);
        setTimeout(() => {
            setConfettiActive(false);
            navigate('/thankyou');
        }, 2000);
    };

    return (
        <div>
            <ArrowBackIosIcon style={{ marginTop: '10px', marginLeft: '10px' }} onClick={() => navigate('/')} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.3rem' }}>Enter Your Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '95%' }}>
                    <label style={{ display: 'flex', flexDirection: 'column' }}>
                        Name
                        <input type='text' className='input1' />
                    </label>

                    <label style={{ display: 'flex', flexDirection: 'column', }}>
                        Email
                        <input type='text' className='input1' />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', }}>
                        <p style={{ fontWeight: '600' }}>Where do you want to place your tree?</p>
                        Enter your address
                        <input type='text' className='input1' />
                        OR
                        <div style={{display:'flex', flexDirection:'row',marginBottom:'20px', marginTop:'10px' }}>
                            <label style={{ display: 'flex', flexDirection: 'column' }}>
                             
                                <input type='text' className='input4' placeholder='Longtitude'/>
                            </label>
                            <label style={{ display: 'flex', flexDirection: 'column' }}>
                           
                                <input type='text' className='input4'style={{marginLeft:'10px'}} placeholder='Latitude'/>
                            </label>
                        </div>
                    </label>

                    <label style={{ display: 'flex', flexDirection: 'column', }}>
                        Enter payment
                        <input type='text' inputMode="numeric" className='input1' />
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px' }}>

                        <label style={{ display: 'flex', flexDirection: 'column', }}>
                            <input type='text' inputMode="numeric" placeholder='MM/YY' className='input2' />
                        </label>
                        <label>
                            <input type='text' inputMode="numeric" placeholder='CVV' className='input3' />
                        </label>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                            <label style={{ marginRight: '10px' }}>
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    value="$1"
                                    checked={donationAmount === '$1'}
                                    onChange={() => setDonationAmount('$1')}
                                /> $1
                            </label>
                            <label style={{ marginRight: '10px' }}>
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    value="$5"
                                    checked={donationAmount === '$5'}
                                    onChange={() => setDonationAmount('$5')}
                                /> $5
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    value="$10"
                                    checked={donationAmount === '$10'}
                                    onChange={() => setDonationAmount('$10')}
                                /> $10
                            </label>
                            <label for="amount" style={{ marginLeft: '10px' }}>
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    value="Other"
                                    checked={() => donationAmount === 'Other'}
                                    onChange={() => setDonationAmount('Other')}
                                /> Other
                            </label>
                            {/* <input type="number" name="amount" /> */}
                        </div>

                        {donationAmount && (
                            <p style={{ fontSize: '1.1rem' }}>Total: <span style={{ fontWeight: '500' }}>{donationAmount}</span></p>
                        )}
                    </div>
                </div>

                <button className='submit-btn' onClick={handleConfetti}>
                    Submit
                </button>
                <Confetti active={isConfettiActive} config={{ spread: 360, elementCount: 200 }} />
            </div>
        </div>
    );
};

export default SignIn;
