import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path='/'></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
