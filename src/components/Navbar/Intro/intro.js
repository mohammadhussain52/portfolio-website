import React from 'react';
import bg from '../../../assets/front-bg.png';
import btnimage from '../../../assets/hireme.png';
import './intro.css';


const intro = () => {
  return (
    <section id='intro'>
        <div className='intro-content'>
        <span className='hello'>Hello, </span>
        <span className='intro-text'>I'm <strong>Mohammad</strong><br /> Web Developer</span>
        <p className='intro-para'>I'm a website developer with experience in WordPress, Shopify, and React.js. I can help bring your website ideas to life and handle any modifications using my hands-on skills and expertise.</p>
        <a href='https://www.linkedin.com/in/mohammad-hussain-769610281/'><button className='btn'><img src={btnimage} alt='button image' className='btn-img' /> Hire Me </button></a>
        </div>
        <img src={bg} alt='profile' className='bg-img' />
    </section>
  );
}

export default intro
