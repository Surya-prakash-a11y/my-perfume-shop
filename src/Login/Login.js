// import react from "react";
import './Login.css'

function login(){
  
return(
<div>

<div className="login-item">
    <h1>login Form</h1>
    <div className="login-form">
      <label id='username'>Username:</label>
        <input type="text" placeholder="User name" id="username" autofocus required/>
        <div id="user"></div>

        <label id='email'>Email:</label>
        <input type="Email" placeholder="Email" id="login-input"/>
        <div id="user"></div>

        <label id='password'>Password:</label>
        <input type="Password" placeholder="password" id="login-input"/>
        <div id="user"></div>


        <label id='re-enterpassword'>Re-Enter Password</label>
        <input type="Re-enter password" placeholder="Re-enter password" id="login-input"/>
        <div id="user"></div>
    </div>
    <button type="submit" id='btn1'>submit</button>
</div>

</div>

)    

}
export default login;