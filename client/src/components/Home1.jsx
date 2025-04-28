import React, { Component } from "react";


import { Link } from "react-router-dom";
import { BASEURL, callApi, setSession } from './Api.js';

import "./Home12.css";
import "./../css/Home1.css";
import HomePage from "./HomePage";
export class Home1 extends Component {
  constructor()
  {
    super();
    this.userRegistration=this.userRegistration.bind(this);
    this.forgotPassword=this.forgotPassword.bind(this);
    this.signin=this.signin.bind(this);
  }

  
  showSignin() {
    let popup = document.getElementById("popup");
    let signin=document.getElementById("signin");
    let signup=document.getElementById("signup");
    let popupHeader=document.getElementById("popupHeader");
    popupHeader.innerHTML="Login";
    signin.style.display="block";
    signup.style.display="none"; 
    popup.style.display="block";

    username.value="";
    password.value="";

  }
  showSignup() {
    let popup = document.getElementById("popup");
    let signin=document.getElementById("signin");
    let signup=document.getElementById("signup");
    let popupHeader=document.getElementById("popupHeader");
    popupHeader.innerHTML="Signup";
    signin.style.display="none";
    signup.style.display="block"; 
    popup.style.display="block";
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let role = document.getElementById("role");
    let  signuppassword = document.getElementById("signuppassword");
    let confirmpassword = document.getElementById("confirmpassword");
    fullname.value = "";
    email.value = "";
    role.value = "";
    signuppassword.value = "";
    confirmpassword.value = "";

  }
  closeSignin(event)  {
    if(event.target.id === "popup"){
          let popup = document.getElementById("popup");
          popup.style.display = "none";
    }
  }
  userRegistration()
  {
        let fullname = document.getElementById("fullname");
        let email = document.getElementById("email");
        let role = document.getElementById("role");
        let  signuppassword = document.getElementById("signuppassword");
        let confirmpassword = document.getElementById("confirmpassword");

        fullname.style.border = "";
        email.style.border = "";
        role.style.border = "";
        signuppassword.style.border = "";
        confirmpassword.style.border = "";
        if(fullname.value=="")
        {
          fullname.style.border = "1px solid red";
          fullname.focus();
          return;
        }
        if(email.value=="")
          {
            email.style.border = "1px solid red";
            email.focus();
            return;
          }
          if(role.value=="")
            {
              role.style.border = "1px solid red";
              role.focus();
              return;
            }
            if(signuppassword.value=="")
              {
                signuppassword.style.border = "1px solid red";
                signuppassword.focus();
                return;
              }
              if(confirmpassword.value=="")
                {
                  confirmpassword.style.border = "1px solid red";
                  confirmpassword.focus();
                  return;
                }
                if(signuppassword.value !== confirmpassword.value)
                {
                  signuppassword.style.border = "1px solid red";
                  signuppassword.focus();
                  return;
                }

  


        var data = JSON.stringify({
              fullname : fullname.value,
              email : email.value,
              role : role.value,
              password : signuppassword.value
        })
        callApi("POST", "http://localhost:8080/users/signup", data, this.getResponse)
  }
  getResponse(res){
    let resp = res.split('::');
    alert(resp[1]);
    if (resp[0] === "200")
      {
          let signin = document.getElementById("signin");
          let signup = document.getElementById("signup");
          signin.style.display = "block";
          signup.style.display = "none";
      }
  }
  forgotPassword()
  {
          username.style.border = "";
          if(username.value === "")
          {
            username.style.border = "1px solid red";
            username.focus()
            return;
          }

          let url = "http://localhost:8080/users/forgotpassword/" + username.value;
          callApi("GET", url, "", this.forgotPasswordResponse);

  }
  forgotPasswordResponse(res)
  {
      let data = res.split('::');
      
      if (data[0] === "200")
          responseDiv.innerHTML = `<br/><br/><label style='color:green'>${data[1]}</label>`;
      else
      responseDiv.innerHTML = `<br/><br/><label style='color:red'>${data[1]}</label>`;
  }
  signin(){
    username.style.border="";
    password.style.border="";
    responseDiv.innerHTML="";
    if(username.value==="")
    {
      username.style.border="1px solid red";
      username.focus();
      return;
    }
    if(password.value===""){
      password.style.border="1px solid red";
      password.focus();
      return;
    }
    let data = JSON.stringify({
      email: username.value,
      password: password.value,

    });
    callApi("POST",BASEURL + "users/signin",data,this.signinResponse);
  }
  signinResponse(res){
    let rdata=res.split('::');
    if(rdata[0]==='200'){
      setSession("csrid",rdata[1],1);
      window.location.replace("/dashboard");
    }
    else{
      responseDiv.innerHTML=`<br/><br/><label style="color:red">${rdata[1]}</label>`
    }
  }

  render() {
  
    return (
      <div className="base">
        <div id="popup" onClick={this.closeSignin}>
          <div className='popupWindow'>
            <div id='popupHeader'>Login</div>
            <div id='signin'>
              <label className='usernameLabel'>Username:</label>
              <input type='text' id='username'/>
              <label className='passwordLabel'>Password:</label>
              <input type='passsword'id='password'/>
              
              <div className='forgotPassword'> <label onClick={this.forgotPassword}>Forgot Password?</label></div>
              <button className='siginButton' onClick={this.signin}>Sign In </button>
              <div className='div1' id='responseDiv'></div>
              <div className='div2'>
                Don't have an account?
                <label onClick={this.showSignup}>SIGNUP NOW</label>
              </div>
            </div>
            <div id='signup'>
              <label>Full Name:
              </label>
              <input type='text' id="fullname"/>
              <label>Email:
              </label>
              <input type='email' id="email"/>
              <label>Select Role:</label>
              <select id ='role'>
                <option value=''></option>
                <option value='1'>Admin</option>
                <option value='2'>Employee</option>
                <option value='3'>Job server</option>
              </select>
              <label>Password:</label>
              <input type='password' id="signuppassword"/>
              <label>Confirm Password:</label>
              <input type='password' id="confirmpassword"/>
              <button onClick={this.userRegistration}>Register Now </button>
              <div>Alredy have an account?<span onClick={this.showSignin}>SIGN IN</span></div>
              
      
            </div>
          </div>
        </div>


        <div class="header">
        
          <nav className="BlackBackground">
          <ul className="NavList">
            <li id="image-logo">
              <img src="./../../public/images/1.png" width="230vh" alt="logo" />
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Rentals">Rentals</Link></li>
            <li><Link to="/PropertyManager">Property Manager</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/AboutUs">About</Link></li>


            <li>  <div class="right" onClick={this.showSignin}>
          
          <div class="signText"onClick={this.showSignin}><span>Sign-In </span></div>
        
        </div>
        </li>
        <li>  <div class="right" onClick={this.showSignup}>
          
          <div class="signText"onClick={this.showSignup}><span>Sign-up </span></div>
        
        </div>
        </li>



          </ul>
         
        </nav>
        
          
          
        </div>
        <div class="container">

<HomePage/>
          
        </div>

      
          
 
        <div class="footer1">
          <div class="footer1left">
            <h3>GYASASWINI 2300030244</h3>
          </div>
          <div class="footer1right">
           
            <img src="./images/facebook.png" alt="facebook" />
            <img src="./images/linkedin.png" alt="linkedin" />
            <img src="./images/twitter.png"  alt="twitter"  />
           </div>
        </div>
     
      </div>

    );
  }
}

export default Home1;
