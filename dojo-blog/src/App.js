import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Create from './Create';
import NotFound from './NotFound';

// This is the root component of the React application.
function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>            
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>   
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
