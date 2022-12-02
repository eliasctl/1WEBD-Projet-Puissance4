// Projet puissance 4

// pour le timer
const minutes = document.querySelector("#minutes");
const seconde = document.querySelector("#secondes");

// variables
let tabJeux = [];
let joueur = Math.round(Math.random());
let ligne = 0;
let row = 0;

while (ligne < 5 || ligne > 15) {
  ligne = prompt("combien de lignes ?");
}
while (row < 5 || row > 15) {
  row = prompt("combien de colones ?");
}


// On demande le nom des joueurs (cas où on aurait eu l'api pour ensuite les mettres dans le tableau des victoires)
let joueur1 = prompt("quelle st le nom du joueur 1 ?");
let joueur2 = prompt("quelle st le nom du joueur 2 ?");

localStorage.setItem("joueur 1", joueur1);
localStorage.setItem("joueur 2", joueur2);

// on demare le timer
startTimer();

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
    if (weHaveAWinner() === true) {
      alert("vous avez gagné !!");
      localStorage.setItem("winner", joueur);
    }
  });
}

function startTimer() {
  let sec = 0;
  let min = 0;
  setInterval(function temps() {
    seconde.textContent = String(min++).padStart(2, "0");
    minutes.textContent = String(sec).padStart(2, "0");
    if (min > 60) {
      min++;
      sec = 0;
    }
  }, 1000);
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

// fonction qui verifie si il y a un gagniant
function weHaveAWinner() {
  // vérifier verticalement
  for (let i = 0; i < tabJeux.length - 3; i++) {
    for (let j = 0; j < tabJeux[i].length; j++) {
      if (
        tabJeux[i][j] !== 0 &&
        tabJeux[i][j] === tabJeux[i + 1][j] &&
        tabJeux[i][j] === tabJeux[i + 2][j] &&
        tabJeux[i][j] === tabJeux[i + 3][j]
      ) {
        return true;
      }
    }
  }

  // vérifier horizontale
  for (let i = 0; i < tabJeux.length - 3; i++) {
    for (let j = 0; j < tabJeux[i].length; j++) {
      if (
        tabJeux[i][j] !== 0 &&
        tabJeux[i][j] === tabJeux[i][j + 1] &&
        tabJeux[i][j] === tabJeux[i][j + 2] &&
        tabJeux[i][j] === tabJeux[i][j + 3]
      ) {
        return true;
      }
    }
  }

  // vérifier en diagonale BG - HD
  for (let i = 0; i < tabJeux.length - 3; i++) {
    for (let j = 0; j < tabJeux[i].length - 3; j++) {
      if (
        tabJeux[i][j] !== 0 && i+3<= ligne && j+3 <=row &&
        tabJeux[i][j] === tabJeux[i + 1][j + 1] &&
        tabJeux[i][j] === tabJeux[i + 2][j + 2] &&
        tabJeux[i][j] === tabJeux[i + 3][j + 3]
      ) {
        return true;
      }
    }
  }

  // vérifier en diagonale BD - HG
  for (let i = 0; i < tabJeux.length - 3; i++) {
    for (let j = 0; j < tabJeux[i].length - 3; j++) {
      if (
        tabJeux[i][j] !== 0 && i-3>=0 && j+3 <=row &&
        tabJeux[i][j] === tabJeux[i - 1][j + 1] &&
        tabJeux[i][j] === tabJeux[i - 2][j + 2] &&
        tabJeux[i][j] === tabJeux[i - 3][j + 3]
      ) {
        return true;
      }
    }
  }

  return false;
}
