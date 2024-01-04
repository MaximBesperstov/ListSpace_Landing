

var number = document.querySelector('.mainnumber'),
    numberTop = number.getBoundingClientRect().top,
    start = 0, end = 124,
    animationStarted = false;

function onScroll() {
    var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Проверяем, что окно прокручено находится в пределах блока .mainnumber
    if (!animationStarted && windowScrollTop > numberTop - window.innerHeight / 2 &&
        windowScrollTop < numberTop + number.clientHeight - window.innerHeight / 2) {
        animationStarted = true;

        var interval = setInterval(function() {
            number.innerHTML = '₽' + ++start + 'М';
            if (start === end) {
                clearInterval(interval);
            }
        }, 50);
    }
}

window.addEventListener('scroll', onScroll);
