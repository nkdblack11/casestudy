let x = 0;
let y = 380;
let a = document.getElementById('myCanvas');
let ctx = a.getContext('2d');
let duong = new Image();
let khi = new Image();
let run = 0;
duong.src = './img/duong.jpg';
let i = 0
let width = 0;
let height = 0;
let khiY = 330;
function loadImg() {
    let speed = i * 2
    ctx.clearRect(0, 0, a.width, a.height)
    for (let j = 0; j < 70; j++) {
        ctx.drawImage(duong, (x + (j * 70)) - speed, y, duong.width / 6, duong.height / 6);
    }
    switch (run) {
        case 0:{
            khi.src = './img/khi01.jpg';
            width = 70;
            height = 72;
            khiY = 311;
            console.log('khi01')
            break;
        }
        case 15:{
            khi.src = './img/khi02.jpg';
            width = 70;
            height = 84;
            khiY = 299;
            console.log('khi02')
            break;
        }
        case 30:{
            khi.src = './img/khi03.jpg';
            width = 70;
            height = 98;
            khiY = 284;
            console.log('khi03')
            break;
        }

        case 45:{
            khi.src = './img/khi04.jpg';
            width = 70;
            height = 104;
            khiY = 278;
            console.log('khi04')
            break;
        }

        case 60:{
            khi.src = './img/khi05.jpg';
            width = 70;
            height = 78;
            khiY = 305;
            console.log('khi05')
            break;
        }

        case 85:{
            khi.src = './img/khi1.jpg';
            width = 70;
            height = 72;
            khiY = 311;
            console.log('khi1')
            break;
        }
        case 100:{
            khi.src = './img/khi2.jpg';
            width = 70;
            height = 84;
            khiY = 299;
            console.log('khi2')
            break;
        }
        case 115:{
            khi.src = './img/khi3.jpg';
            width = 70;
            height = 98;
            khiY = 284;
            console.log('khi3')
            break;
        }
        case 130:{
            khi.src = './img/khi4.jpg';
            width = 70;
            height = 104;
            khiY = 278;
            console.log('khi4')
            break;
        }
        case 145:{
            khi.src = './img/khi5.jpg';
            width = 70;
            height = 78;
            khiY = 305;
            console.log('khi5')
            break;
        }


    }
    run ++;
    if (run > 160){
        run = 0
    }
    ctx.drawImage(khi, 10, khiY, width, height);
    i++
    if (speed > 3000) i = 0;
    setTimeout(loadImg, 10)
}

loadImg()