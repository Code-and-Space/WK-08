function draw() {
  background(255);
  rectMode(CENTER);

  // Camilo
  noStroke();
  for (i=0; i < crectangles.length; i++) {
    crectanglePosition[i].moveRectangle();
    crectanglePosition[i].TracingRectangles();
  }

  for (i=0; i < ctriangles.length; i++) {
    ctrianglePosition[i].moveTriangle();
    ctrianglePosition[i].TracingTriangles();
  }

  for (i=0; i < ccircles.length; i++) {
    ccirclePosition[i].moveCircle();
    ccirclePosition[i].TracingCircles();
  }

  for (i=0; i < clines.length; i++) {
    clinePosition[i].moveLine();
    clinePosition[i].TracingLines();
  }

  for (i=0; i < carcs.length; i++) {
    carcPosition[i].moveArc();
    carcPosition[i].TracingArcs();
  }
//end of Camilo


// Jamie Guitar START
  for (let i = 0; i < circles.length; i++) {
    circleaArray[i].drawCircle();
    circleaArray[i].traceCircle();
  }

  for (let i = 0; i < rects.length; i++) {
    rectArray[i].drawRect();
  }
  for (let i = 0; i < quads.length; i++) {
    quadArray[i].drawQuad();
  }
// Jamie Guitar END



  fill(0)
  for (let i=0; i < rectangles.length; i++) {
    rectangleArray[i].drawbox();
    rectangleArray[i].tracingBox();
  }






  for (let i=0; i < lines.length; i++) {
    lineArray[i].drawline();
  }

  for (let i=0; i < cirs.length; i++) {
    cirArray[i].drawcircle();
    cirArray[i].tracingCircle();
  }

  for (let i=0; i < ellipses.length; i++) {
    ellipseArray[i].drawellipse();
  }

  for (let n = 0; n < 3; n++){
    lines[n].draftLine()
    outerBox.draftBox()
    baseLeft.draftLine()
    baseRight.draftLine()
    playLine.draftLine()
    cutOutLine.draftLine()
    baseLeft.moveLineV()
    baseRight.moveLineV()
    playLine.moveLineH()
    cutOutLine.moveLineH()
    bassInnerCircleR.draftCircle()
    bassInnerCircleL.draftCircle()
    bassOuterCircleR.draftCircle()
    bassOuterCircleL.draftCircle()
    speakerOuterCircleR.draftCircle()
    speakerOuterCircleL.draftCircle()
    speakerInnerCircleR.draftCircle()
    speakerInnerCircleL.draftCircle()
  }

  for (i = 0; i < halfCircles.length; i++){
    push();
    halfCirclePosition[i].drawHalfCircle();
    halfCirclePosition[i].traceObjectGreen();
    halfCirclePosition[i].moveX();
    halfCirclePosition[i].moveY();
    pop();
  }

  for (i = 0; i < seeds.length; i++){
    push();
    seedsPosition[i].drawSeed();
    seedsPosition[i].traceObjectPink();
    seedsPosition[i].moveX();
    seedsPosition[i].moveY();
    pop();
  }
  for (let i = 0; i < shapes01.length; i++) {
    shapeArray01[i].drawBox();
    shapeArray01[i].drawCircle();
    shapeArray01[i].moveShape();
    shapeArray01[i].traceObject();
  }
  for (let i = 0; i < shapes.length; i++) {
    shapeArray[i].drawBox();
    shapeArray[i].moveRect();
    shapeArray[i].trackingLines();


  }
  for (let i = 0; i < circleslist.length; i++) {
    circleArray[i].drawCircle();
    circleArray[i].moveCircle();
    circleArray[i].trackingLines();
  }
  //Anna and XUWEN
  for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i].moveBox();
    flaskArray[i].trackingLines();
    flaskArray[i].drawCircle();
    flaskArray[i].drawArc();
  }

  for (let i= 0; i< boxes.length; i++){
    boxArray[i].drawBox();
    boxArray[i].tracingObject();
  }


  // XuWen START
  for (let i=0; i < xwtriangles.length; i++) {
    xwtriangleArray[i].drawTriangle();
  }

  for (let i= 0; i< xwcircles.length; i++){
    xwcircleArray[i].drawCircle();
    xwcircleArray[i].tracingObject();
  }
  // having a problem here
  rotate(angle);
  angle = angle + speed
  for (let i= 0; i< xwtriangles.length; i++){
    xwtriangleArray[i].drawTriangle();
  }
  // XuWen END
}
