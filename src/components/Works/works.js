import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/EG.png';
import Portfolio2 from '../../assets/BF.png';
import Portfolio3 from '../../assets/SB.png';
import Portfolio4 from '../../assets/SM.png';
import Portfolio5 from '../../assets/RJ.png';
import Portfolio6 from '../../assets/K9.png';


const works = () => {
  return (
    <section id='works'>
        <h2 className='work-title'>My <strong>Portfolio</strong></h2>
        <p className='work-description'>I have designed various websites on Wordpress, Shopify. My expertise are the proofs that I work with dedication and enthusiasm also ensuring my clients to deliver their projects on time.</p>
        <div className='work-imgs'>
            <a href='https://evaluationgrid.co/'><img src={Portfolio1} alt='' className='works-img' /></a>
            <a href='https://burhanifrozen.pk/'><img src={Portfolio2} alt='' className='works-img' /></a>
            <a href='https://socialboost.no/'><img src={Portfolio3} alt='' className='works-img' /></a>
            <a href='https://www.thesimplemanstore.com/'><img src={Portfolio4} alt='' className='works-img' /></a>
            <a href='https://roverjackets.com/'><img src={Portfolio5} alt='' className='works-img' /></a>
            <a href='https://k9ite.com/'><img src={Portfolio6} alt='' className='works-img' /></a>
        </div>
        <a href='https://wa.me/923322467774'><button className='work-btn'>Contact Me</button></a>
    </section>
  )
}

export default works
