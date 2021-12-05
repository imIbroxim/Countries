const elDarkMode = document.querySelector('.dark-mode');
const elBtnMode = document.querySelector('.btn-mode');

elBtnMode.addEventListener('click', function() {
    document.querySelector('body').classList.add('dark-mode');
}
);
elBtnMode.addEventListener('dblclick', function() {
    document.querySelector('body').classList.remove('dark-mode');
}
)
