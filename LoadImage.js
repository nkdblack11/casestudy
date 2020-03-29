function loadImg() {
    let speed = x
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let j = 0; j < 70; j++) {
        ctx.drawImage(duong, (j * 70) - loop * 3, y, duong.width / 6, duong.height / 6);
    }

    let length1 = arr1.length;
    for (let i = 0; i < length1; i++) {
        decorateImg.src = arr1[i].src;
        arr1[i].x = arr1[i].x - (speed / 200)
        ctx.drawImage(decorateImg, arr1[i].x, arr1[i].y, arr1[i].width, arr1[i].height);
    }
    if (1200 - (arr1[length1 - 1].x - (speed / 200)) > 1200) {
        let select = Math.floor(Math.random() * 100)
        if (select % 40 === 0) {
            let decorateStyle = Math.floor(Math.random() * 4)
            decorate.setStyle2(decorateStyle)
            arr1.push({...decorate})
        }
    }
    if (1200 - (arr1[length1 - 1].x - (speed / 200)) > 2000) {
        let decorateStyle = Math.floor(Math.random() * 4)
        barriers.setStyle1(decorateStyle)
        arr1.push({...decorate})
    }
    for (let i = 0; i < length1; i++) {
        if (arr1[i].x < -800) {
            arr1.splice(i, 1)
            length1 = length1 - 1
        }
    }

    if (monkey.status === "run") {
        monkey.setStyle(monkeyStyle)
        monkeyStyle++
    }
    if (monkey.status === 'up') {
        monkey.setStyle(110)
        monkey.setTop(-monkeyTop)
        if (monkey.y < 50) {
            monkey.setStatus(2)
        }
    }
    if (monkey.status === 'down') {
        monkey.setStyle(130)
        monkey.setTop(monkeyTop)
        if (monkey.y >= 311) {
            monkeyStyle = 0
            monkey.setStyle(monkeyStyle)
            monkey.setStatus(0)
        }

    }
    monkeyImg.src = monkey.src;
    ctx.drawImage(monkeyImg, monkey.x, monkey.y, monkey.width, monkey.height);
    if (monkeyStyle > 100) {
        monkeyStyle = 0
    }

    let length = arr.length
    for (let i = 0; i < length; i++) {  // giảm x của cây có trong mảng
        barriersImg.src = arr[i].src;
        arr[i].x = arr[i].x - (speed / 200)
        ctx.drawImage(barriersImg, arr[i].x, arr[i].y, arr[i].width, arr[i].height);
    }
    if (1200 - (arr[length - 1].x - (speed / 200)) > 700) {   // thêm cây mới vào mảng
        let select = Math.floor(Math.random() * 100)
        if (select % 40 === 0) {
            let barriersStyle = Math.floor(Math.random() * 4)
            barriers.setStyle1(barriersStyle)
            arr.push({...barriers})
        }
    }
    if (1200 - (arr[length - 1].x - (speed / 200)) > 1200) {
        let barriersStyle = Math.floor(Math.random() * 4)
        barriers.setStyle1(barriersStyle)
        arr.push({...barriers})
    }
    for (let i = 0; i < length; i++) {
        if (arr[i].x < -100) {
            arr.splice(i, 1)
            length = length - 1
            point++
        }
    }

    let gradient = ctx.createLinearGradient(0, 0, 50, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    ctx.fillText("Point: " + point, 50, 60);
    x = x + 0.1
    monkeyTop = monkeyTop + 0.0005
    loop = loop + 2.0005
    if (loop >= 100) loop = 0
    timer = setTimeout(loadImg, 6)
    for (let i = 0; i < length; i++) {
        if (arr[i].x <= (monkey.x + monkey.width) && arr[i].x >= monkey.x && arr[i].y <= (monkey.y + monkey.height) && arr[i].y >= monkey.y) {
            clearTimeout(timer)
            Start(50);
            ctx.fillText("Game Over", 500, 220);
            break;
        }
        if (arr[i].x + arr[i].width <= monkey.x + monkey.width && arr[i].x + monkey.width >= monkey.x && arr[i].y <= (monkey.y + monkey.height) && arr[i].y >= monkey.y) {
            clearTimeout(timer)
            Start(50);
            ctx.fillText("Game Over", 500, 220);
            break;
        }
        if (arr[i].x <= (monkey.x + monkey.width) && arr[i].x >= monkey.x && arr[i].y + (arr[i].height/2) >= monkey.y && arr[i].y + (arr[i].height/2) <= monkey.y + monkey.height){
            clearTimeout(timer)
            Start(50);
            ctx.fillText("Game Over", 500, 220);
            break;
        }
    }

}