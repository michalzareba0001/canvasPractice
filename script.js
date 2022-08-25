let canvas;
let ctx;
let FoldField;
let FoldFieldAnimation;

window.onload = function () {
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas);
    FoldField = new FoldFieldEffect(ctx, canvas.width, canvas.height);
    FoldField.animate();
}

window.addEventListener("resize", function () {
    this.cancelAnimationFrame(FoldFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    FoldField = new FoldFieldEffect(ctx, canvas.width, canvas.height);
    FoldField.animate();

});

const mouse = {
    x: 0,
    y: 0
}


class FoldFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = "rgb(255,255,255)";
        this.#width = width;
        this.#height = height;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
    }
    #draw(x, y) {
        const lenght = 200;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + lenght, y + lenght);
        this.#ctx.stroke();
    }

  
    animate() {
       // this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.#draw(this.x, this.y);
        this.x += 2 + Math.sin(this.angle) * -10;
        this.y += 10 + Math.cos(this.angle) * -3;
        this.angle += 0.5;
       // console.log('animated');
        FoldFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    }
}