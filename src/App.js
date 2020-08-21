import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import ProfileList from "./components/ProfileList/ProfileList";
import Loader from "./components/Loader/Loader";


const API = "https://api.github.com/";
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "Rebby",
      Users: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchSearch(this.state.input);
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  fetchSearch = (username) => {
    console.log("test");
    let url = `${API}search/users?q=${username}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("result", data.items);
        this.setState({
            Users: data.items,
          loading: false,
        });
      })
      .catch((error) => console.log("Oops! . There Is A Problem" + error));
  };

  onButtonSubmit = (event) => {
    this.setState({
      loading: true,
    });
    event.preventDefault();
    this.fetchSearch(this.state.input);
  };
  render() {
    const { Users } = this.state;
    return (
   
      <div>
        <Header />
        <SearchForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {this.state.loading ? (
          <Loader />
        ) : (
          <ProfileList
            Users={Users.length === 0 ? Users : Users}
          />
        )}
      </div>
    );
  }
}

export default App;
