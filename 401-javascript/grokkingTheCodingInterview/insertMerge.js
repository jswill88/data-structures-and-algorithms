module.exports = function (intervals, new_interval) {
  let merged = [];
  for (let i = 0; i < intervals.length; i++) {
    if (new_interval.end < intervals[i].start) {
      merged.push(new_interval);
      for (; i < intervals.length; i++) {
        merged.push(intervals[i])
      }
    }
    else if (new_interval.start > intervals[i].end) {
      merged.push(intervals[i])
      if (i === intervals.length - 1) {
        merged.push(new_interval)
      }
    }
    else {
      let min = Math.min(new_interval.start, intervals[i].start);
      let max = Math.max(new_interval.end, intervals[i].end);
      i++;
      while (i < intervals.length && intervals[i].start <= max) {
        max = Math.max(max, intervals[i].end);
        i++;
      }
      merged.push(new Interval(min, max));
      for (; i < intervals.length; i++) {
        merged.push(intervals[i])
      }
    }
  }
  return merged;
};
