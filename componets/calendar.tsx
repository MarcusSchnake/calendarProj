import React from "react";
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)

export const MyCalendar = () => (
  <div className="calendar">
    <Calendar
      localizer={localizer}
      events={[{
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2023, 2, 12),
        end: new Date(2023, 3, 13),
        
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2023, 3, 7),
        end: new Date(2023, 3, 10),
      },
    
      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2023, 2, 13, 0, 0, 0),
        end: new Date(2023, 2, 20, 0, 0, 0),
      },]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
