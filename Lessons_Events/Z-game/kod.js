//Глобальные переменные:
var FIELD_SIZE_X = 20;//строки
var FIELD_SIZE_y = 20;//столбцы
var SNAKE_SPEED = 300;//Интервал между переменными змейки
var snake = [];//Сама змейка
var direction = 'y+';//Направление движения змейки
var gameIsRunning = false;//Запущена ли игра
var snake_timer;//Таймер змейки
var food_timer;//Таймер для еды
var score = 0;//Результат


function init(){
	prepareGameField();//Генерация поля

	var wrap = document.getElementsByClassName('wrap')[0];

	wrap.style.width = '400px';
	//События кнопок Старт и Новая игра
	document.getElementById('snake-start').addEventListener('click',startGame);
	document.getElementById('snake-renew').addEventListener('click',refreshGame);
	//Отслеживание клавиш клавиатуры
	addEventListener('keydown',changeDirection);
}
/**
* Функция генераци игрового поля
*/
function prepareGameField() {
	//Создаем таблицу
	var game_table = document.createElement('table');
	game_table.setAttribute('class','game_table');

	//Генерация ячеек игровой таблицы
	for (var i = 0; i < FIELD_SIZE_X; i++) {
		//Создание строки
		var row = document.createElement('tr');
		row.className = 'game_table-row row-'+ i;

		for (var j = 0; j < FIELD_SIZE_Y; j++) {
            //Создание ячейки
            var cell = document.createElement('id');
            cell.className = 'game_table-cell*cell-' + i + '-' + j;

            row.appendChild(cell); // Добавление ячейки
			
		}
         game_table.appendChild(row);//Добавление строки
		
	}

	document.getElementById('snake-field').appendChild(game_table); //Добавление таблицы
}
/**
*/
function startGame() {
	gameIsRunning = true;
	respawn();//Создали змейку

	snake_timer = setInterval(move, SNAKE_SPEED);
	setTimeout(createFood,5000);

}
/**
* Функция расположения змейки на игровом поле
*/
function respawn() {
	//Змейка -массив td
	//Стартовая змейка = 2

	// Respawn змейки из центра 
	var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
	var start_coord_y = Math.floor(FIELD_SIZE_y / 2);

	//Голова змейки
	var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
	snake_head.setAttribute('class)',snake_head.getAttribute('class') + 'snake-unit');
	//Тело змейки
	var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1)+ '-' + start_coord_x)[0];
	snake_tail.setAttribute('class',snake_tail.getAttribute('class') + 'snake-unit');

	snake.push(snake_head);
	snake.push(snake_tail);

}


/**
* Движение змейки
*/
function move() {
	//console.log('move',direction);
	//Сборка классов
	var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');


	//Сдвиг головы
	var new_unit;
	var snake_coords = snake_head_classes[1].split('-');
	var coord_y = parseInt(snake_coords[1]);
	var start_coord_x = parseInt(snake_coords[2]);

	//Определяем новую точку
	if (direction == 'x-') {
		new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
	}
	else if  (direction == 'x+') {
		new_unit = document.getElementsByClassName('cell' + (coord_y) + '-' + (coord_x + 1))[0];

	}
	else if (direction == 'y' +) {
		new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-'(coord_x))[0];

	}
	else if (direction == 'y-') {
		new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
	}

//Проверки 
//1) new_unit не часть змейки
// 2) Зьейка не ушла за границу поля
// console.log(new_unit);
if (!isSnakeUnit(new_unit) && new_unit ! == undefined) {
	// 
}

}