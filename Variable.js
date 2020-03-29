let barriers = new Barriers();
let barriersImg = new Image();
let arr = [];
arr.push({...barriers});

let decorate = new Decorate();
let decorateImg = new Image();
let arr1 = [];
arr1.push({...decorate});

let monkey = new objMonkey();
let monkeyImg = new Image();
let monkeyStyle = 0;
let monkeyTop = 3

let y = 380;
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let timer = '';

let duong = new Image();
duong.src = './img/duong.jpg';
let loop = 0

let x = 500
let point = 0

// loadImg()
document.addEventListener('keyup', function (event) {
    if (event.keyCode === 32 && monkey.status !== 'down ') {
        monkey.setStatus(2)
    }
})
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 32 && monkey.status === 'run') {
        monkey.setStatus(1)
    }
})
Start(160);