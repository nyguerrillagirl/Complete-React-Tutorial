import './App.css';
import Navbar from './Navbar';
import Home from './Home';

// This is the root component of the React application.
function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
