import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import SignUp from "./SignUp"


function App() {
  return (
    <div className="container">
      <header className="auth-wrapper">
      <div className="auth-inner">
        <br /><br />
      <SignUp /></div>
      </header>
    </div>
  );
}

export default App;
