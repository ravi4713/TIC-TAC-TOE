function startGame(){
    document.turn = "X";
    setMsg(document.turn + "    Turns");
    win = 0;
    totalMove =0;
    
}



function setMsg(msg){
    document.getElementById("msg").innerHTML=msg
}





function Move(box){
    if (box.innerHTML == "" && win==0){
        box.innerHTML=document.turn;
        box.style.cursor="not-allowed";
        switchMove();
        totalMove+=1;
        
    }
    
}


function switchMove(){
    
    if (checkWinner(document.turn)){
        setMsg("Winner is : "+ document.turn);
        win=1;
        

    }else if( document.turn == "X"){
        document.turn="O";
        document.getElementById("msg").innerHTML="IT's " +" "+document.turn +" "+" TURN's";
    }
    else if (document.turn == "O"){
        document.turn="X";
        document.getElementById("msg").innerHTML="IT's " +" "+document.turn +" "+" TURN's";
    }
    if (totalMove==8 && !checkWinner(document.turn)){
        document.getElementById("msg").innerHTML="IT's Draw";
    }
}

function getbox(number){
    return document.getElementById("box-"+number).innerHTML;
}
function checkRow(a,b,c,move){
    var result=false;
    if ( getbox(a) == move && getbox(b) == move && getbox(c) ==move ){
        return true;
    }
    return false;
}

function checkWinner (move) {
    var result = false;
    if (checkRow(0,1 ,2 ,move )||
        checkRow(3,4 ,5,move ) ||
        checkRow(6,7 ,8 ,move ) ||
        checkRow(0,3,6,move ) ||
        checkRow(1,4,7,move ) ||
        checkRow(2,5,8,move ) ||
        checkRow(0,4,8,move ) ||
        checkRow(2,4,6,move ) ){
            return true;
        }
        return false;
}


function reset(){
    for (var i=0 ;i <9;i++){
        document.getElementById("box-"+i).innerHTML="";
        document.getElementById("box-"+i).style.cursor="pointer";
    }
    startGame();
}