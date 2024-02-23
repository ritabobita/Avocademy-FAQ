const buttons = document.querySelectorAll('.card button');

buttons.forEach(button => {
    button.addEventListener('click', expand);
});

function expand(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const content = card.querySelector('.content');

    if (content) {
        button.classList.toggle('active');
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }
}