import './App.css';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Home from './components/Home'

function App() {
  return (
    <div className="bg-img">
      <Router>
      <Switch>
      <Route path="/Home" component={Home} />
      <Redirect from='*' to='/Home' />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
