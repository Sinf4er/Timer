import React from "react";
import { TimeContext } from "../../contexts/TimeContext";
import styles from "./Timer.module.scss";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    //aktuallisiert jede Sekunde neu - die aktuelle Zeit
    setInterval(this.setCurrentTime, 1000);
  }

  state = {
    currentDate: new Date()
  };

  //Speichert die aktuelle Zeit
  setCurrentTime = () => {
    this.setState({
      currentDate: new Date()
    });
  };

  static contextType = TimeContext;

  addLeadingZero = time => {
    if (time < 10) {
      return "0" + time;
    }

    return time;
  };

  getReadableTimeDiffObject = (startDate, endDate) => {
    const differenz = (endDate.getTime() - startDate.getTime()) / 1000;

    return {
      days: this.addLeadingZero(Math.floor(differenz / 60 / 60 / 24)),
      hours: this.addLeadingZero(Math.floor((differenz / 60 / 60) % 24)),
      minutes: this.addLeadingZero(Math.floor(differenz / 60) % 60),
      seconds: this.addLeadingZero(Math.floor(differenz % 60))
    };
  };

  renderTile = () => {
    const unit = ["days", "hours", "minutes", "seconds"];
    const { currentDate } = this.state;
    const { selectedDateTime } = this.context;

    const time = this.getReadableTimeDiffObject(currentDate, selectedDateTime);

    const tiles = unit.map(unit => (
      <div className={styles.tile} key={unit}>
        <div className={styles.number}>{time[unit]}</div>
        <div className={styles.label}>{unit}</div>
      </div>
    ));
    return tiles;
  };
  render() {
    return <>{this.renderTile()}</>;
  }
}
export default Timer;
