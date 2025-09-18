let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let btn = document.getElementById("submit");
let tableBody = document.getElementById("book-list");

btn.addEventListener("click", add);

function add(e) {
  e.preventDefault();

  let row = tableBody.insertRow();
  row.insertCell(0).textContent = title.value;
  row.insertCell(1).textContent = author.value;
  row.insertCell(2).textContent = isbn.value;

  // delete button
  let deleteCell = row.insertCell(3);
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete";
  delBtn.addEventListener("click", () => row.remove());
  deleteCell.appendChild(delBtn);

  // clear inputs
  title.value = "";
  author.value = "";
  isbn.value = "";
}
