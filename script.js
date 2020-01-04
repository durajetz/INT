const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
const size = Math.round(canvas.width / 50);
const xEnd = Math.round(canvas.width / size) * size;
const yEnd = Math.round(canvas.height / size) * size;
let directionLock = false;
