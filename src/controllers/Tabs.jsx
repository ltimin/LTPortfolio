import React, { Component } from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';

class Tabs extends Component {
    state = {
        activeTab: 0,
        isModalOpen: false
    }

    tabClick = (index) => {
        this.setState({ activeTab: index });
    };

    render() {
        return (
            <div className='nav'>
                <div className='nav-content'>
                    <input id="toggle" type="checkbox" />
                    <label className="label-toggle ham" htmlFor="toggle">☰</label>
                    <label className="label-toggle x" htmlFor="toggle">&#10005;</label>
                    <ul className='nav-main'>
                        <li>
                            <Link to='/about' className={this.state.activeTab === 0 ? 'activeTab nav-items' : 'nav-items'} onClick={(e) => this.tabClick(0)} id='nav-about'>ABOUT</Link>
                        </li>
                        <li>
                            <Link to='/skills' className={this.state.activeTab === 1 ? 'activeTab nav-items' : 'nav-items'} onClick={(e) => this.tabClick(1)} id='nav-skills'>SKILLS</Link>
                        </li>
                        <li>
                            <Link to='/companies' className={this.state.activeTab === 2 ? 'activeTab nav-items' : 'nav-items'} onClick={(e) => this.tabClick(2)} id='nav-companies'>COMPANIES</Link>
                        </li>
                        <li>
                            <Link to='/code' className={this.state.activeTab === 3 ? 'activeTab nav-items' : 'nav-items'} onClick={(e) => this.tabClick(3)} id='nav-code'>CODE</Link>
                        </li>
                        <li>
                            <Link to='/contact' className={this.state.activeTab === 4 ? 'activeTab nav-items end-nav' : 'nav-items end-nav'} onClick={(e) => { this.tabClick(4) }} id='nav-contact'>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Tabs;