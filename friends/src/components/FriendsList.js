import React from "react";
import FriendsForm from "./FriendsForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends() {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    // const { friends } = this.state;
    // console.log(friends);
    return (
      <div>
        <FriendsForm />
        <h1>Friends List</h1>
        <div>
          {/* {this.state.friends.map(friend => (
            <h3>{this.state.friend}</h3>
          ))} */}
          {this.state.friends.map(friend => {
            return (
              <div>
                <h2>{friend.name}</h2>
                <h3>{friend.age}</h3>
                <h3 className="email">{friend.email}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FriendsList;
