window.onload = function() {
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas);
    const FoldField = new FoldFieldEffect(ctx, canvas.width, canvas.height);
    FoldField.animate();
}

window.addEventListener("resize", function() {
    var canvas = document.getElementById("canvas1");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

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
    }
    #draw(x,y) {
        const lenght = 200;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x,y);
        this.#ctx.lineTo(x + lenght, y + lenght);
        this.#ctx.stroke();
    }

    animate() {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.#draw(this.x, this.y);
        this.x += 5;
        this.y += 1;
        console.log('animated');
        requestAnimationFrame(this.animate.bind(this));
    }
}