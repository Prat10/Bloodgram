import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
import { SocialIcon } from 'react-social-icons';
import Login from './Login';
const Profile = () => {

    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('/login');
    };
    const navigate = useNavigate();
    return (
        <div className='profile-main'>
            <div className='profile-top'>
                <div className='img-section'>
                    <img className='profile-img'
                        src='https://cdn1.iconfinder.com/data/icons/emergency-situation-vol-2/64/12_-_Blood_Donation_People-512.png' /></div>
                <div className='profile-top1'>
                    <div className='social-profile'>
                        <SocialIcon className='social-pro' bgcolor='white' url='https://facebook.com/jaketrent' />
                        <SocialIcon className='social-pro' bgColor='brown' url='https://email.com/jaketrent' />
                        <SocialIcon className='social-pro' url='https://twitter.com/jaketrent' />
                        <button onClick={navigateToHome} className='Logout-profile'>
                            LOGOUT
                        </button>
                    </div>
                    <h1 className='donate-user'><span>2</span><span>+</span>Donates</h1>
                </div>
            </div>
            <div className='separate-profile'></div>
            <div className='profile-bottom'>
                <div>
                    <form>
                        <div className='profile-bottom1'>
                            <h1>User Details</h1>
                            <div>
                                <input type='text'
                                    name='username'
                                    placeholder='Pratyush singh'
                                />
                            </div>
                            <div>
                                <input type='email'
                                    placeholder="pratyushsingh10575@gmail.com" />
                            </div>
                            <div>
                                <input type='text'
                                    placeholder='B+' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='profile-bottom2'>
                    <h1>Important Details</h1>
                    <form>
                        <div>
                            <input type='password'
                                placeholder='Password' />
                        </div> <div>
                            <input type='text'
                                placeholder='State' />
                        </div>
                        <div>
                            <input type='text'
                                placeholder='District' />
                        </div>
                        <div> <input type='number'
                            placeholder='+91-8120188788' />
                        </div>

                        <button className='profile-btn'>Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;