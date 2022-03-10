let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
function criarBG() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
function criarSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
document.addEventListener('keydown', update);
function update(event) {
    if (event.keyCode == 37 && direction != "rigth") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";

}

function iniciarJogo() {

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Gamer Over!!!');
        }
    }

    criarBG();
    //criar background para o jogo
    criarSnake();
    //criar a snake dentro do background
    drawFood();
    //desenhar comida para snake

    let snakeX = snake[0].x;
    //criando as variaveis de posicao da snake
    let snakeY = snake[0].y;
    //criando as variaveis de posicao da snake

    if (direction == 'right') snakeX += box;
    //na condicao estou definindo que se a direçao for para direita, vai adicionar um quadrado a mais na variavel snakeX
    if (direction == 'left') snakeX -= box;
    //na condicao estou definindo que se a direçao for para esquerda, vai retirar um quadrado da variavel snakeX
    if (direction == 'up') snakeY -= box;
    //na condicao estou definindo que se a direçao for para cima, vai retirar um quadrado da  variavel snakeY
    if (direction == 'down') snakeY += box;
    //na condicao estou definindo que se a direçao for para baixo, vai adicionar um quadrado a mais na variavel snakeY

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100);
//passando intervalo de 100ms para o iniciar jogo



