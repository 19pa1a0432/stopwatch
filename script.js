var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;
function start(){
   timer=true;
   stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
   timer=false; 
    var count=0;
    var hr=0;
    var min=0;
    var sec=0;  
    document.getElementById("count").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
}

function stopwatch(){
   if(timer){
       count=count+1;
       if(count==100){
           sec+=1;
           count=0;
       }
       if(sec==60){
           min+=1;
           sec=0;
       }
       if(min==60){
           hr+=1;
           sec=0;
           min=0;
       }
       document.getElementById("count").innerHTML=count;
       document.getElementById("hr").innerHTML=hr;
       document.getElementById("min").innerHTML=min;
       document.getElementById("sec").innerHTML=sec;
       setTimeout("stopwatch()",10);
   }
}