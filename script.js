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

//form validation
function formValidation() {
    const name = document.getElementById("name");
    const emailAddress = document.getElementById("emailaddress");
    const message = document.getElementById("message");

    
}