import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: [res.data]
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { friends } = this.state;

    return (
      <div>
        <h1>Friends List</h1>
        <div>
          {friends.map(friend => (
            <h3>{this.state.friend}</h3>
          ))}
        </div>
      </div>
    );
  }
}

export default FriendsList;
