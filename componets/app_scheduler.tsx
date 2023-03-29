import React from "react";
import { useState } from "react";

export const AppScheduler = (props: any) => {
    const [datepicker, setDatepicker] = useState('')
    const [starttime, settStarttime] = useState('')
    const [endtime, setEndtime] = useState('')
  const AppointmentCreate = (props:any) => {
    console.log("bitch", props);
    return {
      id: 0,
      title: "",
      allDay: false,
      start: new Date(""),
      end: new Date(""),
    };
  };
  return (
    <form className="scheduler">
      <input
        className="datepicker"
        type="date"
        id="start"
        name="appointment -start"
        value={datepicker}
        onChange={(e) => setDatepicker(e.target.value)}
        required
      />
      <input
        className="starttime"
        type="time"
        id="start time"
        name="appt"
        value={starttime}
        onChange={(e) => settStarttime(e.target.value)}
        required
      />
      <input
        className="timepicker"
        type="time"
        id="end time"
        name="end time"
        value={endtime}
        onChange={(e) => setEndtime(e.target.value)}
        required
      />
      <button 
      className="pickersubmit" 
      onClick={AppointmentCreate}>
        Schedule it
      </button>
      <p>{datepicker}</p>
      <p>{starttime}</p>
      <p>{endtime}</p>
    </form>
  );
};
