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
        <p className='intro-para'>I'm a website developer with having an experience on Wordpress, Shopify, React.Js...I can fulfill your website desires and modification with my on hand skills & experience.</p>
        <a href='https://www.linkedin.com/in/mohammad-hussain-769610281/'><button className='btn'><img src={btnimage} alt='button image' className='btn-img' /> Hire Me </button></a>
        </div>
        <img src={bg} alt='profile' className='bg-img' />
    </section>
  );
}

export default intro
