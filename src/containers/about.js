import React from 'react';
import {Link} from 'react-router-dom'
class  About extends React.Component{
    render(){
        console.log('props from home',this.props.match.params.id)

        return(
            <div >
            <h1>About</h1>
          <Link to="/">Home</Link>
          <br />
          <br />
          <Link to="/about">About</Link>
          <br />
          <br />
          <Link to="/profile">Profile</Link>
          <br />
          <br />
         <Link to="/Contact">Contact</Link>
          </div>
      
        )

    }
  
}
export default About;