let Decorate = function () {
    this.width = 283;
    this.height = 81;
    this.x = 1400;
    this.y = 85;
    this.src = './img/may1.png'

    this.setStyle2 = function (style) {
        switch (style) {
            case 0:
                this.src = './img/may1.png';
                this.width = 283;
                this.height = 81;
                this.y = 65;
                break;
            case 1:
                this.src = './img/may2.png';
                this.width = 189;
                this.height = 101;
                this.y = 85;
                break;
            case 2:
                this.src = './img/may3.png';
                this.width = 211;
                this.height = 111;
                this.y = 75;
                break;
            case 3:
                this.src = './img/may4.png';
                this.width = 243;
                this.height = 106;
                this.y = 55;
                break;
        }
    }
};