import React from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {signUserUp} from "../actions/userActions"



 
 class SignUp extends React.Component{

state = ({ firstnameInputValue: "",
lastnameInputValue: "",
usernameInputValue: "",
passwordInputValue: "",})

handleFirstnameChange = (e) => {
  this.setState({firstnameInputValue: e.target.value})
}

handleLastnameChange = (e) => {
  this.setState({lastnameInputValue: e.target.value})

}

 handleUsernameChange = (e) => {
  this.setState({usernameInputValue: e.target.value})

}

 handlePasswordChange = (e) => {
  this.setState({passwordInputValue: e.target.value})

}


handleSubmit = (e) => {
  e.preventDefault()
  this.props.signUserUp(this.state) 
}

render() {
 return (
   <div>
     
     <h1 className="titlesignuplogin">Sign Up</h1>
    
    <div>
      <form>

        <div className="inputcontainer">
          <label className="labeltitle">First Name</label>
          <input className="inputinfo" onChange={this.handleFirstnameChange}
          value={this.state.firstnameInputValue}/>
        </div>

        <div className="inputcontainer2">
          <label className="labeltitle">Username </label>
          <input className="inputinfo" onChange={this.handleUsernameChange}
          value={this.state.usernameInputValue}/>
        </div>

        <div className="inputcontainer3">
          <label className="labeltitle">Last Name</label>
          <input className="inputinfo" onChange={this.handleLastnameChange}
          value={this.state.lastnameInputValue}/>
        </div>

        <div className="inputcontainer4">
          <label className="labeltitle">Password</label>
          <input className="inputinfo" onChange={this.handlePasswordChange}
          value={this.state.passwordInputValue}/>
        </div>

        <div>
          <button className="button5" onClick={this.handleSubmit}>SIGN UP</button>
        </div>
  
      </form>

    </div>

    <div>
      <Link to="/login">
      <button className="button6">LOG IN</button>
      </Link>
      </div>

   </div>
 );
 }
 }

 const mapDispatchToProps = (dispatch) => {
  return {
      signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
  }
}


export default connect(null,mapDispatchToProps)(SignUp)
