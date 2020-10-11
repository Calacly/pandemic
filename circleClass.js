// CREATE CANVAS - SAME WIDTH AS VIEWPORT
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// const catalyst = document.querySelector("h1").getBoundingClientRect();

let circles = [];
let people = 20;
let infectedPeople = [];

//CREATE CIRCLE 
class Circle {

    constructor(x, y, dx, dy, radius,colour) {
    Object.assign(this, {x,y,dx,dy,radius,colour});
    }

    draw() {
       
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "black";
        c.lineWidth = "2";
        c.fillStyle = this.colour;
        c.fill();
        c.stroke();
      
    }



    update(circles) {

     console.log(infectedPeople.length);

        for(let i = 0; i < circles.length; i++) {
            if(this === circles[i]) continue;
        
            if(getDistance(this.x,this.y,circles[i].x,circles[i].y) - this.radius * 2 < 0) {
                switch(this.colour) {
                    case "blue":
                    case "green":
                        if(circles[i].colour === "blue" || circles[i].colour === "green"){
                            console.log("No infection or immune.")
                        }
                        break;
                    case "red":
                        if(circles[i].colour !== "green") {
                            circles[i].colour = "red";
                            circles[i].infected = true;
                            
                        }    
                        break;
                }
        
        
                if(this.colour === "red") {
                    // setTimeout(() => {
                    //     let died = Math.floor((3.8 / 100) * people);
                    //     circles[died].colour = "white";
                    // },3000)
                   setTimeout(() => {
                    this.colour = "green"
                  }, 20000)
                }
               
            }
        }

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





setTimeout(() => {
    circles[0].colour = "red";
    circles[0].infected = true;
    infectedPeople.push(circles[0]);
    console.log("First infection");
}, 10000);


for(let i = 0; i < people; i++) {
        let radius = 15;
        let x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius) ;
        let y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
        let speed = (Math.random() - 0.5) * 2;
        let dx = speed;
        let dy = speed;
        let colour = "blue";
        let infected = "false";

        //Make sure generated circles do not overlap
        if(i !== 0) {
            for(let j = 0; j < circles.length; j ++) {
             if(getDistance(x,y,circles[j].x,circles[j].y) - radius * 2 < 0) {
                x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius) ;
                y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
                
                //we need minus 1 here because the j ++ increments j by 1 at the 
                //end of the loop. So if we set it to 0 it will increment it to 1
                //and we want to restart from 0.
                j = -1;
             }
            }
        }
        
       

     circles.push(new Circle(x,y,dx,dy,radius,colour,infected));
    
    }

    

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)

    circles.forEach(circle => {
        circle.update(circles)
    }) 
}



animate()


function getDistance(x1,y1,x2,y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}

//Note ** is the same as using Math.pow()



