var container = document.getElementById("dvd-container");
var logo = document.getElementById("dvd-logo");
var containerWidth = container.offsetWidth;
var containerHeight = container.offsetHeight;
var logoWidth = logo.offsetWidth;
var logoHeight = logo.offsetHeight;
var x = 0;
var y = 0;
var dx = 2; // Горизонтальная скорость
var dy = 2; // Вертикальная скорость
var collisionCounter = 0;
var collisionCounterElement = document.getElementById("collision-counter");

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animateDVD() {
    x += dx;
    y += dy;

    if (x + logoWidth >= containerWidth || x <= 0) {
        dx = -dx; // Меняем направление по горизонтали при столкновении с границей
        var logoColor = getRandomColor(); // Генерируем случайный цвет для логотипа
        logo.style.backgroundColor = logoColor; // Изменяем цвет логотипа
        collisionCounterElement.style.color = logoColor; // Изменяем цвет счетчика
        if ((x <= 0 && y <= 0) || (x + logoWidth >= containerWidth && y + logoHeight >= containerHeight)) {
            collisionCounter++; // Увеличиваем счетчик столкновений с углом
            collisionCounterElement.textContent = "Collisions with walls: " + collisionCounter;
        }
    }

    if (y + logoHeight >= containerHeight || y <= 0) {
        dy = -dy; // Меняем направление по вертикали при столкновении с границей
        var logoColor = getRandomColor(); // Генерируем случайный цвет для логотипа
        logo.style.backgroundColor = logoColor; // Изменяем цвет логотипа
        collisionCounterElement.style.color = logoColor; // Изменяем цвет счетчика
        if ((x <= 0 && y <= 0) || (x + logoWidth >= containerWidth && y + logoHeight >= containerHeight)) {
            collisionCounter++; // Увеличиваем счетчик столкновений с углом
            collisionCounterElement.textContent = "Collisions with walls: " + collisionCounter;
        }
    }

    logo.style.left = x + "px";
    logo.style.top = y + "px";

    requestAnimationFrame(animateDVD);
}

animateDVD();
