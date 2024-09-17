import logo from './logo.svg';
import './App.css';
import CreateNewLogin from './createnewlogin';
import LoginCheck from './logincheck';
import DeleteAccount from './deleteaccount.js';
import ResetPassword from './resetpassword.js';
import chickennugget from './chickennugget.jpeg';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Log in For Oi Oi Oi</h1>
        <LoginCheck/>
        <CreateNewLogin/>
        <DeleteAccount/>
        <ResetPassword/>
        <img src={chickennugget} className="App-logo2" alt="logo" />
        
        
        
      </header>
    </div>
  );
}

export default App;
