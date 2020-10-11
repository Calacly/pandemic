// testing 

for(let i = 0; i < circles.length; i++) {
    if(this === circles[i]) {continue};

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
                }
                break;
        }


       this.colour = "red"
           setTimeout(() => {
            this.colour = "green"
          }, 10000)
       
    }
}



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
        }
        break;
}