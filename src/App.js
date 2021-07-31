import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello React</h1>
          <Switch>
            <Route path='/'></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
