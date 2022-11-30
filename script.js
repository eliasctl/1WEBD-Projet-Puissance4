let tabJeux = [];
let joueur = 1;

let ligne = prompt("combien de colones ?");
let row = ligne++;

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

let tr = document.getElementsByTagName("tr");
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener("click", function () {
    for (let j = 0; j < tabJeux[i].length; j++) {
      if (tabJeux[i][j] === 0) {
        tabJeux[i][j] = joueur;
        break;
      }
    }
    console.log(tabJeux);
  });
}
