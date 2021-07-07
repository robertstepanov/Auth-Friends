import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import FriendsForm from "./components/FriendsForm";


import "./App.css";
import { axiosWithAuth } from "./utils/axiosWithAuth";

function App() {

  // postMessage = () => {
  //   axios
  //   .post('http:/localhost:5000/api/friends')
  //   .then(response => {
  //     this.setState({
  //       newFriend: response.data
  //     })
  //   })
  // }
  return (
    <Router>
      <div className="App">
        {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendslist">Friends List</Link>
          </li>
        </ul> */}
        <Switch>
          <PrivateRoute path="/friendslist" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
