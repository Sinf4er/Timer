import React, { Component, createContext } from "react";

export const TimeContext = createContext();

class TimeContextProvider extends Component {
  defaultDate = `${new Date().getFullYear()}-12-31T00:00:00`;
  storedDate = localStorage.getItem("selectedDay") || this.defaultDate;

  state = {
    selectedDay: new Date(this.storedDate),
    setDate: day => {
      this.setState({ selectedDay: day });
      localStorage.setItem("selectedDay", day);
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
