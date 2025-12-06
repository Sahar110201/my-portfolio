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
