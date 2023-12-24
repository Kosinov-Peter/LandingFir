document.getElementById("addImageBtn").addEventListener("click", addImage);

// Создание глобальной переменной g
var g = [];
var Pr = 1;
var Sch = 0; // Счетчик для конца добавления шаров, когда уже вероятно нет мест

function addImage() {
    var container = document.getElementById("container");
    var image = document.createElement("img");

    // Выбор рандомного изображения
    var i = getRandomNumber(0,3);
    if (i == 0) {
        image.src = "img/Ball_1.png";
    } else if (i == 1) {
        image.src = "img/Ball_2.png";
    } else if (i == 2) {
        image.src = "img/Ball_3.png";
    }
  

    var imageWidth = 100;  // Ширина изображения
    var imageHeight = 100;  // Высота изображения
    Pr = 1;

    // Генерация случайной позиции в пределах контейнера
    var xPos = Math.floor(Math.random() * (container.offsetWidth - imageWidth));
    var yPos = Math.floor(Math.random() * (container.offsetHeight - imageHeight));

    // Проверка, что картинки не будут накладваться
    while (Pr == 1) {
      for (var i = 0; i < g.length; i++) {
        if ( (Math.abs(xPos-g[i][0]) < 100) && (Math.abs(yPos-g[i][1]) < 100) ) {
          Pr++;
        } 
      }
      if (Pr > 1) {  // Если нашлись вблизи игрушки
        xPos = Math.floor(Math.random() * (container.offsetWidth - imageWidth));
        yPos = Math.floor(Math.random() * (container.offsetHeight - imageHeight));
        Pr = 1;
        Sch++;
      } else if (Pr == 1) { // Если не нашлось вблизи игрушек
        Pr = 0;
        Sch = 0;
      }
      //  Если уже слишком долго ищем, значит вероятно место уже закончилось
      if (Sch == 300) {
        Pr = 0;
        window.alert("Мест нет");
      }
    }
         
    image.style.left = xPos + "px";
    image.style.top = yPos + "px";
    image.style.width = imageWidth + "px";
    image.style.height = imageHeight + "px";
    image.classList.add("image");

    var randomNum1 = xPos;
    var randomNum2 = yPos;
    g.push([randomNum1, randomNum2]);
    console.log(g); // Для проверки результата в консоли
    container.appendChild(image);
}


function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}