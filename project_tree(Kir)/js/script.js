document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('submit');

    // Проверка, существует ли элемент с id 'submit'
    if (button) {
        // Добавляем обработчик события click
        button.addEventListener('click', function() {
            // Создаем новый элемент img
            var newImg = document.createElement('img');

            // Присваиваем id и src новому изображению
            newImg.id = 'down_img';
            newImg.src = 'img/Down_tree(3).png';

            // Применяем глобальные переменные CSS к новому изображению
            newImg.style.zIndex = getComputedStyle(document.documentElement).getPropertyValue('--down-img-z-index');
            newImg.style.display = getComputedStyle(document.documentElement).getPropertyValue('--down-img-display');
            newImg.style.position = getComputedStyle(document.documentElement).getPropertyValue('--down-img-position');
            newImg.style.height = getComputedStyle(document.documentElement).getPropertyValue('--down-img-height');
            newImg.style.top = getComputedStyle(document.documentElement).getPropertyValue('--down-img-top');
            newImg.style.left = getComputedStyle(document.documentElement).getPropertyValue('--down-img-left');
            newImg.style.transform = getComputedStyle(document.documentElement).getPropertyValue('--down-img-transform');

            // Обновляем значения переменных для следующего клика
            updateGlobalVariables();

            // Добавляем новый элемент после кнопки
            button.parentNode.insertBefore(newImg, button.nextSibling);
        });
    } else {
        console.error("Элемент с id 'submit' не найден");
    }

    // Функция для обновления значений переменных
    function updateGlobalVariables() {
        // Изменяем значения переменных для следующего клика
        document.documentElement.style.setProperty('--down-img-z-index', parseInt(getComputedStyle(document.documentElement).getPropertyValue('--down-img-z-index')) -1);
        document.documentElement.style.setProperty('--down-img-height', `calc(${getComputedStyle(document.documentElement).getPropertyValue('--down-img-height')} + 3%)`);
        document.documentElement.style.setProperty('--down-img-top', `calc(${getComputedStyle(document.documentElement).getPropertyValue('--down-img-top')} + 21%)`);
        
        
        
        
        
        
        // Добавьте другие переменные, которые нужно обновить или добавить
    }
});
