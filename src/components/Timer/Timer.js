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

  render() {
    const { currentDate } = this.state;
    const { selectedDay } = this.context;

    const time = this.getReadableTimeDiffObject(currentDate, selectedDay);

    return (
      <>
        <div className={styles.tile}>
          <div className={styles.number}>{time.days}</div>
          <div className={styles.label}>Days</div>
        </div>

        <div className={styles.tile}>
          <div className={styles.number}>{time.hours}</div>
          <div className={styles.label}>Hours</div>
        </div>

        <div className={styles.tile}>
          <div className={styles.number}>{time.minutes}</div>
          <div className={styles.label}>Minutes</div>
        </div>

        <div className={styles.tile}>
          <div className={styles.number}>{time.seconds}</div>
          <div className={styles.label}>Seconds</div>
        </div>
      </>
    );
  }
}

export default Timer;
