vx = 0;
ax = 0.5;
vy = 0;
ay = 0;
r = 25;
x = 0;
w = 600;
h = 600;
y = h / 2;

function setup() {
	createCanvas(w, h);
	background(220);
}

function draw() {
	background(220);
	fill('brown');
	circle(x, y, r * 2);
	xAcceleration();
	yAcceleration();
}

function xAcceleration() {
	vx = vx + ax;
	x = x + vx;
	if (x < -r) {
		x = w + r;
	} else if (x > w + r) {
		x = -r;
	}
}

function yAcceleration() {
	vy = vy + ay;
	y = y + vy;
	if (y < -r) {
		y = w + r;
	} else if (y > h + r) {
		y = -r;
	}
}

AccelerazioneO = document.querySelector('#accelerazioneX');
AccelerazioneV = document.querySelector('#accelerazioneY');

AccelerazioneO.addEventListener('input', function (e) {
	ax = parseFloat(AccelerazioneO.value);
	console.log(typeof ax, ax);
});

AccelerazioneV.addEventListener('input', function (e) {
	ay = parseFloat(AccelerazioneV.value);
	console.log(typeof ay, ay);
});

resetX = document.querySelector('#xStopping');
resetY = document.querySelector('#yStopping');

resetX.addEventListener('click', function (e) {
	e.preventDefault();
	ax = 0;
	vx = 0;
	AccelerazioneO.value = 0;
});

resetY.addEventListener('click', function (e) {
	e.preventDefault();
	vy = 0;
	ay = 0;
	AccelerazioneV.value = 0;
});
