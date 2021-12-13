import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShowProducts from './components/ShowProducts';
import NavBarMenu from './components/NavBarMenu';
import Applications from './components/Applications';
import ApplicationForm from './components/ApplicationForm';
import FormDetail from './components/FormDetail';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
          <Switch>
            <Route exact path="/" component={ShowProducts} />
            <Route exact path="/applicationform" component={ApplicationForm} />
            <Route exact path='/applications' component={Applications} />
            <Route exact path='/applications/:id' component={FormDetail} />
            <Route exact path='/applications/:id/update' component={UpdateForm} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
