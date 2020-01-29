import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsForm extends React.Component {
  // state = {
  //   newFriend: {}
  // };

  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  postFriend = props => {
    axiosWithAuth()
      .post("/api/friends")
      .then(res => {
        console.log(props.newFriend.name);
        this.setState({
          newFriend: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  // postFriend = e => {
  //   e.preventDefault();
  //   this.props.postFriend(this.state.newFriend)
  // }

  // handleSubmit = e => {
  //   e.preventDefault();
  //     if (this.state.newFriend !== "") {
  //       this.state.newFriend(this.state.newFriend);
  //       this.setState({
  //         newFriend: ""
  //       })
  //     }
  // }

  render() {
    return (
      <div>
        <form method="POST">
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
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
