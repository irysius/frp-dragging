function getStyle(element, property) {
	var value = element.style[property] || window.getComputedStyle(element, null)[property];
	return value;
}

function getPosition(element) {
	var x = getStyle(element, 'left');
	x = parseInt(x) || 0;
	var y = getStyle(element, 'top');
	y = parseInt(y) || 0;
	return { x: x, y: y };
}

function addVectors(v1, v2) {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y
	};
}

function subtractVectors(v1, v2) {
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y
	};
}

function getMouseCoords(event) {
	return {
		x: event.clientX,
		y: event.clientY
	};
}