let btn = document.querySelector('#btn_sidebar');
let sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});