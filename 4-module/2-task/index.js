function makeDiagonalRed(table) {
  const tableRows = Array.from(table.rows);

  tableRows.forEach((row, i) => {
    row.cells[i].style.backgroundColor = "red";
  })
}
