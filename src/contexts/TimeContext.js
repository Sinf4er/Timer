import React, { Component, createContext } from "react";

export const TimeContext = createContext();

class TimeContextProvider extends Component {
  defaultDateTime = `${new Date().getFullYear()}-12-31T00:00:00`;
  storedDateTime =
    localStorage.getItem("selectedDateTime") || this.defaultDateTime;

  state = {
    selectedDateTime: new Date(this.storedDateTime),
    setDate: day => {
      const newDateTime = new Date(day);
      newDateTime.setHours(this.state.selectedDateTime.getHours());
      newDateTime.setMinutes(this.state.selectedDateTime.getMinutes());

      this.setState({ selectedDateTime: newDateTime });
      localStorage.setItem("selectedDateTime", newDateTime.toString());
    },
    setTime: time => {
      const newDateTime = new Date(time);
      newDateTime.setFullYear(this.state.selectedDateTime.getFullYear());
      newDateTime.setMonth(this.state.selectedDateTime.getMonth());
      newDateTime.setDate(this.state.selectedDateTime.getDate());

      this.setState({ selectedDateTime: newDateTime });
      localStorage.setItem("selectedDateTime", newDateTime.toString());
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
