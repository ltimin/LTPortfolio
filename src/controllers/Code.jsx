import React, { Component } from 'react';
import '../assets/css/code.css';

class Code extends Component {
    goTo = (index) => {
        const section = ['.code-theme', '.code-react', '.code-net', '.code-sql'];
        document.querySelector(section[index]).scrollIntoView({
            behavior: 'smooth'
        })
    }
    render() {
        return (
            <div className='code'>
                <section className='code-theme'>
                    <h1>Code.</h1>
                    <div className='arrow-down'>
                        <a onClick={() => this.goTo(1)}><i className="arrow down"></i></a>
                    </div>
                </section>
                <section className='code-react'>
                    <a onClick={() => this.goTo(0)}><i className='arrow up'></i></a>
                    <h2>React JS</h2>
                    <a onClick={() => this.goTo(2)}><i className="arrow down"></i></a>
                </section>
                <section className='code-net'>
                    <a onClick={() => this.goTo(0)}><i className='arrow up'></i></a>
                    <h2>.NET</h2>
                    <a onClick={() => this.goTo(3)}><i className="arrow down"></i></a>
                </section>
                <section className='code-sql'>
                    <a onClick={() => this.goTo(0)}><i className='arrow up'></i></a>
                    <h2>SQL</h2>
                </section>
            </div>
        )
    }
};
export default Code;
