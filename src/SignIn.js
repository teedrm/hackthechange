import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [donationAmount, setDonationAmount] = useState('');

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
                            <label style={{ marginLeft: '10px' }}>
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    value="Other"
                                    checked={donationAmount === 'Other'}
                                    onChange={() => setDonationAmount('Other')}
                                /> Other
                            </label>
                        </div>

                        {donationAmount && (
                            <p style={{ fontSize: '1.1rem' }}>Total: <span style={{ fontWeight: '500' }}>{donationAmount}</span></p>
                        )}
                    </div>
                </div>

                <button className='submit-btn' onClick={() => navigate('/thankyou')} >Submit</button>
            </div>
        </div>
    );
};

export default SignIn;
