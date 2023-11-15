let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
let btn;
let gamenumber1;
let G = 0;
let pop;
let box_heigth = 100;
let box_width = 100;
let rigth = 0;
canvas.width = 1100;
canvas.height = 700;



let box_x = getRandomNumber(180, 920 - box_width);
let box_y = getRandomNumber(40,700 - box_heigth);

let box_x1 = getRandomNumber(180, 920 - box_width);
let box_y1 = getRandomNumber(40,700 - box_heigth);

let box_x2 = getRandomNumber(180, 920 - box_width);
let box_y2 = getRandomNumber(40,700 - box_heigth);

let box_x3 = getRandomNumber(180, 920 - box_width);
let box_y3 = getRandomNumber(40,700 - box_heigth);

let box_x4 = getRandomNumber(180, 920 - box_width);
let box_y4 = getRandomNumber(40,700 - box_heigth);

let image = new Image();

image.src = 'image/apple.png';

let image2 = new Image();

image2.src = 'image/grusha.png';

let image3 = new Image();

image3.src = 'image/orange.png';

let image4 = new Image();

image4.src = 'image/pomidor.png';

let image5 = new Image();

image5.src = 'image/redis.png';
image.onload = () => {
    image2.onload = () => {
      image3.onload = () => {
        
      }
    }
  }
  image4.onload = () => {
    image5.onload = () => {
        
    } 
  }

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}  

function start () {
    G = 1;
    document.getElementById("start").style.display="none";
    document.getElementById("restart").style.display="block";
}

function square () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(image,box_x, box_y, box_width, box_heigth); //apple
    ctx.drawImage(image2,box_x1, box_y1, box_width, box_heigth); //grusha
    ctx.drawImage(image3,box_x2, box_y2, box_width, box_heigth); // orange
    ctx.drawImage(image4,box_x3, box_y3, box_width, box_heigth); // tomato
    ctx.drawImage(image5,box_x4, box_y4, box_width, box_heigth); //rediska
}

function proverka () {
    if (box_x >= 920 && box_x1 >= 920 && box_x2 >= 920 && box_x3 <= 180 && box_x4 <= 180) {
        alert('правильно');
        gamenumber1 = 1;
        rigth = 1;

    } else {
        alert('неправильно');
    };
}

canvas.addEventListener('click', function (e) { 
    var x = e.pageX - e.target.offsetLeft,
        y = e.pageY - e.target.offsetTop; 
    ctx.clearRect(0,0,1100,700);
    if (x >= box_x && x <= box_x + box_width && y >= box_y && y <= box_y + box_heigth) {
        if (pop == 0){
        canvas.addEventListener('mousemove', function (e) { 
            var x = e.pageX - e.target.offsetLeft,
                y = e.pageY - e.target.offsetTop; 
            ctx.clearRect(0,0,1100,700);
            if (box_x >= 180 - box_width && box_x <= 920){
            box_x = x - 40;
            box_y = y - 40;
            };
        });
        };
    };
    if (x >= box_x1 && x <= box_x1 + box_width && y >= box_y1 && y <= box_y1 + box_heigth) {
        if (pop == 0){
        canvas.addEventListener('mousemove', function (e) { 
            var x = e.pageX - e.target.offsetLeft,
                y = e.pageY - e.target.offsetTop; 
            ctx.clearRect(0,0,1100,700);
            if (box_x1 >= 180 - box_width && box_x1 <= 920){
            box_x1 = x - 40;
            box_y1 = y - 40;
            };
        });
        };
    };
    if (x >= box_x2 && x <= box_x2 + box_width && y >= box_y2 && y <= box_y2 + box_heigth) {
        if (pop == 0){
        canvas.addEventListener('mousemove', function (e) { 
            var x = e.pageX - e.target.offsetLeft,
                y = e.pageY - e.target.offsetTop; 
            ctx.clearRect(0,0,1100,700);
            if (box_x2 >= 180 - box_width && box_x2 <= 920){
            box_x2 = x - 40;
            box_y2 = y - 40;
            };
        });
        };
    };
    if (x >= box_x3 && x <= box_x3 + box_width && y >= box_y3 && y <= box_y3 + box_heigth) {
        if (pop == 0){
        canvas.addEventListener('mousemove', function (e) { 
            var x = e.pageX - e.target.offsetLeft,
                y = e.pageY - e.target.offsetTop; 
            ctx.clearRect(0,0,1100,700);
            if (box_x3 >= 180 - box_width && box_x3 <= 920){
            box_x3 = x - 40;
            box_y3 = y - 40;
            };
        });
        };
    };
    if (x >= box_x4 && x <= box_x4 + box_width && y >= box_y4 && y <= box_y4 + box_heigth ) {
        if (pop == 0){
        canvas.addEventListener('mousemove', function (e) { 
            var x = e.pageX - e.target.offsetLeft,
                y = e.pageY - e.target.offsetTop; 
            ctx.clearRect(0,0,1100,700);
            if (box_x4 >= 180 - box_width && box_x4 <= 920){
            box_x4 = x - 40;
            box_y4 = y - 40;
            };
        });
        };
    };
    
    pop = 0;
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2,true);
    ctx.stroke();
});
requestAnimationFrame(game1);
function game1() {

    requestAnimationFrame(game1);
    

    
    if (G == 1) {

        square();
    
        if (gamenumber1 == 1) {
            document.getElementById("restart").style.display = 'none';
            document.getElementById("btn-2").style.display = "block";
        }

        if (rigth == 0){
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(549,0);
            ctx.lineTo(549,39);
            ctx.lineTo(0,39);
            ctx.fillStyle = '#439ef3';
            ctx.fill();
        }
        else{
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(549,0);
            ctx.lineTo(549,39);
            ctx.lineTo(0,39);
            ctx.fillStyle = 'green';
            ctx.fill();
        }
    
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(0, 40);
        ctx.lineTo(1100, 40);
        ctx.stroke();
            
        ctx.beginPath();
        ctx.moveTo(551,0);
        ctx.lineTo(1099,0);
        ctx.lineTo(1099,39);
        ctx.lineTo(551,39);
        ctx.fillStyle = 'gray';
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(550,0);
        ctx.lineTo(550,40)
        ctx.stroke();
        
    
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.font = "40px serif";
        ctx.fillText('Игра 1', 200 , 40)
    
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.font = "40px serif";
        ctx.fillText('Овощи', 10 , 70)

        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.font = "40px serif";
        ctx.fillText('Фрукты', 930 , 70)
    
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.font = "40px serif";
        ctx.fillText('Игра 2', 750 , 40)
    
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(180, 40);
        ctx.lineTo(180, 700);
        ctx.stroke();
            
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(920, 40);
        ctx.lineTo(920, 700);
        ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(180, 40);
    ctx.lineTo(180, 700);
    ctx.stroke();
        
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(920, 40);
    ctx.lineTo(920, 700);
    ctx.stroke();
    }
    else{

        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.font = "40px serif";
        ctx.fillText('Овощи', 10 , 70)

        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.font = "40px serif";
        ctx.fillText('Фрукты', 930 , 70)
        
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(0, 40);
            ctx.lineTo(1100, 40);
            ctx.stroke();
                
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(550,0);
            ctx.lineTo(550,40)
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(549,0);
            ctx.lineTo(549,39);
            ctx.lineTo(0,39);
            ctx.fillStyle = 'gray';
            ctx.fill();
            
        
            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.font = "40px serif";
            ctx.fillText('Игра 1', 200 , 40)
        
            ctx.beginPath();
            ctx.moveTo(551,0);
            ctx.lineTo(1099,0);
            ctx.lineTo(1099,39);
            ctx.lineTo(551,39);
            ctx.fillStyle = 'gray';
            ctx.fill();
        
            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.font = "40px serif";
            ctx.fillText('Игра 2', 750 , 40)
        
        
        
        
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(180, 40);
            ctx.lineTo(180, 700);
            ctx.stroke();
                
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(920, 40);
            ctx.lineTo(920, 700);
            ctx.stroke();
    
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(180, 40);
        ctx.lineTo(180, 700);
        ctx.stroke();
            
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(920, 40);
        ctx.lineTo(920, 700);
        ctx.stroke();
    }
    
    }
    function game2(){
    requestAnimationFrame(game2);
    
    if (G === 1) {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(0, 40);
        ctx.lineTo(1100, 40);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(180, 40);
        ctx.lineTo(180, 700);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(920, 40);
        ctx.lineTo(920, 700);
        ctx.stroke();
        }
    
    }



    