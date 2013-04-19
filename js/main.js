function pothagTherom(a,b,c){
	if(a == 0){
		answerB = Math.pow(b,2);
		answerC = Math.pow(c,2);
		answerD = answerC - answerB;
		answer = Math.sqrt(answerD);
		return answer;
	}else if(b == 0){
		answerA = Math.pow(a,2);
		answerC = Math.pow(c,2);
		answerD = answerC - answerA;
		answer = Math.sqrt(answerD);
		return answer;
	}else if(c == 0){
		answerA = Math.pow(a,2);
		answerB = Math.pow(b,2);
		answerD = answerA + answerB;
		answer = Math.sqrt(answerD);
		return answer;
	}else{
		return "Syntax error";
	}
}

function circumCircleDiamater(d){
	answer = d * Math.PI;
	return answer;
}

function circumCircleRadius(r){
	answerA = r * 2;
	answer = answerA * Math.PI;
	return answer;
}

function areaRectangleBaseHeight(b,h){
	answer = b * h;
	return answer;
}

function areaRectangleLengthWidth(l,w){
	answer = l * w;
	return answer;
}

function areaParallelogram(b,h){
	answer = b * h;
	return answer;
}

function areaSquare(s){
	answer = Math.pow(s,2);
	return answer;
}

function areaTriangle(b,h){
	answerA = b * h;
	answer = answerA * 0.5;
	return answer;
}

function areaTrapezoidBaseBaseHeight(b,c,h){
	answerA = b + c;
	answerB = answerA * h;
	answer = answerB * 0.5;
	return answer;
}

function areaRhombus(d,c){
	answerA = d * c;
	answer = answerA * 0.5;
	return answer;
}

function areaKite(d,c){
	answerA = d * c;
	answer = answerA * 0.5;
	return answer;
}

function areaCircle(r){
	answerA = Math.pow(r,2);
	answer = answerA * Math.PI;
	return answer;
}

function areaRegularPolygon(a,p){
	answerA = a * p;
	answer = answerA * 0.5;
	return answer;
}

function surfaceAreaCube(s){
	answerA = Math.pow(s,2);
	answer = 6 * answerA;
	return answer;
}

function surfaceAreaPrismPHB(p,h,b){
	answerA = p * h;
	answerB = 2 * b;
	answer = answerA + answerB;
	return answer;
}

function surfaceAreaCylinderRH(r,h){
	return ((2 * Math.PI)*(r * h))+((2 * Math.PI)*(Math.pow(r,2)));
}
function surfaceAreaPyramidPLB(p,l,b){
	return ((p * l)* 0.5)+ b;
}
function cos(a){
	return Math.cos(a);
}
function tan(a){
	return Math.tan(a);
}
function sin(a){
	return Math.sin(a);
}
function abs(a){
	return Math.abs(a);
}
function acos(a){
	return Math.acos(a);
}
function asin(a){
	return Math.asin(a);
}
function atan(a){
	return Math.atan(a);
}
function atan2(a,b){
	return Math.atan2(a,b);
}
function ceil(a){
	return Math.ceil(a);
}
function exp(a){
	return Math.exp(a);
}
function floor(a){
	return Math.floor(a);
}
function log(a){
	return Math.log(a);
}
function pow(a,b){
	return Math.pow(a,b);
}
function random(){
	return Math.random();
}
function random10(){
	return Math.floor((Math.random()*10)+1);
}
function random100(){
	return Math.floor((Math.random()*10)+10);
}
function random1000(){
	return Math.floor((Math.random()*10)+100);
}
function round(a){
	return Math.round(a);
}
function sqrt(a){
	return Math.sqrt(a);
}
function probabilityFormula(a,b){
	return (a / b) * 100;
}
function pointSlopeForm(a,b,c){
	return (a * b) + c;
}
function standardForm(a,b,c,d){
	return (a * b) + (c * d);
}
function istiFormula(a,b,c){
	return Math.sqrt((a * b));
}
function cube(a){
	return Math.pow(a,3);
}
function zero(a){
	return a * 0;
}
function dayTmonth(a){
	return a / 31;
}
function monthTday(a){
	return a * 31;
}
function dayThour(a){
	return a * 24;
}
function HourTday(a){
	return a / 24;
}
function minThour(a){
	return a / 60;
}
function hourTmin(a){
	return a * 60;
}
function minTsec(a){
	return a * 60;
}
function secTmin(a){
	return a / 60;
}
function inchTfeet(a){
	return a / 12;
}
function feetTinch(a){
	return a * 12;
}
function weekTday(a){
	return a * 7;
}
function dayTweek(a){
	return a / 7;
}
function yearTday(a){
	return a * 365;
}
function dayTyear(a){
	return a / 365;
}
function yearTmonth(a){
	return a * 12;
}
function monthTyear(a){
	return a / 12;
}
function dayTmin(a){
	return a * 1440;
}
function minTday(a){
	return a / 1440;
}