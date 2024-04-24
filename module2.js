




const today = () => {
    const d = new Date();
    return d;
  };
  
  const getDay = () => {
    const now = new Date().getDay();
    const day = ["sun", "mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return day[now];
  };
  
  module.exports = { getDay, today };