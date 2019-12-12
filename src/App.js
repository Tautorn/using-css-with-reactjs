import React from 'react';
import Logo from './logo.png';
import './style.css';

function App() {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="spotify" width="68px" />
        <span className="title">Spotify</span>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">SIGN IN</a></li>
          <li><a href="#">SIGN UP</a></li>
        </ul>
      </nav> 
      <form>
        <div className="row">
          <input className="input" type="text" name="username" placeholder="Username" required />
        </div>
        <div className="row">
          <input className="input"type="password" name="password" placeholder="Password" required />
        </div>
        <div className="stay">
          <input type="checkbox" name="signed" id="signed" /> <label htmlFor="signed">stay signed in</label>
        </div>
        <div className="row">
          <button className="button" type="submit">SIGN IN</button>
        </div>
        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default App;
