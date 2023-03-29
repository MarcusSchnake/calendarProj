import React from "react";
import { Calendar, dayjsLocalizer,TimeGrid, TimeGridProps } from "react-big-calendar";
import dayjs from "dayjs";



const localizer = dayjsLocalizer(dayjs);


export const MyCalendar = () => (
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
          timeslots:(8)
        },
      ]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
