// Return today date.

// const today = () => {
//   const d = new Date();
//   return d;
// };
// console.log(today());

const today = () => {
  const d = new Date ();
  return d;
};
const getDay = () => {
  const now = new Date().getDay();
  const day = ["sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
  return day [now];
};
module.exports = {getDay, today};