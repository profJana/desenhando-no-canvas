var lastPositionOfX, lastPositionOfY; //variaveis que armazenam a última coordenada de x e y

canvas = document.getElementById('meucanvas'); //armazenando na variavel canvas a tag canva do html
ctx = canvas.getContext("2d"); //tipo do formato alterando para 2d

color = "black"; //armazenando na variavel color a cor black inicial
widthOfLine = 1; //armazenando na variavel o valor 1 para usar como grossura da linha inicial
widthScreen = screen.width ;//armazenando o valor atual da largura da tela do usuário
newWidth = screen.width - 90; // nessa variavel colocamos o 70, poderia ser qualquer outro valor para sempre ser um pouco menor do que a tela total que o usuário está usando
newHeight = screen.height - 280;
//canvas.addEventListener("mousedown", myMouseDown); 

if (widthScreen < 992){
    document.getElementById("meucanvas").width = newWidth;
    document.getElementById("meucanvas").height = newHeight;
    document.body.style.overflow = "hidden"; //desabilitando o rolamento da tela para  a pintura fluir melhor
}

canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) {
    console.log("Touch Start");

    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;

    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft; //fornece as coordenadas x onde tocarmos no canvas
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", myTouchMove); //evento que é chamado quando o dedo é deslizado pela tela

function myTouchMove(e) {
    console.log("Touch Movendo");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft; //armazenando na variável os valores atuais
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath(); //inicia ou reinicia o caminho para o desenho
    ctx.strokeStyle = color; // cor
    ctx.lineWidth = widthOfLine; //largura da linha

    ctx.moveTo(lastPositionOfX, lastPositionOfY); //iniciando o desenho aqui
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY); // e terminando aqui, entre os dois sempre será feito o desenho da linha
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX;
    lastPositionOfY = currentPositionOfTouchY;


}

//Atividade Adicional
function clearCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


