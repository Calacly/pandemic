// CREATE CANVAS - SAME WIDTH AS VIEWPORT
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//CREATE CIRCLE VARIABLES 
let x = Math.floor(Math.random() * innerWidth) ;
let y = Math.floor(Math.random() * innerHeight);
let speed = (Math.random() - 0.5) * 10;
let dx = speed;
let dy = speed;
let radius = 30;

console.log(x)
console.log(y)
console.log(radius)
//CREATE CIRCLE 
class Circle {

    constructor(x, y, dx, dy, radius) {
    Object.assign(this, {x,y,dx,dy,radius});
    }

    draw() {
        
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }

    

    update() {
        //Bounce logic:
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
    } 

    if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
    } 


        this.x += this.dx;
        this.y += this.dy;
        this.draw()
    };
    
   
}

let circle = new Circle(x,y,dx,dy,radius);


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)

    circle.update()

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();

}



animate()

