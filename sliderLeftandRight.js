// Когда DOM полностью загружен
document.addEventListener('DOMContentLoaded', function () {
    // Находим все слайдеры на странице
    const sliders = document.querySelectorAll('.main.slider');

    // Для каждого слайдера выполняем следующие действия
    sliders.forEach((slider) => {
        // Находим все слайды и элементы списка слайдера
        const slides = slider.querySelectorAll('.rightpart .slideR');
        const textItems = slider.querySelectorAll('.leftpart .list li');
        const paragraphs = slider.querySelectorAll('.leftpart .bottompart p');

        // Индекс текущего активного слайда
        let currentIndex = 0;
        // Идентификатор интервала для автоматического переключения слайдов
        let intervalId;

        // Добавляем обработчики событий для элементов списка слайдера
        textItems.forEach((textItem, index) => {
            textItem.addEventListener('click', function () {
                // При клике на элемент списка очищаем интервал и показываем выбранный слайд
                clearInterval(intervalId);
                currentIndex = index;
                showSlide();
                // Запускаем интервал для автоматического переключения слайдов
                startInterval();
            });
        });

        // Функция для отображения текущего активного слайда
        function showSlide() {
            // Скрываем все слайды, элементы списка и параграфы
            slides.forEach(slide => slide.classList.remove('active'));
            textItems.forEach(textItem => textItem.classList.remove('active'));
            paragraphs.forEach(paragraph => paragraph.style.display = 'none');

            // Отображаем текущий активный слайд, элемент списка и параграф
            slides[currentIndex].classList.add('active');
            textItems[currentIndex].classList.add('active');
            paragraphs[currentIndex].style.display = 'block';
        }

        // Функция для автоматического переключения слайдов
        function startInterval() {
            intervalId = setInterval(() => {
                // Переключаемся на следующий слайд и отображаем его
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide();
            }, 4000);
        }

        // Первоначальный запуск слайдера
        showSlide();

        // Устанавливаем таймер для переключения слайдов каждые 4000 миллисекунд (4 секунды)
        startInterval();
    });
});
