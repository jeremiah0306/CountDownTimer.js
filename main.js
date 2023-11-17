const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minuts = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function refresh() {
  const current = new Date().getFullYear();
  const year = new Date(`january 1 ${current + 1}`);
  const currenDate = new Date();
  const dateCount = year - currenDate;
  const day = Math.floor(dateCount / 1000 / 60 / 60 / 24);
  const hour = Math.floor((dateCount / 1000 / 60 / 60) % 24);
  const mint = Math.floor((dateCount / 1000 / 60) % 60);
  const second = Math.floor((dateCount / 1000) % 60);

  days.innerHTML = day < 10 ? "0" + day : day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minuts.innerHTML = mint < 10 ? "0" + mint : mint;
  seconds.innerHTML = second < 10 ? "0" + second : second;
}
const start = setInterval(refresh, 1000);
console.log(start);
