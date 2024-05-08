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
    <div class="absolute top-20 md:top-32 lg:top-40 xl:top-48 left-20 md:left-32 lg:left-0  xl:left-60 xl:left-extra z-10">
    
  <div class="grid grid-cols-4 gap-6">
  <a href="" class="block p-2 w-60 h-20 bg-blue border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-image bg-cover bg-center" style={{backgroundImage: "url('/src/assets/earth3.jpg')"}}>

    <h5 class="mb-1 text-xs font-bold tracking-tight text-gray-900 dark:text-white text-center">Step-By-Step-Guide </h5>
    <p class="font-normal text-xs text-gray-700 dark:text-gray-400 text-center">Welcome Onboard </p>
  </a>

  <a href="#" class="block p-2 w-60 h-20 bg-blue border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-image bg-cover bg-center" style={{backgroundImage: "url('/src/assets/earth3.jpg')"}}>

    <h5 class="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center">Step-By-Step-Guide </h5>
    <p class="font-normal text-xs text-gray-700 dark:text-gray-400 text-center">Welcome Onboard </p>
  </a>

  <a href="#" class="block p-2 w-60 h-20 bg-blue border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-image bg-cover bg-center" style={{backgroundImage: "url('/src/assets/earth3.jpg')"}}>

    <h5 class="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center">Step-By-Step-Guide</h5>
    <p class="font-normal text-xs text-gray-700 dark:text-gray-400 text-center">Welcome Onboard .</p>
  </a>

  <a href="#" class="block p-2 w-60 h-20 bg-blue border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-image bg-cover bg-center" style={{backgroundImage: "url('/src/assets/earth3.jpg')"}}>

    <h5 class="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center">Step-By-Step-Guide </h5>
    <p class="font-normal text-xs text-gray-700 dark:text-gray-400 text-center">Here are the biggest .</p>
  </a>
</div>
</div>
<div><section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 float-right">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section></div>

</div>



  );
};

export default Home;
