import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home'
import About from '../containers/about'
import Contact from '../containers/contact'
import Profile from '../containers/profile'

class BasicRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                 <Route  path="/about/:id" component={About} />
                <Route  path="/profile" component={Profile} /> 
                <Route  path="/contact" component={Contact} />

            </Router>

        )
    }
}
export default BasicRouter;