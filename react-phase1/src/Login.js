/*  Full LogIn component */
// Everything here was previously in the App component.
import React from 'react';
// Importing components
import "./css/login.css";
import "./css/home.css";
import Logo from "./assets/img/logo.png"
import Particles from 'reactparticles.js';
class Login extends React.Component {
  
  // From Queue.js
  // Generic handler for whenever we type in an input box.
  render() {
    return (
    <div className="myLogin">
      <Particles id="tile1"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <title> csc309 Phase 1</title>
    <header class="header-sticky header-light">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container pr-2 pl-2">
          <a class="navbar-brand" href="../../../index.html">
            <img class="bannerLogo" src= {Logo} alt="LOGO"/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item  active">
                <a class="nav-link" href="/">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Notifications</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/signup">Sign up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div id="login-holder" class="container">
      <div class="card">
      <article class="card-body">
      <a href="src/pages/signup/signup.html" class="float-right btn btn-outline-primary">Sign up</a>
      <h4 class="card-title mb-4 mt-1">Sign in</h4>
      <form>
          <div class="form-group">
              <label>Your email</label>
              <input name="" class="form-control" placeholder="Email" type="email"/>
          </div>
          <div class="form-group">
              <a class="float-right" href="/">Forgot?</a>
              <label>Your password</label>
              <input class="form-control" placeholder="******" type="password"/>
          </div> 
          <div class="form-group"> 
          <div class="checkbox">
            <label> <input type="checkbox"/> Save password </label>
          </div> 
          </div> 
          <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block"> Login  </button>
          </div>                                                         
      </form>
      </article>
      </div> 
      
  </div> 
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </div>
    );
  }
}

export default Login;