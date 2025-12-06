const buttons = document.querySelectorAll('.detail-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => { 
    const details = button.nextElementSibling;

    if (details.style.display === 'block') {
        details.style.display = 'none';
        button.textContent = 'Show Detail';
    } else {
        details.style.display = 'block';
        button.textContent = 'Hide Detail';
    }
});
});


function validateEmail(email) {
    const regex = /^[\w.-]+@[\w.-]+\.\w{2,4}$/;
    return regex.test(email);

}
//form validation
function formValidation() {
    const form = document.getElementById("contactForm"); 

    const name = document.getElementById("name");
    const emailAddress = document.getElementById("emailaddress");
    const message = document.getElementById("message");

    const errorName = document.getElementById("nameError");
    const errorEmail = document.getElementById("emailError")
    const errorMessage = document.getElementById("messageError");

form.addEventListener("submit", (event) => {
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent ="";

    if (name.value.trim() === "") {
        console.log(errorName);
        errorName.textContent = "Please enter your full name";
        event.preventDefault();
    }
    if (emailAddress.value.trim() === "") {
        errorEmail.textContent = "Please enter your email address";
        event.preventDefault();
    } else if (!validateEmail(emailAddress.value.trim())) {
        errorEmail.textContent = "Please enter a valid email address";
        event.preventDefault();
    }

    if (message.value.trim() === "") {
        errorMessage.textContent = "Please enter a message";
        event.preventDefault();
    }
});
}
formValidation();
