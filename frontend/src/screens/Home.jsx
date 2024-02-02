import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import styles from "../style";
const Home = () => {
  // Get user information from Redux state
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // If user is not logged in, navigate to the login page
  if (!userInfo) {
    // You can replace '/login' with the actual path to your login page
    navigate('/');
    // Returning null or an empty component since the navigation is asynchronous
    return null;
  }

  return (<div>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
  </div>
  
  </div>

  );
};

export default Home;
