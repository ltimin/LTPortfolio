import React, { Component } from 'react';
import '../assets/css/style.css';
import Routes from './Routes';
import Tabs from './Tabs';
import Email from '../assets/imgs/icon-email.png';
import Twitter from '../assets/imgs/icon-twitter.png';
import LinkedIn from '../assets/imgs/icon-linkedin.png';
import Github from '../assets/imgs/icon-github.png';
import Logo from '../assets/imgs/LT-Logo-white-white.png';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='main-content'>
          <nav>
            <div className='logo'>
              <img src={Logo} id='logo' alt='' />
            </div>
            <Tabs />
          </nav>
          <Routes />
        </div>
        <div className='footer'>
          <div className='powered'>
            <h4>Powered By React, ASP.NET, MSSQL</h4>
          </div>
          <div className='inspired'>
            <h4>Inspired By <a href='http://www.toyfight.co'>ToyFight.co</a></h4>
          </div>
          <div className='social'>
            <h3>Social</h3>
            <a href='mailto:info@LTCodes.tech'><img src={Email} className='mail icons' alt=''></img></a>
            <a href='https://twitter.com/JustCodeG'><img src={Twitter} className='icons' alt=''></img></a>
            <a href='https://www.linkedin.com/in/lawrence-tucker-4a824159/'><img src={LinkedIn} className='icons' alt=''></img></a>
            <a href='https://github.com/ltimin'><img src={Github} className='icons' alt=''></img></a>
          </div>
        </div>
      </div >
    )
  }
}
export default App;
