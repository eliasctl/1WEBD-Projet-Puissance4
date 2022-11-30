let tabJeux = [];
let joueur = 1;

row = prompt("combien de colones ?");
ligne = row++;

let table = document.createElement("table");
for (let i = 0; i < row; i++) {
  tabJeux.push([]);
  let tr = table.appendChild(document.createElement("tr"));
  for (let j = 0; j < ligne; j++) {
    tabJeux[i].push(0);
    let td = tr.appendChild(document.createElement("td"));
  }
}
document.body.appendChild(table);

// rendre les colloones cliquable en renvoyant leur id du tabJeux
let td = document.getElementsByTagName("td");
for (let i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function () {
    let id = this.id;
    let idSplit = id.split("-");
    let idRow = idSplit[0];
    let idCol = idSplit[1];
    console.log(idRow, idCol);
    if (joueur === 1) {
      this.style.backgroundColor = "red";
      joueur = 2;
    } else {
      this.style.backgroundColor = "blue";
      joueur = 1;
    }
  });
}
// Ne pas prendre en compte

console.log(tabJeux);
console.log(tabJeux.length);
for (let i = 0; i < tabJeux.length; i++) {
  tabJeux[i][0] = 1;
  console.log(tabJeux[i]);
}
