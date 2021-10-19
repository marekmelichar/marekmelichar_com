function y2k(number) { return (number < 1000) ? number + 1900 : number; }

function getWeek(year,month,day) {
  var when = new Date(year,month,day);
  var newYear = new Date(year,0,1);
  var modDay = newYear.getDay();
  if (modDay == 0) modDay=6; else modDay--;

  var daynum = ((Date.UTC(y2k(year),when.getMonth(),when.getDate(),0,0,0) - Date.UTC(y2k(year),0,1,0,0,0)) /1000/60/60/24) + 1;

  if (modDay < 4 ) {
    var weeknum = Math.floor((daynum+modDay-1)/7)+1;
  } else {
    var weeknum = Math.floor((daynum+modDay-1)/7);
    if (weeknum == 0) {
      year--;
      var prevNewYear = new Date(year,0,1);
      var prevmodDay = prevNewYear.getDay();
      if (prevmodDay == 0) prevmodDay = 6; else prevmodDay--;
      if (prevmodDay < 4) weeknum = 53; else weeknum = 52;
    }
  }

  return + weeknum;
}

var now = new Date();
document.write('Week number = ' +
getWeek(y2k(now.getYear()),now.getMonth(),now.getDate()));