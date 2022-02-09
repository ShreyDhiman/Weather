import Weather from "./weather";
import React from "react";
import "./App.css";
import axios from "axios";
// import Response from "./component/response";

class App extends React.Component {
  state = {
    temp: {},
  };

  onSearchSubmit = async (e) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=47f1b75e7e3c414f83453804220902&q=${e}&aqi=no`
    );
    console.log(
      `Current temp of ${e} ` + response.data.current.temp_c + " degree "
    );
    this.setState({ temp: response.data.current.temp_c });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <Weather onSearchSubmit={this.onSearchSubmit} />
        {/* <Response temp={this.state.temp} /> */}
      </div>
    );
  }
}

export default App;
