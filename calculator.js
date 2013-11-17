var memory=0;
var calcul=0;
var num=0,result=0,numshow="0";
var quit=0;
var operate=0;
function on(name)
{
	document.getElementById(name).src="img/"+name+"b.png";
}
function off(name)
{
	document.getElementById(name).src="img/"+name+"a.png";
}
function command(num)
{
	if(document.getElementById("monitor").value!="不能以0为除数"|"错误"){
	var str=String(document.getElementById("monitor").value);
	str=(str!="0")?((operate==0)?str:""):"";
	str=str+String(num);
	document.getElementById("monitor").value=str;
	operate=0;
	quit=0;
	}
}
function del()
{
	if(quit==0){
    var str=String(document.getElementById("monitor").value);
	str=(str!="0")?str:"";
	str=str.substr(0,str.length-1);
	str=(str!="")?str:"0";
	document.getElementById("monitor").value=str;
	}
}
function calculate()
{
	numshow=Number(document.getElementById("monitor").value);
	if(num!=0 && quit!=1){
		switch(calcul){
			case 1:result=num+numshow;break;
			case 2:result=parseFloat((num-numshow).toFixed(10));break;
			case 3:result=num*numshow;break;
			case 4:if(numshow!=0){result=num/numshow;}else{result="不能以0为除数";};break;
			case 5:result=num%numshow;break;
			case 6:if(numshow>=0){result=Math.sqrt(numshow)}else{result="错误";};break;
		}
		quit=1;
	}else{
		result=numshow;
	}
	save=numshow;
	numshow=String(result);
	document.getElementById("monitor").value=numshow;
	num=result;
}
function plus(){
	calculate();
	operate=1;
	calcul=1;
}
function l_minus(){
	calculate();
	operate=1;
	calcul=2;
}
function times(){
	calculate();
	operate=1;
	calcul=3;
}
function divide(){
	calculate();
	operate=1;
	calcul=4;
}
function persent(){
	calculate();
	operate=1;
	calcul=5;
}
function equals(){
	numshow=Number(document.getElementById("monitor").value);
	if (quit==1){
	switch(calcul){
			case 1:result=save+numshow;break;
			case 2:result=parseFloat((numshow-save).toFixed(10));break;
			case 3:result=save*numshow;break;
			case 4:if(numshow!=0){result=numshow/save;}else{result="不能以0为除数";};break;
			case 5:result=save%numshow;break;
			case 6:if(numshow>=0){result=Math.sqrt(numshow)}else{result="错误";};break;
	}
	numshow=String(result);
	document.getElementById("monitor").value=numshow;
	num=result;
	}
	else{	
	calculate();
	operate=1;
	num=0;
	result=0;
	numshow="0";
	}
}
function dot(){
	var str=String(document.getElementById("monitor").value);
	str=(str!="0")?((operate==0)?str:"0"):"0";
	for(i=0;i<=str.length;i++){
		if(str.substr(i,1)==".")return false;
	}
	str=str+".";
	document.getElementById("monitor").value=str;
	operate=0;
}
function clearscreen(){
	num=0;
	result=0;
	numshow="0";
	document.getElementById("monitor").value="0";
}
function sqrts(){
	calculate();
	operate=1;
	calcul=6;
}
function reciprocal(){
	var numshow=Number(document.getElementById("monitor").value);
	if(numshow!=0){
	numshow=1/numshow;
	document.getElementById("monitor").value=numshow;
	}else{
		document.getElementById("monitor").value="不能以0为除数";
	}
}
function negatives(){
	var numshow=Number(document.getElementById("monitor").value);
	numshow=-numshow;
	document.getElementById("monitor").value=numshow;
}
function CE(){
	var str=String(document.getElementById("monitor").value);
	str="0";
	document.getElementById("monitor").value=str;
	operate=0;
	quit=0;
}
function MC(){
	memory="0";
	document.getElementById("monitor").value="0";
	document.getElementById("monitor").style.backgroundImage="url(img/monitor.png)";
}
function MR(){
	document.getElementById("monitor").value=memory;
}
function MS(){
	memory=String(document.getElementById("monitor").value);
	document.getElementById("monitor").style.backgroundImage="url(img/monitor1.png)";
}
function Mand(){
	var now=Number(document.getElementById("monitor").value);
	memory=now+Number(memory);
	document.getElementById("monitor").style.backgroundImage="url(img/monitor1.png)";
	document.getElementById("monitor").value=0;
}
function Mm(){
	var now = Number(document.getElementById("monitor").value);
	memory=Number(memory)-now;
}
function ev(){
	if(eval(document.getElementById("monitor").value!=null)){
		document.getElementById("monitor").value=eval(document.getElementById("monitor").value);
	}
}
function ct(){
	document.getElementById("monitor").value="";
}
