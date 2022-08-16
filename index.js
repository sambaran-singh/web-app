let btnwait=document.getElementById("wait");
let btncount=document.getElementById("count");
let divstatus=document.getElementById("status");
let divval=document.getElementById("val");


let count=0;

btncount.onclick=function(){
    count++;
    divval.textContent=count;
}

btnwait.onclick=function(){
    divstatus.textContent="Waiting";
    let start=Date.now();
    while(Date.now()<start+5000){

    }
    divstatus.textContent="Done";
}