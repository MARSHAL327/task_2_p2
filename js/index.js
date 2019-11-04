var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

// =======================
// ========ФУНКЦИИ========
// =======================

function toRad(angle){
  return (angle*pi)/180;
}

function Circle(angle1, angle2, color){
  ctx.lineWidth = 30;
  ctx.strokeStyle = color;
  ctx.arc(300, 300, 240, toRad(angle1), toRad(angle2), true);
  ctx.stroke();
}

function fillCircle(pos1, pos2, color){
  ctx.lineWidth = 10;
  ctx.fillStyle = color;
  ctx.strokeStyle = "#fff";
  ctx.arc(pos1, pos2, 30, toRad(0), toRad(360), true);
  ctx.stroke();
  ctx.fill();
}

function text(text, pos1, pos2){
  ctx.font = "bold normal 20px sans-serif";
  ctx.fillStyle = "#fff";
  ctx.fillText(text, pos1, pos2);
}

// =======================
// ========ОСНОВНОЙ КОД========
// =======================

// 1-й круг
ctx.beginPath();
Circle(45, 282.6, "#40000f");

ctx.beginPath();
fillCircle(518, 200, "#40000f");

ctx.beginPath();
text("34%", 500, 207);

// 2-й круг
ctx.beginPath();
Circle(281.6, 202.4, "#6c001a");

ctx.beginPath();
fillCircle(180, 93, "#6c001a");

ctx.beginPath();
text("22%", 162, 99);

// 3-й круг
ctx.beginPath();
Circle(201.4, 122.2, "#8e0022");

ctx.beginPath();
fillCircle(75, 385, "#8e0022");

ctx.beginPath();
text("22%", 57, 392);

// 4-й круг
ctx.beginPath();
Circle(121.2, 46, "#bf002e");

ctx.beginPath();
fillCircle(330, 535, "#bf002e");

ctx.beginPath();
text("22%", 312, 540);
