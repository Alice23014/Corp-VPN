const cloudElement = document.querySelector("._cloud");
const cubeElement = document.querySelector("._cube");
const squareElement = document.querySelector("._square");
let animationNamesCloud =
  getComputedStyle(cloudElement).animationName.split(",");
let totalAnimationsCloud = animationNamesCloud.length;
let animationNamesCube = getComputedStyle(cubeElement).animationName.split(",");
let totalAnimationsCube = animationNamesCube.length;
let animationNamesSquare =
  getComputedStyle(squareElement).animationName.split(",");
let totalAnimationsSquare = animationNamesSquare.length;
let animationCountCloud = 0;
let intervalIdCloud;
let animationCountCube = 0;
let intervalIdCube;
let animationCountSquare = 0;
let intervalIdSquare;

// Получаем количество анимаций

cloudElement.addEventListener("animationend", function () {
  animationCountCloud++;

  // Проверяем, все ли анимации уже прошли
  if (animationCountCloud < totalAnimationsCloud) {
    // Добавляем класс для запуска следующей анимации через секунду
    intervalIdCloud = setInterval(function () {
      cloudElement.classList.add("animate-cloud");
    }, 1000);
  } else {
    cloudElement.classList.remove("animate-cloud");

    // Останавливаем повторение запуска анимации через секунду
    clearInterval(intervalIdCloud);

    // Добавляем класс для запуска следующей анимации через секунду после удаления
    setTimeout(function () {
      cloudElement.classList.add("animate-cloud");
      animationCountCloud = 0;
    }, 1000);
  }
});

cubeElement.addEventListener("animationend", function () {
  animationCountCube++;

  // Проверяем, все ли анимации уже прошли
  if (animationCountCube < totalAnimationsCube) {
    // Добавляем класс для запуска следующей анимации через секунду
    intervalId = setInterval(function () {
      cubeElement.classList.add("animate-cube");
    }, 1000);
  } else {
    cubeElement.classList.remove("animate-cube");

    // Останавливаем повторение запуска анимации через секунду
    clearInterval(intervalIdCube);

    // Добавляем класс для запуска следующей анимации через секунду после удаления
    setTimeout(function () {
      cubeElement.classList.add("animate-cube");
      animationCountCube = 0;
    }, 1000);
  }
});

squareElement.addEventListener("animationend", function () {
  animationCountSquare++;

  // Проверяем, все ли анимации уже прошли
  if (animationCountSquare < totalAnimationsSquare) {
    // Добавляем класс для запуска следующей анимации через секунду
    intervalIdSquare = setInterval(function () {
      squareElement.classList.add("animate-square");
    }, 1000);
  } else {
    squareElement.classList.remove("animate-square");

    // Останавливаем повторение запуска анимации через секунду
    clearInterval(intervalIdSquare);

    // Добавляем класс для запуска следующей анимации через секунду после удаления
    setTimeout(function () {
      squareElement.classList.add("animate-square");
      animationCountSquare = 0;
    }, 1000);
  }
});
