const firstName = document.querySelector("#Fname");
const lastName = document.querySelector("#Lname");
const profileFname = document.querySelector("#profileFname");
const profileLname = document.querySelector("#profileLname");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const profileEmail = document.querySelector("#email-address");
const course = document.querySelector("#course");
const dateOfBirth = document.querySelector("#DOB");
const profileDateOfBirth = document.querySelector("#date-of-birth");
const submit = document.querySelector("#submit");
const mobile = document.querySelector("#mobile");
const phoneNumber = document.querySelector("#Pnumber");
const department = document.querySelector("#department");
const ProfileAddress = document.querySelector("#location");
const randomNumber = document.querySelector(".random-number");
const gender = document.querySelector("#sex");
const registrationForm = document.querySelector(".registration-container");
const completeRegistration = document.querySelector(".regComplete-container");
const continueButton = document.querySelector("#continue");
const profile = document.querySelector(".profile-container");
const userName = document.querySelector("#regNumber");
const loginID = document.querySelector("#I.D-number");
const loginPassword = document.querySelector("#password");

let registrationNumber = Math.floor (1000 + Math.random () * 9000);


// let theFirstName = '';
// let theLastName = '';
// let studentName = theFirstName + '  ' + theLastName;
// profileName.textContent = studentName;

firstName.addEventListener("change", function(){
    if (this.value == '') {
        profileFname.textContent = "";
    } else {
        profileFname.textContent = this.value;
    }
});

lastName.addEventListener("change", function(){
    if (this.value == '') {
        profileLname.textContent = "";
    } else {
        profileLname.textContent = this.value;
    }
});

mobile.addEventListener("change", function(){
    if (this.value == '') {
        phoneNumber.textContent = "";
    } else {
        phoneNumber.textContent = this.value;
    }
});

course.addEventListener("change", function(){
    if (this.value == '') {
        department.textContent = "";
    } else {
        department.textContent = this.value;
    }
});

address.addEventListener("change", function(){
    if (this.value == '') {
        ProfileAddress.textContent = "";
    } else {
        ProfileAddress.textContent = this.value;
    }
});

dateOfBirth.addEventListener("change", function(){
    if (this.value == '') {
        profileDateOfBirth.textContent = "";
    } else {
        profileDateOfBirth.textContent = this.value;
    }
});

email.addEventListener("change", function(){
    if (this.value == '') {
        profileEmail.textContent = "";
    } else {
        profileEmail.textContent = this.value;
    }
});


submit.addEventListener("click", function(){
    if (address.value !== '' && course.value !== '' && mobile.value !== '' && lastName.value !== '' && firstName.value !== '' && dateOfBirth.value !== '' && gender.value !== '') {
        randomNumber.textContent = registrationNumber;
        completeRegistration.style.display = "flex";
        registrationForm.style.display = "none";
    } else {
        alert('Please fill in all blank inputs')
    }
});

continueButton.addEventListener("click", function(){
    completeRegistration.style.display= "none";
    profile.style.display = "flex";
});






//profileFname userName