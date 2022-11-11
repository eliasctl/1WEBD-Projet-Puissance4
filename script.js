let damier = [
  document.querySelectorAll("#row-1"),
  document.querySelectorAll("#row-2"),
  document.querySelectorAll("#row-3"),
  document.querySelectorAll("#row-4"),
  document.querySelectorAll("#row-5"),
  document.querySelectorAll("#row-6"),
  document.querySelectorAll("#row-7"),
];

damier.forEach((row) => {
  row.forEach((element) => {
    element.addEventListener("mouseover", () => {
      row.forEach((cell) => {
        // quand on passe la souris sur une cellule, on change la couleur de toutes les cellules de la ligne
        // si la cellule est rouge on la laisse rouge
        // sinon on la met en gris
        if (cell.style.backgroundColor === "red") {
          cell.style.backgroundColor = "red";
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
          cell.style.backgroundColor = "red";
        } else {
          cell.style.backgroundColor = "black";
        }
      });
    });
    element.addEventListener("click", () => {
      row.forEach((cell) => {
        // quand on clique sur une cellule
        // on change la couleur de toutes les cellules de la ligne en rouge
        if (cell.style.backgroundColor === "red") {
          cell.style.backgroundColor = "grey";
        } else {
          cell.style.backgroundColor = "red";
        }
      });
    });
  });
});

console.log(damier);
