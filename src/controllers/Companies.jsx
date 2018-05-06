import React, { Component } from 'react';
import '../assets/css/companies.css';
import BabelLogo from '../assets/imgs/babel-logo.png';
import JackLogo from '../assets/imgs/jackstack-logo.png';
import MidLogo from '../assets/imgs/midwest-logo.png';
import AllLogo from '../assets/imgs/allheart-logo.png';
import AmLogo from '../assets/imgs/amleonard-logo.png';
import DovLogo from '../assets/imgs/dover-logo.png';
import DisLogo from '../assets/imgs/dscr-logo.png';
import HalLogo from '../assets/imgs/halegroves-logo.png';
import MarLogo from '../assets/imgs/marketlab-logo.png';
import PosLogo from '../assets/imgs/positive-logo.png';
import ReaLogo from '../assets/imgs/really-logo.png';
import TouLogo from '../assets/imgs/touch-logo.png';
import VanLogo from '../assets/imgs/van-logo.png';
import WayLogo from '../assets/imgs/wayside-logo.png';

class Companies extends Component {
    goTo = (index) => {
        const section = ['.companies-theme', '.companies-list'];
        document.querySelector(section[index]).scrollIntoView({
            behavior: 'smooth'
        })
    }
    render() {
        return (
            <div className='companies'>
                <section className='companies-theme'>
                    <h1>Companies.</h1>
                    <div className='arrow-down'>
                        <a onClick={() => this.goTo(1)}><i className="arrow down"></i></a>
                    </div>
                </section>
                <section className='companies-list'>
                    <a onClick={() => this.goTo(0)}><i className='arrow up'></i></a>
                    <div className='list-back'>
                        <ul className='list-a'>
                            <li>
                                <a href='https://babeldabble.azurewebsites.net/'>
                                    <img className='babel logo' src={BabelLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.waysidegardens.com/'>
                                    <img className='  logo' src={WayLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.midwestsports.com/'>
                                    <img className='mid logo' src={MidLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.doversaddlery.com//'>
                                    <img className='  logo' src={DovLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.discountramps.com/'>
                                    <img className='  logo' src={DisLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.jackstackbbq.com/'>
                                    <img className='jack logo' src={JackLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.marketlab.com/'>
                                    <img className='  logo' src={MarLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.touchofclass.com/'>
                                    <img className='  logo' src={TouLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.amleo.com/'>
                                    <img className='  logo' src={AmLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.vandykes.com/'>
                                    <img className='  logo' src={VanLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.halegroves.com/'>
                                    <img className='  logo' src={HalLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.reallygoodstuff.com/'>
                                    <img className='  logo' src={ReaLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.allheart.com/'>
                                    <img className='  logo' src={AllLogo} alt='' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.positivepromotions.com/'>
                                    <img className='  logo' src={PosLogo} alt='' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section >
            </div >
        )
    }
};
export default Companies;