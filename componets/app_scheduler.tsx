import React from "react";
import { useState } from "react";
import styles from "../styles/app_scheduler.module.css"

export const AppScheduler = (props: any) => {
  const [datepicker, setDatepicker] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");

  const AppointmentCreate = (props: any) => {
    console.log("bitch", props);
    console.log(typeof starttime);
    return {
      id: 0,
      title: "",
      allDay: { Boolean },
      start: new Date(starttime),
      end: new Date(endtime),
    };
  };
  return (
    <form className={styles.scheduler} onSubmit={() => false}>
      <input
        className={styles.datepicker}
        type="date"
        id="start"
        name="appointment -start"
        value={datepicker}
        onChange={(e) => setDatepicker(e.target.value)}
        required
      />
      <input
        className={styles.starttime}
        type="time"
        id="start time"
        name="starttime"
        value={starttime}
        onChange={(e) => setStarttime(e.target.value)}
        required
      />
      <input
        className={styles.endtime}
        type="time"
        id="end time"
        name="end time"
        value={endtime}
        onChange={(e) => setEndtime(e.target.value)}
        required
      />
      <button className={styles.pickersubmit} onClick={AppointmentCreate}>
        Schedule it
      </button>
      <p>{datepicker}</p>
      <p>{starttime}</p>
      <p>{endtime}</p>
    </form>
  );
};
