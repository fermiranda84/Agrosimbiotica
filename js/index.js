let btn = document.querySelector('#btn-sidebar');
let sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});