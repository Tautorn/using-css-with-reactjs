import React from 'react';
import Logo from './logo.png'

function App() {
  return (
    <div>
      <div><img src={Logo} alt="spotify" width="80px" />SPOTIFY</div>
      <nav>
        <ul>
          <li><a href="#">SIGN IN</a></li>
          <li><a href="#">SIGN UP</a></li>
        </ul>
      </nav> 
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <input type="checkbox" name="signed" />
        </div>
        <div>
          <button type="submit">SIGN IN</button>
        </div>
        <a href="#">Forgot Password?</a>
      </form>
    </div>
  );
}

export default App;
