import logo from './logo.svg';
import './App.css';
import profileImage from './image/prabanjan.jpg';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author : Prabanjan Nambiyappan</h2>
      <img src={profileImage} alt="profile-image"></img>
    </div>
  );
}

export default App;
