function getRandomFromRange(min, max){
  return Math.random() * (max - min) + min;
}

function getRandomFromRangeInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DegToRad(deg) {
    return (Math.PI/180)*deg;
} 

function RadToDeg(rad) {
    return (180/Math.PI)*rad;
}

function getXOnCircle(radius_,angle_){
    return (radius_* Math.cos(DegToRad(angle_)));
}

function getYOnCircle(radius_,angle_){
    return (radius_* Math.sin(DegToRad(angle_)));
}
function windowH() {
	return ($(window).height());
}
function windowW() {
	return ($(window).width());
}
function windowHalfH() {
	return ($(window).width()*.5);
}
function windowHalfW() {
	return ($(window).height()*5);
}