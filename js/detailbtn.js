const buttons = document.querySelectorAll('.detail-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const details = buttons[i].nextElementSibling;

        if (details.style.display === 'block') {
            details.style.display = 'none';
            buttons[i].textContent = 'Show Detail';
        } else {
            details.style.display = 'block';
            buttons[i].textContent = 'Hide Detail';
        }
    });
}