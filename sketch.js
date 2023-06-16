function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Dibujar una camisa
  fill(255, 0, 0); // Color rojo
  rect(150, 150, 100, 150);

  // Dibujar pantalones
  fill(0, 0, 255); // Color azul
  rect(150, 300, 100, 100);

  // Dibujar zapatos
  fill(0); // Color negro
  rect(135, 400, 130, 30);

  // Dibujar cabeza
  fill(255, 204, 153); // Color piel
  ellipse(200, 100, 100, 100);

  // Dibujar ojos
  fill(255); // Color blanco
  ellipse(180, 90, 20, 20);
  ellipse(220, 90, 20, 20);

  // Dibujar boca
  fill(0); // Color negro
  rect(180, 120, 40, 10);
}
