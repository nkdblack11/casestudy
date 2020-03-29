function Start(y) {
    monkey = new objMonkey();
    barriers = new Barriers();
    arr = [];
    arr.push({...barriers});
    const rect = {x: 560, y: y, width: 120, heigth: 80}
    let click = (evt) => {
        if (evt.layerX > rect.x && evt.layerX < rect.x + rect.width && evt.layerY < rect.y + rect.heigth && evt.layerY > rect.y) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            point = 0
            x = 500;
            monkeyTop = 3
            loop = 0
            loadImg()
            canvas.removeEventListener("click", click)
        }
    };

    canvas.addEventListener('click', click)
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.heigth);
    ctx.fillStyle = 'rgba(225,225,225,0.5)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();
    ctx.font = '40pt Kremlin Pro Web';
    ctx.fillStyle = '#000000';
    ctx.fillText('Start', 570, y + 55);
}