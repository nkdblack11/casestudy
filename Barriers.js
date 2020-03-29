let Barriers = function () {
    this.width = 79;
    this.height = 100;
    this.x = 1200;
    this.y = 285;
    this.src = './img/suong-rong1.jpg'

    this.setStyle1 = function (style) {
        switch (style) {
            case 0:
                this.src = './img/suong-rong1.jpg';
                this.width = 79;
                this.height = 100;
                this.y = 285;
                break;
            case 1:
                this.src = './img/suong-rong2.png';
                this.width = 115;
                this.height = 87;
                this.y = 305;
                break;
            case 2:
                this.src = './img/suong-rong3.png';
                this.width = 111;
                this.height = 109;
                this.y = 275;
                break;
            case 3:
                this.src = './img/suong-rong4.jpg';
                this.width = 95;
                this.height = 130;
                this.y = 267;
                break;
        }
    }
};