import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import OtherPage from './pages/otherPage';
import Dashboard from './pages/dashboard';
import AddnPage from './pages/addnPage';
import SMEPage from './pages/smePage';

const dataObj = [
  {
    "cust_segment": "CORP_SA",
    "cust_type": "MNC",
    "uri_type": "/home",
    "flag": "OFF",
  },
  {
    "cust_segment": "RETAIL_IND",
    "cust_type": "INDI",
    "uri_type": "/dashboard",
    "flag": "ON",
  },
  {
    "cust_segment": "HN",
    "cust_type": "HN_INDI",
    "uri_type": "/addnPage",
    "flag": "ON",
  },
  {
    "cust_segment": "AFF",
    "cust_type": "AFF_INDI",
    "uri_type": "/otherPage",
    "flag": "OFF",
  },
  {
    "cust_segment": "SME_CORP",
    "cust_type": "SME",
    "uri_type": "/smePage",
    "flag": "ON",
  }
];

sessionStorage.setItem('sessStorageValues', JSON.stringify(dataObj));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionStorage: JSON.parse(sessionStorage.getItem('sessStorageValues')),
      showIcon: false
    }
  }

  render() {
    return (
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <ul className="container nav navbar-nav">
            <li className="active">
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/addnPage">Additional Page</Link>
            </li>
            <li>
              <Link to="/otherPage">Other Page</Link>
            </li>
            <li>
              <Link to="/smePage">SME Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home showIcon={this.state.showIcon} />
          </Route>
          <Route path="/dashboard">
            <Dashboard showIcon={this.state.showIcon} />
          </Route>
          <Route path="/otherPage">
            <OtherPage showIcon={this.state.showIcon} />
          </Route>
          <Route path="/addnPage">
            <AddnPage showIcon={this.state.showIcon} />
          </Route>
          <Route path="/smePage">
            <SMEPage showIcon={this.state.showIcon} />
          </Route>
        </Switch>
      </Router >
    )
  }
}

export default App;
