function calculateDaysBetweenDates ( begin ,  end )  {
  var one_day = 1000 * 60 * 60 * 24;
  var date1_ms = begin.getTime();
  var date2_ms = end.getTime();
  var difference_ms = date2_ms - date1_ms;
  return Math.round(difference_ms/one_day);
}
// Language: java (convertir fecha aaaammdd)
// Path: freelancer_fin\Untitled-1.js
function convertDateToString(date) { 
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  return '' + (d <= 9 ? '0' + d : d) + (m <= 9 ? '0' + m : m) + y;
}
// Language: java (convertir fecha ddmmmmyyyy)
// Path: freelancer_fin\Untitled-1.js
function convertDateToString2(date) { 
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  return '' + (d <= 9 ? '0' + d : d) + (m <= 9 ? '0' + m : m) + y;
}
 