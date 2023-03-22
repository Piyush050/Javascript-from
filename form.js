function submitform() {
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  const malecheckbox = document.getElementById("male");
  const femalecheckbox = document.getElementById("female");
  if (malecheckbox.checked) {
    var gender = malecheckbox.value;
    console.log("male");
  }
  else if (femalecheckbox.checked) {
    var gender = femalecheckbox.value;
    console.log("female");
  }

  const pizzaCheckbox = document.getElementById("pizza");
  const hamburgerCheckbox = document.getElementById("hamburger");
  const pizzaChecked = pizzaCheckbox.checked;
  const hamburgerChecked = hamburgerCheckbox.checked;

  if (pizzaChecked) {
    var food = pizzaCheckbox.value;
  }
  if (hamburgerChecked) {
    var food = hamburgerCheckbox.value;
  }
  var anything = document.getElementById("textarea").value
  var table = document.getElementById("inputTable")
  var row = table.insertRow();
  var nameCell = row.insertCell(0);
  var dobCell = row.insertCell(1);
  var genderCell = row.insertCell(2);
  var favfoodCell = row.insertCell(3);
  var anythingelseCell = row.insertCell(4);
  var actionsCell = row.insertCell(5);
  nameCell.innerHTML = name;
  dobCell.innerHTML = dob;
  genderCell.innerHTML = gender;
  favfoodCell.innerHTML = food;
  anythingelseCell.innerHTML = anything;
  actionsCell.innerHTML = '<button class="edit" onclick="editInput(this)">Edit</button><button class="delete" onclick="deleteInput(this)">Delete</button>';
  clearForm();
}

function editInput(button) {
  var row = button.parentNode.parentNode;
  var name = row.cells[0].innerHTML;
  var dob = row.cells[1].innerHTML;
  var gender = row.cells[2].innerHTML;
  var food = row.cells[3].innerHTML;
  var anything = row.cells[4].innerHTML;
  document.getElementById("name").value = name;
  document.getElementById("dob").value = dob;
  document.querySelector('input[name="gender"][value="' + gender + '"]').checked = true;
  document.getElementById("pizza").checked = food.includes("Pizza");
  document.getElementById("hamburger").checked = food.includes("Hamburger");
  document.getElementById("textarea").value = anything;
  row.parentNode.removeChild(row);
}
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("pizza").checked = false;
  document.getElementById("hamburger").checked = false;
  document.getElementById("textarea").value = "";
}

function deleteInput(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
document.getElementById("btn").addEventListener("click", showTable);
function showTable() {
  document.getElementById("inputTable").style.display = "block";
}