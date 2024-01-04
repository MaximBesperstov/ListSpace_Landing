document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navlist');
    const scrollThreshold = 300; // Замените это значение на нужное количество пикселей

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > scrollThreshold) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
});
