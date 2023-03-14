import { createEvent } from 'ics';

export const downloadICal = (record) => {
  const { memberName, type, startDate, endDate, memberNote } = record;

  const [startYear, startMonth, startDay] = startDate.split('-');
  const [endYear, endMonth, endDay] = endDate.split('-');

  createEvent(
    {
      title: `${memberName} - ${type}`,
      description: memberNote,
      busyStatus: 'OOF',
      start: [Number(startYear), Number(startMonth), Number(startDay)],
      end: [Number(endYear), Number(endMonth), Number(endDay) + 1]
    },
    (error, value) => {
      if (error) {
        console.log(error);
      }

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = 'data:text/calendar;charset=utf8,' + encodeURIComponent(value);
      // the filename you want
      a.download = `${memberName}_${type}_${startDate}_${endDate}.ics`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  );
};
