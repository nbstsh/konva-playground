import '../sass/main.scss';
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

let isMouseDown = false;

stage.on('mousedown touchstart', () => {
	console.log('mousedown touchstart');
	logCurrentPosition();
	isMouseDown = true;
});

stage.on('mouseup touchend', () => {
	console.log('mouseup');
	logCurrentPosition();
	isMouseDown = false;
});

stage.on('mousemove touchmove', () => {
	if (isMouseDown) {
		console.log('mousemove touchmove during MouseDown');
		logCurrentPosition();
	}
});

console.log(layer.toJSON());
