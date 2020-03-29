let objMonkey = function () {
    this.width = 70;
    this.height = 72;
    this.x = 20;
    this.y = 311;
    this.src = './img/khi01.jpg';
    this.status = 'run';

    this.setStatus = function (number) {
        switch (number) {
            case 0:
                this.status = 'run';
                break;
            case 1:
                this.status = 'up';
                this.y = 305;
                break;
            case 2:
                this.status = 'down';
                break;
            default:
                this.status = 'run';
                break;
        }
    };

    this.setTop = function (number) {
        this.y = this.y + number;
    }

    this.setStyle = function (style) {
        switch (style) {
            case 0:
                this.src = './img/khi01.jpg';
                this.width = 70;
                this.height = 72;
                this.y = 311;
                break;
            case 10:
                this.src = './img/khi02.jpg';
                this.width = 70;
                this.height = 84;
                this.y = 299;
                break;
            case 20:
                this.src = './img/khi03.jpg';
                this.width = 70;
                this.height = 98;
                this.y = 284;
                break;
            case 30:
                this.src = './img/khi04.jpg';
                this.width = 70;
                this.height = 104;
                this.y = 278;
                break;
            case 40:
                this.src = './img/khi05.jpg';
                this.width = 70;
                this.height = 78;
                this.y = 305;
                break;
            case 50:
                this.src = './img/khi1.jpg';
                this.width = 70;
                this.height = 72;
                this.y = 311;
                break;
            case 60:
                this.src = './img/khi2.jpg';
                this.width = 70;
                this.height = 84;
                this.y = 299;
                break;
            case 70:
                this.src = './img/khi3.jpg';
                this.width = 70;
                this.height = 98;
                this.y = 284;
                break;
            case 80:
                this.src = './img/khi4.jpg';
                this.width = 70;
                this.height = 104;
                this.y = 278;
                break;
            case 90:
                this.src = './img/khi5.jpg';
                this.width = 70;
                this.height = 78;
                this.y = 305;
                break;
            case 100:
                this.src = './img/khi-run1.jpg';
                this.width = 70;
                this.height = 78;
                this.y = 305;
                break;
            case 110:
                this.src = './img/khi-run2.jpg';
                this.width = 70;
                this.height = 78;
                break;
            case 120:
                this.src = './img/khi-run3.jpg';
                this.width = 70;
                this.height = 78;
                this.y = 305;
                break;
            case 130:
                this.src = './img/khi-run4.jpg';
                this.width = 70;
                this.height = 78;
                break;
            case 140:
                this.src = './img/khi-run5.jpg';
                this.width = 70;
                this.height = 78;
                this.y = 305;
                break;
        }
    }
}