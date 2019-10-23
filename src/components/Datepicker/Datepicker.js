import React from "react";
import DayPicker from "react-day-picker";
import styles from "./Datepicker.module.scss";
import { TimeContext } from "../../contexts/TimeContext";
import "react-day-picker/lib/style.css";
import "rc-time-picker/assets/index.css";

import moment from "moment";
import TimePicker from "rc-time-picker";

class Datepicker extends React.Component {
  render() {
    return (
      <div className={styles.picker}>
        <TimeContext.Consumer>
          {({ selectedDateTime, setDate, setTime }) => (
            <>
              <DayPicker
                firstDayOfWeek={1}
                numberOfMonths={2}
                fixedWeeks
                todayButton="Go to Today"
                selectedDays={selectedDateTime}
                onDayClick={setDate}
                disabledDays={{ before: new Date() }}
              />

              <div className={styles.dateDisplay}>
                {selectedDateTime.toLocaleDateString()}
                <TimePicker
                  className={styles.timePicker}
                  defaultValue={moment()}
                  showMinute={true}
                  showSecond={false}
                  onChange={setTime}
                />
              </div>
            </>
          )}
        </TimeContext.Consumer>
      </div>
    );
  }
}

export default Datepicker;
