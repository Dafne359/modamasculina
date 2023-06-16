function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255, 0, 0); // Color rojo
  rect(150, 150, 100, 150);

  fill(0, 0, 255); // Color azul
  rect(150, 300, 100, 100);

  fill(0); // Color negro
  rect(135, 400, 130, 30);

  fill(255, 204, 153); // Color piel
  ellipse(200, 100, 100, 100);

  fill(255); // Color blanco
  ellipse(180, 90, 20, 20);
  ellipse(220, 90, 20, 20);

  fill(0); // Color negro
  rect(180, 120, 40, 10);
}
