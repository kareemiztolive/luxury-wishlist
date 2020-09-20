import React,{useEffect} from 'react';
import {connect,useDispatch} from 'react-redux'
import {getUserProfile} from '../actions/userActions'
import {Link} from 'react-router-dom'



function UserProfile (props){

 let dispatch = useDispatch()
 
 useEffect(() => {
   dispatch(getUserProfile)
 },[dispatch])

 const loggedIn = props.loggedIn
 const currentUser = props.user

 if (!loggedIn) {
    return <div>
    <Link to="/signup">                                                            
    <button className="button5">SIGN UP HERE</button>
    </Link>
    <Link to="/login">
      <button className="button6">LOG IN HERE</button>
      </Link>
  </div>
 }

 return (
   <div>
     <h1>Profile Page</h1>
     <h1>Welcome, {currentUser.username}</h1>
   </div>
 );
}
const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  user: state.user.user
})

export default connect(mapStateToProps)(UserProfile)
