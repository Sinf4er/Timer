import React, { Component, createContext } from "react";

export const TimeContext = createContext();

class TimeContextProvider extends Component {
  state = {
    selectedDay: new Date(new Date().getFullYear(), 11, 31),
    setDate: day => {
      this.setState({ selectedDay: day });
    }
  };

  render() {
    return (
      <TimeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </TimeContext.Provider>
    );
  }
}

export default TimeContextProvider;
