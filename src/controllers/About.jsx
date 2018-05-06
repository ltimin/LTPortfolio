import React, { Component } from 'react';
import '../assets/css/about.css';
import { Link } from 'react-router-dom';
import Mac from '../assets/imgs/bd-macbook.png';
import Phone from '../assets/imgs/iphonex.png';


class About extends Component {

    goTo = (index) => {
        const section = ['.about-theme', '.who-i-am', '.recent-work'];
        document.querySelector(section[index]).scrollIntoView({
            behavior: 'smooth'
        })
    }
    render() {
        return (
            <div className='about'>
                <section className='about-theme'>
                    <h1>About.</h1>
                    <div className='arrow-down'>
                        <a onClick={() => this.goTo(1)}><i className="arrow down"></i></a>
                    </div>
                </section>
                <section className='who-i-am'>
                    <div id='my-name'>
                        <h2>I AM LAWRENCE TUCKER.</h2>
                    </div>

                    <div id='my-statement'>
                        <p>
                            I’m a <span>FULL STACK DEVELOPER</span> based in Los Angeles, CA.
                    I’ve been developing for the past 3 years in the <span>.</span><span>NET</span> framework.
                    I’m an all-around creative with hobbies such as <span>PHOTOGRAPHY</span>, <span>VIDEOGRAPHY</span>, and <span>DRONE FLYING</span>.
            </p>
                    </div>
                    <div className='arrow-down'>
                        <a onClick={() => this.goTo(2)}><i className="arrow down"></i></a>
                    </div>
                    <a onClick={() => this.goTo(0)}><i className='arrow up'></i></a>
                </section>
                <section className='recent-work'>
                    <div className='macBook'>
                        <img src={Mac} id='mac-img' alt='' />
                    </div>
                    <div className='work'>
                        <h3>RECENT</h3>
                        <h3>WORK</h3>
                        <Link to='/companies'>VIEW WORK</Link>
                    </div>
                    <div className='phone'>
                        <img src={Phone} id='phone-img' alt='' />
                    </div>
                    <a onClick={() => this.goTo(0)}><i className='arrow up'></i></a>
                </section>
            </div >
        )
    }
};
export default About;
