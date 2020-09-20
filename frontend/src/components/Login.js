import React from 'react';
import {connect} from 'react-redux'
import {Link,Redirect} from "react-router-dom";
import {fetchUser} from "../actions/userActions"



 
class Login extends React.Component {

  state = ({ usernameInputValue: "",
passwordInputValue: "",})


 handleUsernameChange = (e) => {
  this.setState({usernameInputValue: e.target.value})

}

handlePasswordChange = (e) => {
  this.setState({passwordInputValue: e.target.value})
}


handleSubmit = (e) => {
  e.preventDefault()
  this.props.fetchUser(this.state) 
}

render() {

const loggedIn = this.props.loggedIn
  
if (loggedIn) {
    return <Redirect to="/profile"/>
  }

 return (
   <div>

  <h1 className="titlesignuplogin">Login</h1>
  
  <div>
   <form>

     <div className="inputcontainer5">
       <label className="labeltitle">Username</label>
       <input className="inputinfo" onChange={this.handleUsernameChange}
       value={this.state.usernameInputValue}/>
     </div>

     <div className="inputcontainer6">
       <label className="labeltitle">Password</label>
       <input className="inputinfo" onChange={this.handlePasswordChange}
        value={this.state.passwordInputValue}/>
     </div>

     <div>
       <button className="button5"onClick={this.handleSubmit}>LOG IN</button>
     </div>

   </form>

  </div>

  <div>
    <Link to="/signup">                                                            
    <button className="button6">SIGN UP</button>
    </Link>
  </div>
 
     
   </div>
 );
}
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => {
  return {
      fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
