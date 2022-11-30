let tabJeux = [];

row = prompt("combien de colones ?");
ligne = prompt("combien de lignes ?");
// joueur1 = prompt("nom du joueur 1");
// joueur2 = prompt("nom du joueur 2");

let table = document.createElement("table");
for (let i = 0; i < row; i++) {
  let tr = table.appendChild(document.createElement("tr"));
  tabJeux.push([]);
  for (let j = 0; j < ligne; j++) {
    let td = tr.appendChild(document.createElement("td"));
  }
}
document.body.appendChild(table);
console.log(tabJeux);

function remplisLaListe(liste, joueur) {}
