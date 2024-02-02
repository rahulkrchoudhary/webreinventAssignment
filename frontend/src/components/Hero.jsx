import styles from "../style";


import computer from "../assets/computer.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
       <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-row justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rahul Choudhary</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Am Full stack developer
          </p>
        </div>
         <div className='flex justify-center items-center'>
          <img src={computer} alt='Computer' className='w-500 h-500' />
        </div>
      </div>

     


      
    </section>
  );
};

export default Hero;
