document.addEventListener("DOMContentLoaded", (event) => {
  h = document.getElementById("titre");
  let sec = 0;
  setInterval(function () {
    h.innerHTML = sec++;
  }, 1000);
});

for (let i = 0; i < 10; i++) {
  console.log(Math.round(Math.random()));
}
