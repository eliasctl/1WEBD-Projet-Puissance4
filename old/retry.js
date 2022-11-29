function createBorar(row, column) {
  let table = document.createElement("table");
  for (let i = 0; i < row; i++) {
    let tr = table.appendChild(document.createElement("tr"));
    for (let j = 0; j < column; j++) {
      let td = tr.appendChild(document.createElement("td"));
    }
  }
  element.innerHTML = "";
  element.appendChild(table);
}
