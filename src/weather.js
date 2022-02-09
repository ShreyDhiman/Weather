import React from "react";

export default class Weather extends React.Component {
  state = { temp: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.temp);
  };
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Enter a location"
                onChange={(e) => this.setState({ temp: e.target.value })}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
