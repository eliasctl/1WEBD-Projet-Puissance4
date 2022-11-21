// variables
let enter = false;
let rowCounter = 0;
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
    element.addEventListener("mouseover", () => {
      row.forEach((cell) => {
        // quand on passe la souris sur une cellule, on change la couleur
        //  de toutes les cellules de la ligne
        // si la cellule est rouge on la laisse rouge
        // sinon on la met en gris
        if (cell.style.backgroundColor === "blue") {
          cell.style.backgroundColor = "blue";
        } else {
          cell.style.backgroundColor = "grey";
        }
      });
    });
    element.addEventListener("mouseout", () => {
      row.forEach((cell) => {
        // quand on sort de la cellule
        // si la cellule est différente de gris on la met en rouge
        // sinon on la met en noir
        if (cell.style.backgroundColor !== "grey") {
          cell.style.backgroundColor = "blue";
        } else {
          cell.style.backgroundColor = "black";
        }
      });
    });
    element.addEventListener("click", () => {
      row.forEach((cell) => {
        // quand on clique sur une cellule on renvois la celllule la plus basse vide
        // si la cellule est rouge on la laisse rouge
        // sinon on la met en bleu
        if (cell.style.backgroundColor === "blue") {
          cell.style.backgroundColor = "blue";
        }
        if (cell.style.backgroundColor === "black") {
          cell.style.backgroundColor = "blue";
        }
      });
      console.log(etatJeux);
    });
  });
});
