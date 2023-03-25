import React from "react";

export const AppScheduler = (props: any) => {
  const AppointmentCreate = () => {
    console.log("bitch", props);
    return {
      id: 0,
      title: "My precious",
      allDay: false,
      start: new Date(),
      end: new Date(),
    };
  };
  return (
    <form className="scheduler">
      <input
        className="datepicker"
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
      />
      <input
        className="timepicker"
        type="time"
        id="appt"
        name="appt"
        required
      />
      <button className="pickersubmit" onClick={AppointmentCreate}>
        Schedule it
      </button>
    </form>
  );
};
