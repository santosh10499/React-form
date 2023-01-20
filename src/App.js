

import React, {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password !== confPassword){
      alert("Password does not match!");
    }
    
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={ (e) => {handleSubmit(e)} }>
          <h2>Sign-up Form</h2>
          <label>Name:</label><br/>
          <input type="text" value={name} required onChange={ (e) => {handleNameChange(e)} } /><br/><br/>
          <label>Age:</label><br/>
          <input type="text" value={age} required onChange={ (e) => {handleAgeChange(e)} } /><br/><br/>
          <label>Email:</label><br/>
          <input type="email" value={email} required onChange={ (e) => {handleEmailChange(e)} } /><br/><br/>
          <label>Password:</label><br/>
          <input type="password" value={password} required onChange={ (e) => {handlePasswordChange(e)} } /><br/><br/>
          <label>Confirm Password:</label><br/>
          <input type="password" value={confPassword} required onChange={ (e) => {handleConfPasswordChange(e)} } /><br/><br/>
          <input type="submit" value="Submit" id="submit-btn"/>
        </form>
      </header>
    </div>
  );
}

export default App;