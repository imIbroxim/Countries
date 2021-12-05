const elDarkMode = document.querySelector('.dark-mode');
const elBtnMode = document.querySelector('.btn-mode');

elBtnMode.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('dark-mode');
}
)
