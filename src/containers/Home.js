import React from 'react';
// import {Link} from 'react-router-dom'
class  Home extends React.Component {


  click(data){
    console.log('props in App',data)
    data.history.push('/about',{name:'Sagar'})
  }
  
  render(){
    console.log(this.props,"hjhj")

  
  return (
    <div >
      <h1>Home</h1>

 
     <button onClick={()=>this.click(this.props)}>Click</button>



{/*      
      <Link to="/about">About</Link>
      <br />
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <br />

     <Link to="/Contact">Contact</Link> */}
    </div>
  );
    }
}

export default Home;
