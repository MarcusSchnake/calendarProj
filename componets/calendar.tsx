import React from "react";
import { useState } from "react";
import {  Calendar,dayjsLocalizer} from "react-big-calendar";
import dayjs from "dayjs";
import { AppScheduler } from "../componets/app_scheduler";

const localizer = dayjsLocalizer(dayjs);

export const MyCalendar = () => {
  const[date, setDate] = useState(new Date())
  const onChange = (date: React.SetStateAction<Date>) => {
    setDate(date);
  }
  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={[
          {
            id: 0,
            title: "All Day Event very long title",
            allDay: false,
            start: new Date(2023, 2, 12),
            end: new Date(2023, 2, 13),
            timeslots: 8,
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
