
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let isbn = document.getElementById("isbn");
    let btn = document.getElementById("submit");
    let table = document.getElementById("table").getElementsByTagName('tbody')[0];
table.style.backgroundColor="gray";
    btn.addEventListener("click", add);

    function add(e) {
      e.preventDefault();

      let row = table.insertRow();
      row.insertCell(0).textContent = title.value;
      row.insertCell(1).textContent = author.value;
      row.insertCell(2).textContent = isbn.value;

      // clear inputs
      title.value = "";
      author.value = "";
      isbn.value = "";
				let deleteCell = row.insertCell(3);
let btn = document.createElement("button");
btn.textContent = "x";
		btn.style.backgroundColor = "red"; 
btn.addEventListener("click", () => row.remove());
deleteCell.appendChild(btn);

    }