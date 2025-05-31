import Navbar from './Navbar';
import Home from './Home';
import './index.css';
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
