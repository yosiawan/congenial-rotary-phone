export default function formatDob(dateToFormat: Date) {
  var mm = dateToFormat.getMonth() + 1; // getMonth() is zero-based
  var dd = dateToFormat.getDate();

  return [
    (dd > 9 ? "" : "0") + dd,
    (mm > 9 ? "" : "0") + mm,
    dateToFormat.getFullYear(),
  ].join("/");
}
