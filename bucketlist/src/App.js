import React, { Component } from "react";
import "./App.css";

import CreateItem from "./CreateItem/createItem";
import { Link, Route, Switch } from "react-router-dom";
import ListItem from "./ListItem/ListItem";

class App extends Component {
  state = {
    title: this.title,
    url: this.url,
    description: this.description
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/">React-BucketList</a>
          <Link
            to="/createitem"
            style={{ textDecoration: "none", color: "lightblue" }}
          >
            Create Item
          </Link>
          <Link to="/listItems"> List </Link>
        </header>

        <h1>Bucket List!</h1>

        <section className="form" />
        <main>
          <Switch>
            <Route
              path="/createitem"
              render={props => (
                <CreateItem
                  {...this.state}
                  {...props}
                  stocks={this.props.stocks}
                />
              )}
            />

            <Route path="/listItems" Component={ListItem} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;