// row = prompt("combien de colones ?");
// ligne = prompt("combien de lignes ?");
joueur1 = prompt("nom du joueur 1");
joueur2 = prompt("nom du joueur 2");

row = 5;
ligne = 5;

let table = document.createElement("table");
for (let i = 0; i < row; i++) {
  let tr = table.appendChild(document.createElement("tr"));
  console.log("on cree un tr");
  for (let j = 0; j < ligne; j++) {
    let td = tr.appendChild(document.createElement("td"));
    console.log("on cree un td");
  }
}
document.td.innerHTML = "fleur";

// Etape 1
// On crée l'élément HTML vide de contenu
// En fait on crée ça <h1></h1>
var els = document.createElement("h1");

// Etape 2
// Ici on crée un contenu
var contenu = document.createTextNode("Bonjour à tous");

// Etape 3
// le contenu et l'élément ne se connaissent pas
// Il faut ajouter le contenu en tant qu'enfant de l'élément
els.appendChild(contenu);

// Etape 4
// Maintenant il faut acrocher la branche dans l'arbre
// On accède au nœud body avec document.body
document.body.appendChild(els);
