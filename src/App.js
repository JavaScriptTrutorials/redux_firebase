import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path='/'><Dashboard/></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
