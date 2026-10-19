
/* Select the form, table body and student counter */

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
const studentCount = document.getElementById("studentCount");

/* Keep track of how many students have been registered */

let totalStudents = 0;

/* Run this function whenever the form is submitted */

studentForm.addEventListener("submit", function (event) {

    // Prevent the browser from refreshing the page
    event.preventDefault();


    // Stop if any required field is invalid

    if (!studentForm.checkValidity()) {
        studentForm.reportValidity();
        return;
    }

    // Read the values entered in the form

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    // Find the selected gender radio button

    const selectedGender = studentForm.querySelector(
        'input[name="gender"]:checked'
    );

    const gender = selectedGender ? selectedGender.value : "";
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value.trim();

    // Create a new table row
    
    const newRow = document.createElement("tr");

    // Store the submitted values in the same order as the tableheaders

    const studentDetails = [
        firstName,
        lastName,
        email,
        address,
        pincode,
        gender,
        state,
        country
    ];

    // Create one table cell for each student detail

    studentDetails.forEach(function (detail) {
        const cell = document.createElement("td");

        // Use textContent to display input safely as text

        cell.textContent = detail;

        // Add the cell to the new row

        newRow.appendChild(cell);
    });

    // Add the completed row to the table

    studentTableBody.appendChild(newRow);

    // Increase the student count and update the display

    totalStudents++;
    studentCount.textContent =
        totalStudents + (totalStudents === 1 ? " Student" : " Students");

    // Clear all fields after successful submission

    studentForm.reset();
});
