var playerO=[], playerX=[], player="", cell, game="", youplay=[], pcplay=[], cellpc, whoplay="", whoisyou="", cornercells=['1','3','7','9'], sumlengthfriends, sumlengthpc, winplayerYou=[], winplayerPc=[], winplayerO=[], winplayerX=[], emptycorner;
var box = $("td");
var wintriplets=[['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
var cells=['1','2','3','4','5','6','7','8','9'];

function havewintriplet(array,a,b,c) {
    if(array.includes(a) && array.includes(b) && array.includes(c))    {
      console.log('win');
      return true;
    }
    return false;
}

function getWinTriplets(arr,array) {
    for (var i = 0; i < arr.length; i++) {
         var result = havewintriplet(array,arr[i][0],arr[i][1],arr[i][2]);
                 if(result){
                   return true;
                   console.log('wintripl');
                   } 
             }
              return false;
          }

$("td").on("click", function(){
  cell=this.id;
  }); 

function getvalue() {
  if(player===0 && document.getElementById(cell).innerHTML == "") {
    playerO.push(cell);
    sumlengthfriends=playerO.length+playerX.length;
    console.log('playerO.length+playerX.length:'+sumlengthfriends);
    console.log('O:'+playerO);
    document.getElementById(cell).innerHTML = "O";
    player=1;
     $(x).addClass("active");
     $(o).removeClass("active");
    }
  else if(player===1 && document.getElementById(cell).innerHTML == "") {
    playerX.push(cell);
    sumlengthfriends=playerO.length+playerX.length;
    console.log('playerO.length+playerX.length:'+sumlengthfriends);
    console.log('X:'+playerX);
    document.getElementById(cell).innerHTML = "X";
    player=0; 
    $(o).addClass("active");
    $(x).removeClass("active");
    }
  else if(document.getElementById(cell).innerHTML === "" && player==="" && game===""){
  alert('please choose how do you wanna play and then a Player!');
    } 
  else if(document.getElementById(cell).innerHTML === "" && player===""  && whoisyou==="" && game===1 || game===0){
      alert('please choose a Player!');    
  }
  if (sumlengthfriends===9) {  
     winplayerO.push(getWinTriplets(wintriplets,playerO));
     winplayerX.push(getWinTriplets(wintriplets,playerX));
    
     console.log('winplayerO:'+winplayerO);
     console.log('winplayerX:'+winplayerX);
 
     if(winplayerO.includes(true)){
       console.log('o winner');
        $("p").html('the winner is O Player!');
        } 
     if(winplayerX.includes(true)) {
          console.log('x winner');
          $("p").html('the winner is X Player!');
        } 
     if((winplayerX.includes(true) && winplayerO.includes(true)) || (winplayerX.includes(false) && winplayerO.includes(false))) {
          console.log('Draw');
          $("p").html('It´s a Draw!');
        }
      }
}
function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
function checkempty(val){
  return document.getElementById(val).innerHTML === "";
}
function chooseempty(item) {
 if(checkempty(item)){
   return cellpc=item;            
 }
}
  
function pcnextmove() {
     if  ((document.getElementById(3).innerHTML == "" && !pcplay.includes(3)) && ((document.getElementById(1).innerHTML == "X" && document.getElementById(2).innerHTML == "X") || (document.getElementById(1).innerHTML == "O" && document.getElementById(2).innerHTML == "O"))){    console.log('1, 2 3');
                  cellpc='3';
  } else if((document.getElementById(1).innerHTML == "" && !pcplay.includes(1)) && ((document.getElementById(2).innerHTML == "X" && document.getElementById(3).innerHTML == "X") || (document.getElementById(2).innerHTML == "O" && document.getElementById(3).innerHTML == "O"))){console.log('3, 2 1');
                  cellpc='1';
   } else if((document.getElementById(2).innerHTML == "" && !pcplay.includes(2)) && ((document.getElementById(1).innerHTML == "X" && document.getElementById(3).innerHTML == "X") || (document.getElementById(1).innerHTML == "O" && document.getElementById(3).innerHTML == "O"))){     console.log('1, 3 2');
                  cellpc='2';
  } else if((document.getElementById(6).innerHTML == "" && !pcplay.includes(6)) && ((document.getElementById(4).innerHTML == "X" && document.getElementById(5).innerHTML == "X") || (document.getElementById(4).innerHTML == "O" && document.getElementById(5).innerHTML == "O"))){console.log('4, 5 6');
                  cellpc='6';
  } else if((document.getElementById(4).innerHTML == "" && !pcplay.includes(4)) && ((document.getElementById(6).innerHTML == "X" && document.getElementById(5).innerHTML == "X") || (document.getElementById(6).innerHTML == "O" && document.getElementById(5).innerHTML == "O"))){   console.log('6, 5 4');
                  cellpc='4';
  } else if((document.getElementById(6).innerHTML == "" && !pcplay.includes(6)) && ((document.getElementById(4).innerHTML == "X" && document.getElementById(5).innerHTML == "X") || (document.getElementById(4).innerHTML == "O" && document.getElementById(5).innerHTML == "O"))){           console.log('4, 5 6');
                  cellpc='6';
  } else if((document.getElementById(5).innerHTML == "" && !pcplay.includes(5)) && ((document.getElementById(6).innerHTML == "X" && document.getElementById(4).innerHTML == "X") || (document.getElementById(6).innerHTML == "O" && document.getElementById(4).innerHTML == "O"))){console.log('6, 4 5');
                  cellpc='5';
  } else if((document.getElementById(9).innerHTML == "" && !pcplay.includes(9)) && ((document.getElementById(7).innerHTML == "X" && document.getElementById(8).innerHTML == "X") || (document.getElementById(7).innerHTML == "O" && document.getElementById(8).innerHTML == "O"))){          console.log('8, 7 9');
                  cellpc='9';
  } else if((document.getElementById(7).innerHTML == "" && !pcplay.includes(7)) && ((document.getElementById(8).innerHTML == "X" && document.getElementById(9).innerHTML == "X") || (document.getElementById(8).innerHTML == "O" && document.getElementById(9).innerHTML == "O"))){         console.log('8,9 7');
                  cellpc='7';
  } else if((document.getElementById(8).innerHTML == "" && !pcplay.includes(8)) && ((document.getElementById(7).innerHTML == "X" && document.getElementById(9).innerHTML == "X") || (document.getElementById(7).innerHTML == "O" && document.getElementById(9).innerHTML == "O"))){     console.log('9, 7 8');
                  cellpc='8';
  } else if((document.getElementById(7).innerHTML == "" && !pcplay.includes(7)) && ((document.getElementById(1).innerHTML == "X" && document.getElementById(4).innerHTML == "X") || (document.getElementById(1).innerHTML == "O" && document.getElementById(4).innerHTML == "O"))){         console.log('1, 2 3');
                  cellpc='7';
  } else if((document.getElementById(1).innerHTML == "" && !pcplay.includes(1)) && ((document.getElementById(4).innerHTML == "X" && document.getElementById(7).innerHTML == "X") || (document.getElementById(4).innerHTML == "O" && document.getElementById(7).innerHTML == "O"))){      console.log('4, 7 1');
                  cellpc='1';
  } else if((document.getElementById(4).innerHTML == "" && !pcplay.includes(4)) && ((document.getElementById(1).innerHTML == "X" && document.getElementById(7).innerHTML == "X") || (document.getElementById(1).innerHTML == "O" && document.getElementById(7).innerHTML == "O"))){          console.log('1, 7 4');
                  cellpc='4';
  } else if((document.getElementById(7).innerHTML == "" && !pcplay.includes(7)) && ((document.getElementById(1).innerHTML == "X" && document.getElementById(4).innerHTML == "X") || (document.getElementById(1).innerHTML == "O" && document.getElementById(4).innerHTML == "O"))){      console.log('1, 4 7');
                  cellpc='7';
  } else if((document.getElementById(8).innerHTML == "" && !pcplay.includes(8)) && ((document.getElementById(2).innerHTML == "X" && document.getElementById(5).innerHTML == "X") || (document.getElementById(2).innerHTML == "O" && document.getElementById(5).innerHTML == "O"))){           console.log('5, 2 8');
                  cellpc='8';
  } else if((document.getElementById(5).innerHTML == "" && !pcplay.includes(5)) && ((document.getElementById(2).innerHTML == "X" && document.getElementById(8).innerHTML == "X") || (document.getElementById(2).innerHTML == "O" && document.getElementById(8).innerHTML == "O"))){    console.log('2, 8 5');
                  cellpc='5';
  } else if((document.getElementById(2).innerHTML == "" && !pcplay.includes(2)) && ((document.getElementById(8).innerHTML == "X" && document.getElementById(5).innerHTML == "X") || (document.getElementById(8).innerHTML == "O" && document.getElementById(5).innerHTML == "O"))){         console.log('8, 5 2');
                  cellpc='2';
  } else if((document.getElementById(9).innerHTML == "" && !pcplay.includes(9)) && ((document.getElementById(3).innerHTML == "X" && document.getElementById(6).innerHTML == "X") || (document.getElementById(6).innerHTML == "O" && document.getElementById(3).innerHTML == "O"))){           console.log('3, 6 9');
                  cellpc='9';
  } else if((document.getElementById(6).innerHTML == "" && !pcplay.includes(6)) && ((document.getElementById(9).innerHTML == "X" && document.getElementById(3).innerHTML == "X") || (document.getElementById(9).innerHTML == "O" && document.getElementById(3).innerHTML == "O"))){           console.log('3, 9 6');
                  cellpc='6';
  } else if((document.getElementById(3).innerHTML == "" && !pcplay.includes(3)) && ((document.getElementById(6).innerHTML == "X" && document.getElementById(9).innerHTML == "X") || (document.getElementById(6).innerHTML == "O" && document.getElementById(9).innerHTML == "O"))){         console.log('9, 6 3');
                  cellpc='3';
  } else if((document.getElementById(9).innerHTML == "" && !pcplay.includes(9)) && ((document.getElementById(1).innerHTML == "X" && document.getElementById(5).innerHTML == "X") || (document.getElementById(1).innerHTML == "O" && document.getElementById(5).innerHTML == "O"))){       console.log('1, 5 9');
                  cellpc='9';
  } else if((document.getElementById(5).innerHTML == "" && !pcplay.includes(5)) && ((document.getElementById(9).innerHTML == "X" && document.getElementById(1).innerHTML == "X") || (document.getElementById(9).innerHTML == "O" && document.getElementById(1).innerHTML == "O"))){
                  cellpc='5';
  } else if((document.getElementById(1).innerHTML == "" && !pcplay.includes(1)) && ((document.getElementById(5).innerHTML == "X" && document.getElementById(9).innerHTML == "X") || (document.getElementById(5).innerHTML == "O" && document.getElementById(9).innerHTML == "O"))){   console.log('9, 5 1');
                  cellpc='1';
  } else if((document.getElementById(7).innerHTML == "" && !pcplay.includes(7)) && ((document.getElementById(3).innerHTML == "X" && document.getElementById(5).innerHTML == "X") || (document.getElementById(3).innerHTML == "O" && document.getElementById(5).innerHTML == "O"))){          console.log('3, 5 7');
                  cellpc='7';
  }
   else if((document.getElementById(5).innerHTML == "" && !pcplay.includes(5)) && ((document.getElementById(7).innerHTML == "X" && document.getElementById(3).innerHTML == "X") || (document.getElementById(7).innerHTML == "O" && document.getElementById(3).innerHTML == "O"))){         console.log('3, 7 5');
                  cellpc='5';
  } else if((document.getElementById(3).innerHTML == "" && !pcplay.includes(3)) && ((document.getElementById(5).innerHTML == "X" && document.getElementById(7).innerHTML == "X") || (document.getElementById(5).innerHTML == "O" && document.getElementById(7).innerHTML == "O"))){           console.log('5, 7 3');
                  cellpc='3';
  }    
  else if(!pcplay.includes(5) && document.getElementById(5).innerHTML == ""){
            console.log('5');
                  cellpc='5';
                  }
  else if(emptycorner) {     
    emptycorner=cornercells.filter(chooseempty);
    for(var i=0; i<emptycorner.length; i++){
            if(!pcplay.includes(emptycorner[i])){
              console.log('emptycorner', +emptycorner[i]);
               cellpc=emptycorner[i];
               break;
            }}}
   else{
           var emptycell=cells.filter(chooseempty);
           for(var k=0; k<emptycell.length; k++){
            if(!pcplay.includes(emptycell[k])){
              console.log('emptycell', +emptycell[k]);
               cellpc=emptycell[k];
               break;
            }}
            console.log('dont know what to do', +cellpc);
          }
  
  if(whoplay===1) {
        pcplay.push(cellpc);
        sumlengthpc=youplay.length+pcplay.length;
        console.log('pc play X:'+pcplay);
        document.getElementById(cellpc).innerHTML = "X";
        whoplay=0; 
        $(o).addClass("active");
        $(x).removeClass("active");
        setvalue();
        }
    else if(whoplay===0) {
        pcplay.push(cellpc);
        sumlengthpc=youplay.length+pcplay.length;
        console.log('pcplay O:'+pcplay);
        document.getElementById(cellpc).innerHTML = "O";
        whoplay=1; 
        $(x).addClass("active");
        $(o).removeClass("active");
        setvalue();
        }
}
function setvalue() {
  if(game===0 && document.getElementById(cell).innerHTML == ""){
    getvalue();
    console.log('setvalue-game:'+game);
  } else if(game===1 && document.getElementById(cell).innerHTML == ""){
   console.log('setvalue-game:'+game);
if(whoisyou===0){
    if(whoplay===0) {
        youplay.push(cell);
        sumlengthpc=youplay.length+pcplay.length;
        console.log('youplay O:'+youplay);
        document.getElementById(cell).innerHTML = "O";
        whoplay=1;
        $(x).addClass("active");
        $(o).removeClass("active");
        if(sumlengthpc<9){
         setTimeout(pcnextmove(), 45000);
         }
        }
  }
  else if(whoisyou===1){
     if(whoplay===1) {
        youplay.push(cell);
        sumlengthpc=youplay.length+pcplay.length;
        console.log('youplay X:'+youplay);
        document.getElementById(cell).innerHTML = "X";
        whoplay=0;
        $(o).addClass("active");
        $(x).removeClass("active");
       if(sumlengthpc<9){
         setTimeout(pcnextmove(), 45000);
         }
        }
     }  
    if (sumlengthpc===9) {  
      console.log('youplay:'+youplay);
      console.log('pcplay:'+pcplay);
      winplayerYou.push(getWinTriplets(wintriplets,youplay));
      winplayerPc.push(getWinTriplets(wintriplets,pcplay));
    var arrt=['1','2','3','7','9'];
  console.log('getWinTriplets(wintriplets,arrt):'+getWinTriplets(wintriplets,arrt));
      
     console.log('winplayerYou:'+winplayerYou);
     console.log('winplayerPc:'+winplayerPc);
     if(winplayerYou.includes(true)){
       console.log('you winner');
        $("p").html('the winner is You!');
        } 
    if(winplayerPc.includes(true)) {
          console.log('pc winner');
          $("p").html('the winner is PC!');
        } 
    if((winplayerYou.includes(true) && winplayerPc.includes(true)) || (winplayerYou.includes(false) && winplayerPc.includes(false))) {
          console.log('Draw');
          $("p").html('It´s a Draw!');
        }
      }
  }
   
}

$("button").on("click", function(){
  sumlengthpc=youplay.length+pcplay.length;
  sumlengthfriends=playerO.length+playerX.length;
  console.log('sumlengthpc,sumlengthfriends:'+sumlengthfriends+sumlengthfriends);
  if(sumlengthpc===0 && sumlengthfriends===0){
    if(this.id==="o" && game===0){
     player=0;
    console.log('player:'+player);
     }
  else if(this.id==="x" && game===0){
    if(!player){
      player=1;
      console.log('player:'+player);
       }
     }
    if(this.id==="o" && game===1){
      whoisyou=0;
      whoplay=0;
      console.log('whoisyou:'+whoisyou);
      console.log('whoplay:'+whoplay);
     }
  else if(this.id==="x" && game===1){
    if(!whoisyou){
      whoisyou=1;
      whoplay=1;
      console.log('whoisyou:'+whoisyou);
      console.log('whoplay:'+whoplay);
       }
     }
  }
   if(this.id==="restart" || this.id==="friend" || this.id==="pc") {
       box.html("");
       $("p").html('');
       player="";
       game="";
       whoplay="";
       whoisyou="";
       playerO.length = 0;
       playerX.length = 0;
       youplay.length = 0;
       pcplay.length = 0;
       winplayerYou.length=0;
       winplayerPc.length=0;
       winplayerO.length=0;
       winplayerX.length=0;
       
      $(x).removeClass("active");
      $(o).removeClass("active");
          }
  if(this.id==="friend"){
      game=0;
      console.log('friend');
      console.log('game:'+game);
    }
  else if(this.id==="pc"){
    if(!game){
       game=1;
      console.log('pc');
      console.log('game:'+game);
       }
  }
});