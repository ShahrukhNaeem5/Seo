document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});