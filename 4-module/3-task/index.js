function highlight(table) {
  const tableRows = Array.from(table.rows).slice(1);
  tableRows.forEach((row) => {
    const [name, age, gender, status] = Array.from(row.cells);
    if (status.hasAttribute("data-available")) {
      if (status.getAttribute("data-available") === "true") {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute("hidden", "hidden");
    }

    if (gender.textContent === "m") {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    if (+age.textContent < 18) {
      row.style.textDecoration = "line-through";
    }
  });
}
