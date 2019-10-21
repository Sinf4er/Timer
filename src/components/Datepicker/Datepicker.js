import React from "react";
import DayPicker from "react-day-picker";
import styles from "./Datepicker.module.scss";
import { TimeContext } from "../../contexts/TimeContext";
import "react-day-picker/lib/style.css";

class Datepicker extends React.Component {
  render() {
    return (
      <div className={styles.picker}>
        <TimeContext.Consumer>
          {({ selectedDay, setDate }) => (
            <>
              <DayPicker
                numberOfMonths={4}
                fixedWeeks
                todayButton="Go to Today"
                selectedDays={selectedDay}
                onDayClick={setDate}
                disabledDays={{ before: new Date() }}
              />
              <div className={styles.dateDisplay}>
                {selectedDay.toLocaleDateString()}
              </div>
            </>
          )}
        </TimeContext.Consumer>
      </div>
    );
  }
}

export default Datepicker;
