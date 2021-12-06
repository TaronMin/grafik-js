let graf = document.getElementsByClassName("graf");
let grafikDiv = document.querySelector(".grafik-div");
////////////////////    WIDTH OF BORDERS //////////////////////////////
var arr = [193,167,150,140,90,95,103,97,88,84,195,179];
for(let i=0; i< arr.length;i++){
    grafikDiv.children[i].style.height = `${arr[i]}px`;
}
function getWidthGraf(x,y){
    return Math.ceil(Math.sqrt(Math.pow(x,2) + Math.pow(y,2)));
}
function repeat(graf,first,second,countMedia){
    if(first.offsetHeight > second.offsetHeight){
        let count = 0;
        a();
            function a(){
                if(Math.floor(graf.getBoundingClientRect().y + graf.getBoundingClientRect().height) <= second.getBoundingClientRect().top){
                    graf.style.cssText = ` width:${Math.floor(getWidthGraf(first.offsetHeight-second.offsetHeight,countMedia))}px;
                                            transform:rotatez(${count}deg)`;
                    count++;
                    setTimeout(a,30);
                }else{return;}
            }
    }
    else if(first.offsetHeight <= second.offsetHeight){
        var count2 = 0;
        b();
            function b(){
                if(Math.floor(graf.getBoundingClientRect().y) >= second.getBoundingClientRect().top){
                    graf.style.cssText = ` width:${Math.floor(getWidthGraf(second.offsetHeight-first.offsetHeight,countMedia))}px;
                                            transform:rotatez(${count2}deg)`;
                    count2--;
                    setTimeout(b,30);
                }else{return;}
            }
    }
}
if(document.body.offsetWidth >= 603){
    repeat(graf[0],grafikDiv.children[0],grafikDiv.children[1],50);
    repeat(graf[1],grafikDiv.children[1],grafikDiv.children[2],50);
    repeat(graf[2],grafikDiv.children[2],grafikDiv.children[3],50);
    repeat(graf[3],grafikDiv.children[3],grafikDiv.children[4],50);
    repeat(graf[4],grafikDiv.children[4],grafikDiv.children[5],50);
    repeat(graf[5],grafikDiv.children[5],grafikDiv.children[6],50);
    repeat(graf[6],grafikDiv.children[6],grafikDiv.children[7],50);
    repeat(graf[7],grafikDiv.children[7],grafikDiv.children[8],50);
    repeat(graf[8],grafikDiv.children[8],grafikDiv.children[9],50);
    repeat(graf[9],grafikDiv.children[9],grafikDiv.children[10],50);
    repeat(graf[10],grafikDiv.children[10],grafikDiv.children[11],50);
}
if(document.body.offsetWidth < 603 && document.body.offsetWidth >= 445){
    repeat(graf[0],grafikDiv.children[0],grafikDiv.children[1],35);
    repeat(graf[1],grafikDiv.children[1],grafikDiv.children[2],35);
    repeat(graf[2],grafikDiv.children[2],grafikDiv.children[3],35);
    repeat(graf[3],grafikDiv.children[3],grafikDiv.children[4],35);
    repeat(graf[4],grafikDiv.children[4],grafikDiv.children[5],35);
    repeat(graf[5],grafikDiv.children[5],grafikDiv.children[6],35);
    repeat(graf[6],grafikDiv.children[6],grafikDiv.children[7],35);
    repeat(graf[7],grafikDiv.children[7],grafikDiv.children[8],35);
    repeat(graf[8],grafikDiv.children[8],grafikDiv.children[9],35);
    repeat(graf[9],grafikDiv.children[9],grafikDiv.children[10],35);
    repeat(graf[10],grafikDiv.children[10],grafikDiv.children[11],35);
}
if(document.body.offsetWidth < 445 && document.body.offsetWidth >= 320){
    repeat(graf[0],grafikDiv.children[0],grafikDiv.children[1],24);
    repeat(graf[1],grafikDiv.children[1],grafikDiv.children[2],24);
    repeat(graf[2],grafikDiv.children[2],grafikDiv.children[3],24);
    repeat(graf[3],grafikDiv.children[3],grafikDiv.children[4],24);
    repeat(graf[4],grafikDiv.children[4],grafikDiv.children[5],24);
    repeat(graf[5],grafikDiv.children[5],grafikDiv.children[6],24);
    repeat(graf[6],grafikDiv.children[6],grafikDiv.children[7],24);
    repeat(graf[7],grafikDiv.children[7],grafikDiv.children[8],24);
    repeat(graf[8],grafikDiv.children[8],grafikDiv.children[9],24);
    repeat(graf[9],grafikDiv.children[9],grafikDiv.children[10],24);
    repeat(graf[10],grafikDiv.children[10],grafikDiv.children[11],24);
}