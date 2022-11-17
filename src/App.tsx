import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store'
import Home from './pages/Home'
import Login from './pages/Login'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Detail from './pages/Airticle';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/home" >主页  </Link>
        <Link to="/login" >登录</Link> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          {/* <Route path="/login" component={Login}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;