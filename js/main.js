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
		console.log("x = " + answer);
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
	answerA = 2 * Math.PI;
	answerB = r * h;
	answerC = answerA * answerB;
	answerD = Math.pow(r,2);
	answerE = answerA * answerD;
	answer = answerC + answerE;
	return answer;
}

function surfaceAreaPyramidPLB(p,l,b){
	answerA = p * l;
	answerB = answerA * 0.5;
	answer = answerB + b;
	return answer;
}

function cos(a){
	answer = Math.cos(a);
	return answer;
}

function tan(a){
	answer = Math.tan(a);
	return answer;
}

function sin(a){
	answer = Math.sin(a);
	return answer;
}

function abs(a){
	answer = Math.abs(a);
	return answer;
}

function acos(a){
	answer = Math.acos(a);
	return answer;
}

function asin(a){
	answer = Math.asin(a);
	return answer;
}

function atan(a){
	answer = Math.atan(a);
	return answer;
}

function atan2(a,b){
	answer = Math.atan2(a,b);
	return answer;
}

function ceil(a){
	answer = Math.ceil(a);
	return answer;
}

function exp(a){
	answer = Math.exp(a);
	return answer;
}

function floor(a){
	answer = Math.floor(a);
	return answer;
}

function log(a){
	answer = Math.log(a);
	return answer;
}

function pow(a,b){
	answer = Math.pow(a,b);
	return answer;
}

function random(){
	answer = Math.random();
	return answer;
}

function random10(){
	answer = Math.floor((Math.random()*10)+1);
	return answer;
}

function random100(){
	answer = Math.floor((Math.random()*10)+10);
	return answer;
}

function random1000(){
	answer = Math.floor((Math.random()*10)+100);
	return answer;
}

function round(a){
	answer = Math.round(a);
	return answer;
}

function sqrt(a){
	answer = Math.sqrt(a);
	return answer;
}