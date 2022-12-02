document.addEventListener("DOMContentLoaded", (event) => {
  h = document.getElementById("titre");
  let sec = 0;
  setInterval(function () {
    h.innerHTML = sec++;
  }, 1000);
});
