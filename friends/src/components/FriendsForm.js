import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsForm extends React.Component {
  state = {
    newFriend: {
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    }
  };

  postFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends")
      .then(res => {
        console.log(res.data);
      });
  };

  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.postFriend}>
          <div>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={this.state.newFriend.name}
              onChange={this.handleChanges}
            />
            <input
              placeholder="Age"
              type="text"
              name="age"
              value={this.state.newFriend.age}
              onChange={this.handleChanges}
            />
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={this.state.newFriend.email}
              onChange={this.handleChanges}
            />
          </div>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
