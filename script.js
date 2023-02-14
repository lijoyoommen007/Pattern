const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let radius = -200;
let phase = 1;

let circleRadius = 0;
let maxRadius = Math.min(canvas.width, canvas.height) / 2;

function animate() {
  requestAnimationFrame(animate);

  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw lines for the first pattern
  for (let i = 0; i < 20; i++) {
    let angle = (i / 20) * Math.PI * 2;
    let x1 = Math.cos(angle) * (canvas.width / 2 - radius);
    let y1 = Math.sin(angle) * (canvas.height / 2 - radius);
    let x2 = Math.cos(angle + phase-3) * (canvas.width / 2 - radius);
    let y2 = Math.sin(angle + phase-3) * (canvas.height / 2 - radius);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 3;
    context.stroke();
  }

  // draw lines for the second pattern
  for (let i = 0; i < 20; i++) {
    let angle = (i / 20) * Math.PI * 2;
    let x1 = Math.cos(angle) * (canvas.width / 2 - 2 * 0);
    let y1 = Math.sin(angle) * (canvas.height / 2 - 2 * 0);
    let x2 = Math.cos(angle + phase) * (canvas.width / 2 - 2 * 0);
    let y2 = Math.sin(angle + phase) * (canvas.height / 2 - 2 * 0);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 3.5;
    context.stroke();
  }
  
  // increase radius and phase
  phase += 0.01;
}

animate();
