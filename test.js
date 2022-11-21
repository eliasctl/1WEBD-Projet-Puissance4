let etatJeux = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
let damier = [
  document.querySelectorAll("#row-1"),
  document.querySelectorAll("#row-2"),
  document.querySelectorAll("#row-3"),
  document.querySelectorAll("#row-4"),
  document.querySelectorAll("#row-5"),
  document.querySelectorAll("#row-6"),
  document.querySelectorAll("#row-7"),
];

// pour chaque ensemble de colones X du damier
damier.forEach((row) => {
  // pour chaque colone X des ensembles de colones
  row.forEach((element) => {
    // pour chaque cellule de la colone X
    element.addEventListener("click", (event) => {
      let line = event.target.parentElement.id;
      let row = element.id.split("-")[1] - 1;
      let pose = isNothingUnder(line, row);

      // debug
      console.log("ligne : " + line + " colonne : " + row);

      etatJeux[pose][row] = 1;
      syncroTab(element);
    });
  });
});

// fonction qui synchronise le tableau et le damier
function syncroTab(cell) {
  let row = cell.parentElement.id;
  let line = cell.id.split("-")[1] - 1;
  if (etatJeux[row][line] === 1) {
    cell.style.backgroundColor = "blue";
  } else {
    cell.style.backgroundColor = "black";
  }
}

// fonction qui renvoie l'indice de la première ligne en dessous ou il y a un pion
function isNothingUnder(row, line) {
  let i = 0;
  while (i < 6) {
    if (etatJeux[i][line] === 1) {
      console.log("isNothingUnder : " + i - 1);
      return i - 1;
    }
    i++;
  }
  console.log("isNothingUnder : " + i - 1);
  return i - 1;
}
