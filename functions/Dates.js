function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date1 - date2);
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

function getDifferenceInHours(date1, date2) {
  const diffInMs = Math.abs(date1 - date2);
  return Math.floor(diffInMs / (1000 * 60 * 60));
}

function getDifferenceInMinutes(date1, date2) {
  const diffInMs = Math.abs(date1 - date2);
  return Math.floor(diffInMs / (1000 * 60));
}

function getDifferenceInSeconds(date1, date2) {
  const diffInMs = Math.abs(date1 - date2);
  return Math.floor(diffInMs / 1000);
}

module.exports.getDifferenceInDays = getDifferenceInDays;
module.exports.getDifferenceInHours = getDifferenceInHours;
module.exports.getDifferenceInMinutes = getDifferenceInMinutes;
module.exports.getDifferenceInSeconds = getDifferenceInSeconds;
