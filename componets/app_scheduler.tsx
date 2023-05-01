import React from "react";
import { useState } from "react";
import styles from "../styles/app_scheduler.module.css";

export const AppScheduler = (props: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("")
  const [datepicker, setDatepicker] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");

  const AppointmentCreate = (props: any) => {
    // console.log("bitch", props);
    // console.log(typeof starttime);
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
      <label>Full Name:</label>
      <input
        className={styles.name}
        type="text"
        name="name"
        placeholder="First and Last"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Phone number:</label>
      <input
        className={styles.phone}
        type="tel"
        name="phone"
        value={phone}
        placeholder="(123)-456-7890"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label>Appointment Date:</label>
      <input
        className={styles.datepicker}
        type="date"
        id="start"
        name="appointment -start"
        value={datepicker}
        onChange={(e) => setDatepicker(e.target.value)}
        required
      />
      <label>Start time:</label>
      <input
        className={styles.starttime}
        type="time"
        id="start time"
        name="starttime"
        value={starttime}
        onChange={(e) => setStarttime(e.target.value)}
        required
      />
      <label>End time:</label>
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
