import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";

import "./styles.css";

export const States = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

export const filterList = (list, query) =>
  list.filter(item =>
    item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

class App extends Component {
  state = { filterValue: "", filteredStates: States };

  handleChange = event => {
    this.setState({
      filterValue: event.target.value,
      filteredStates: filterList(States, event.target.value)
    });
  };

  render() {
    //const filteredStates = filterList(States, this.state.filterValue);

    return (
      <div className="App">
        <h1>US States</h1>
        <input
          type="text"
          placeholder="filter..."
          value={this.state.filterValue}
          onChange={this.handleChange}
        />
        <List items={this.state.filteredStates} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
