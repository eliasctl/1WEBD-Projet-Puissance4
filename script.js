// variables
let tabJeux = [];
let joueur = 1;
let ligne = prompt("combien de colones ?");
let row = ligne++;

// création du tableau
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

// physique du jeux
let tr = document.getElementsByTagName("tr");
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener("click", function () {
    for (let j = 0; j < tabJeux[i].length; j++) {
      if (tabJeux[i][j] === 0) {
        tabJeux[i][j] = joueur;
        if (joueur === 1) {
          joueur = 2;
        } else {
          joueur = 1;
        }
        break;
      }
    }
    updateDom();
    console.log(tabJeux);
  });
}

// fonction qui met à jour le dom
function updateDom() {
  for (let i = 0; i < tr.length; i++) {
    for (let j = 0; j < tabJeux[i].length; j++) {
      if (tabJeux[i][j] === 1) {
        tr[i].children[j].style.backgroundColor = "red";
      } else if (tabJeux[i][j] === 2) {
        tr[i].children[j].style.backgroundColor = "yellow";
      }
    }
  }
}
