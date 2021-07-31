import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjetDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/'><Dashboard/></Route>
            <Route path='/project/:id' component={ProjectDetails}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
