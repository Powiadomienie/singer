const todayHeader = document.getElementById("today");
const timeDiv = document.getElementById("time");
const days = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
];
const months = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

function setTime() {
  let today = new Date();
  todayHeader.innerText = `Dziś jest ${days[today.getDay()]}, ${
    months[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}.`;

  timeDiv.innerHTML = `${String(today.getHours()).padStart(
    2,
    "0"
  )}<br/>--<br/>${String(today.getMinutes()).padStart(2, "0")}`;
}
setTime();
setInterval(setTime, 1000);
