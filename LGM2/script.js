function handleSubmit() {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;

    const table = document.getElementById("table");
    const tbody = document.getElementById("tbody");

    const newRow = tbody.insertRow();
    const nameCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const genderCell = newRow.insertCell();

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    genderCell.innerHTML = gender;

    document.getElementById("reg-form").reset();
}