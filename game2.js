let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
let btn;
let gamenumber1;
let G = 0;
let rigth = 0;
canvas.width = 1100;
canvas.height = 700;

window.onload = game();

function start () {
    G = 1;
    document.getElementById("start").style.display="none";
    document.getElementById("restart").style.display="block";
}


function game() {
    requestAnimationFrame(game); 

    

if (G == 1) {


    if (rigth == 0){
        ctx.beginPath();
        ctx.moveTo(551,0);
        ctx.lineTo(1099,0);
        ctx.lineTo(1099,39);
        ctx.lineTo(551,39);
        ctx.fillStyle = '#439ef3';
        ctx.fill();
    }
    else{
        ctx.beginPath();
        ctx.moveTo(551,0);
        ctx.lineTo(1099,0);
        ctx.lineTo(1099,39);
        ctx.lineTo(551,39);
        ctx.fillStyle = 'green';
        ctx.fill();
    }

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
    ctx.fillStyle = 'green';
    ctx.fill();
    

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = "40px serif";
    ctx.fillText('Игра 1', 200 , 40)



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
        ctx.fillStyle = 'green';
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

