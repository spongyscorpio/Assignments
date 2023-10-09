
document.getElementById("survey-form").addEventListener("submit", function (e) {
    e.preventDefault();
    displayPopup();
});

const divform_data = document.querySelector('.form-data');
const popup = document.querySelector(".popup");
const close_btn = document.getElementById("close");
const formid = document.getElementById("survey-form");

function displayPopup() {
    const formData = {
        'First Name': document.querySelector("#first_name").value,
        'Last Name': document.querySelector("#last_name").value,
        'Date of Birth': document.querySelector("#date").value,
        'Country': document.querySelector("#country").value,
        'Gender': genderValues(),
        'Profession': document.querySelector("#profession").value,
        'Email': document.querySelector("#email").value,
        'Mobile Number': document.querySelector("#phnumber").value,
    };
    divform_data.innerHtml = "";
    console.log("lolswager");

    document.querySelector('#close').addEventListener("click", ()=>{
        popup.style.display = "none";
        formid.reset();
    })

    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            const value = formData[key];
            const row = document.createElement("div");
            row.innerHTML = `<b>${key}</b> ${value}`;
            divform_data.appendChild(row);
        }
    }

    popup.style.display = "block";

}

function genderValues() {
    const genders = [];

    if (document.getElementById("male").checked){
        genders.push("Male");
    }
    if (document.getElementById("female").checked) {
        genders.push("Female");
    }
    if (document.querySelector("#others").checked) {
        genders.push("Other");
    }

    return genders.join(", ");
}