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
    FoldField.animate(0);
}

window.addEventListener("resize", function () {
    this.cancelAnimationFrame(FoldFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    FoldField = new FoldFieldEffect(ctx, canvas.width, canvas.height);
    FoldField.animate(0);

});

const mouse = {
    x: 0,
    y: 0,
}

window.addEventListener("mousemove", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
});


class FoldFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = "rgb(255,255,0)";
        this.#ctx.lineWidth = 3;
        this.#width = width;
        this.#height = height;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.interval = 1000;
        this.timer = 0;
    }
    #draw(x, y) {
        const lenght = 200;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(mouse.x, mouse.y);
        this.#ctx.stroke();
    }


    animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        //this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.#draw(this.#width / 2, this.#height / 2);
    /*   this.x += 2 + Math.sin(this.angle) * +10;
       this.y += 3 + Math.cos(this.angle) * -1;
       if (this.y < this.#height) { 
        this.#draw(this.x, this.y);
 
       } else {
        this.draw(-this.x, -this.y);
    }
        this.angle += 0.7;
     */
    FoldFieldAnimation = requestAnimationFrame(this.animate.bind(this));
}
}