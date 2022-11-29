// tableau qui contient les états du jeux | Ok
let etatJeux = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
// liste des cellules du damier | Ok
let damier = [
  document.querySelectorAll("#row-1"),
  document.querySelectorAll("#row-2"),
  document.querySelectorAll("#row-3"),
  document.querySelectorAll("#row-4"),
  document.querySelectorAll("#row-5"),
  document.querySelectorAll("#row-6"),
  document.querySelectorAll("#row-7"),
];

// fonction qui synchronise le tableau et le damier | Ok
function syncroTab(cell) {
  let row = cell.parentElement.id;
  let colone = cell.id.split("-")[1] - 1;
  if (etatJeux[row][colone] === 1) {
    cell.style.backgroundColor = "blue";
  } else {
    cell.style.backgroundColor = "black";
  }
}

// fonction qui renvoie l'indice de la première colone en dessous ou il y a un pion
function isNothingUnder(colone) {
  // on parcours le tableau de haut en bas
  for (let i = 0; i < 7; i++) {
    // quand on trouve une case pleine on renvoie l'indice de la case juste avant
    console.log(etatJeux[i][colone]);
    if (etatJeux[colone][i] === 1) {
      return i - 1;
    }
    return 0;
  }
}

// pour chaque ensemble de lignes du damier
damier.forEach((row) => {
  // pour chaque element dans la ligne
  row.forEach((element) => {
    // lorsqu'on clique sur une cellule
    element.addEventListener("click", (event) => {
      let colone = event.target.parentElement.id; // renvoie 0,..,5
      let row = element.id.split("-")[1] - 1; // renvoie 0,..,6
      let newColone = isNothingUnder(colone); // renvoie l'indice de la première colone en dessous ou il y a un pion
      etatJeux[colone][row] = 1; // modifie le tableau en fonction de la cellule cliquée
      syncroTab(element); // synchronise le tableau et le damier
    });
  });
});
