import Konva from 'konva';

const stage = new Konva.Stage({
	container: 'container',
	width: window.innerWidth,
	height: window.innerHeight
});

const layer = new Konva.Layer();

// add line
const line = new Konva.Line({
	x: 100,
	y: 50,
	points: [73, 70, 340, 23, 450, 60, 500, 20],
	stroke: 'red',
	tension: 1
});

layer.add(line);

stage.add(layer);

/* Konvas Event ========================
- mouseover, mousemove, mouseout, mouseenter, mouseleave, mousedown, mouseup, 
- wheel, contextmenu, click, dblclick, 
- touchstart, touchmove, touchend, 
- tap, dbltap, 
- dragstart, dragmove, and dragend 
=======================================*/

const logCurrentPosition = () => {
	const mousePos = stage.getPointerPosition();
	console.log(mousePos);
};

let currentLine;
const initLine = () => {
	currentLine = new Konva.Line({
		x: 0,
		y: 0,
		points: [],
		stroke: 'red',
		tension: 1
	});
	layer.add(currentLine);
};

const addPoints = ({ x, y }) => {
	if (!x || typeof x !== 'number' || !y || typeof y !== 'number') return;

	currentLine.points(currentLine.points().concat([x, y]));
};

let isMouseDown = false;

stage.on('mousedown touchstart', () => {
	console.log('mousedown touchstart');
	logCurrentPosition();
	isMouseDown = true;
	initLine(stage.getPointerPosition());
});

stage.on('mouseup touchend', () => {
	console.log('mouseup');
	logCurrentPosition();
	isMouseDown = false;
	console.log(currentLine);
});

stage.on('mousemove touchmove', () => {
	if (isMouseDown) {
		console.log('mousemove touchmove during MouseDown');
		logCurrentPosition();
		addPoints(stage.getPointerPosition());
		layer.draw();
	}
});

console.log(layer.toJSON());
