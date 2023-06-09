import "./styles.css";

const form = document.getElementById("form1");
const table = document.getElementById("table1");
const submitButton = document.getElementById("submit-data");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const username = document.getElementById("input-username").value;

  const newRow = table.insertRow();
  const user = newRow.insertCell();
  user.innerText = username;
  const email = newRow.insertCell();
  const userEmail = document.getElementById("input-email").value;
  email.innerText = userEmail;
  const address = newRow.insertCell();
  const userAddress = document.getElementById("input-address").value;
  address.innerText = userAddress;
  const checkbox = document.getElementById("input-admin");
  const admin = newRow.insertCell();
  if (checkbox.checked) {
    admin.innerText = "X";
  } else {
    admin.innerText = "-";
  }
});

const emptyTable = document.getElementById("empty-table");

emptyTable.addEventListener("click", function () {
  table.innerText = "";
});
