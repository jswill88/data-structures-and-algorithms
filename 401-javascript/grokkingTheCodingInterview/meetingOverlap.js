class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const min_meeting_rooms = function (meetings) {
  meetings.sort((a, b) => a.start - b.start);
  let latestTimes = [];
  for (let meeting of meetings) {
    let added = false;
    for (let i = 0; i < latestTimes.length; i++) {
      if (meeting.start >= latestTimes[i]) {
        latestTimes[i] = meeting.end;
        added = true;
        break;
      }
    }
    if (!added) {
      latestTimes.push(meeting.end);
    }
  }
  return latestTimes.length;
};


console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);


