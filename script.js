row = prompt("combien de colones ?");
ligne = prompt("combien de lignes ?");

row = 5;
ligne = 5;

let table = document.createElement("table");
for (let i = 0; i < row; i++) {
  let tr = table.appendChild(document.createElement("tr"));
  console.log("on cree un tr");
  for (let j = 0; j < column; j++) {
    let td = tr.appendChild(document.createElement("td"));
    console.log("on cree un td");
  }
}
document.td.innerHTML = "fleur";
