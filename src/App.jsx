import Home from './Components/Home';
import Search from './Components/Search';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route exact path='/search' component={Search} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
