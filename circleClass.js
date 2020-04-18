// CREATE CANVAS - SAME WIDTH AS VIEWPORT
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//CREATE CIRCLE VARIABLES 
// let x = Math.floor(Math.random() * innerWidth) ;
// let y = Math.floor(Math.random() * innerHeight);
// let speed = (Math.random() - 0.5) * 10;
// let dx = speed;
// let dy = speed;
// let radius = 30;

// let R = Math.floor(Math.random() * 256);
// let G = Math.floor(Math.random() * 256);
// let B = Math.floor(Math.random() * 256);


//CREATE CIRCLE 
class Circle {

    constructor(x, y, dx, dy, radius,colour) {
    Object.assign(this, {x,y,dx,dy,radius,colour});
    }

    draw() {
       
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "coral";
        c.lineWidth = "2";
        
        c.fill();
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
        c.fillStyle = `rgb(${this.colour.red},${this.colour.green},${this.colour.blue})`
        this.draw()
    };
    
   
}

let circles = [];

for(let i = 0; i < 100; i++) {
        let radius = 30;
        let x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius) ;
        let y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
        let speed = (Math.random() - 0.5) * 5;
        let dx = speed;
        let dy = speed;
        //Create a random colour for each circle
        let colour = {
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256)
        }

     circles.push(new Circle(x,y,dx,dy,radius,colour));
    
    }


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)

    for(let i = 0; i < circles.length; i++) {
        circles[i].update()
    }
 
}



animate()

