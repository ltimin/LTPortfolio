import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Companies from './Companies';
import Contact from './Contact';
import Skills from './Skills';
import Code from './Code';

class Routes extends Component {

    render() {
        return (
            <div className='routes'>
                <Switch>
                    <Route path='/' exact component={About} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/companies' component={Companies} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/code' component={Code} />
                </Switch>
            </div>
        )
    }
}
export default Routes;