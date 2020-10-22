function setup() {
  // background('red')
  createCanvas(800, 800);
  angleMode(DEGREES);


  //Camilo
  for (i=0; i < crectangles.length; i++) {
    crectangles[i].speedX = 0;
    crectangles[i].speedY = 0;
    crectanglePosition[i] = new CamiloRectangleMoved(crectangles[i]);
  }

  for (i=0; i < ccircles.length; i++) {
    ccircles[i].speedX = 0;
    ccircles[i].speedY = 0;
    ccirclePosition[i] = new CamiloCircleMoved(ccircles[i]);
  }

  for (i=0; i < clines.length; i++) {
    clines[i].speedX = 0;
    clines[i].speedY = 0;
    clinePosition[i] = new CamiloLineMoved(clines[i]);
  }

  for (i=0; i < carcs.length; i++) {
    carcs[i].speedX = 0;
    carcs[i].speedY = 0;
    carcPosition[i] = new CamiloArcMoved(carcs[i]);
  }

  for (i=0; i < ctriangles.length; i++) {
    ctriangles[i].speedX = 0;
    ctriangles[i].speedY = 0;
    ctrianglePosition[i] = new CamiloTriangleMoved(ctriangles[i]);
  }
  //Camilo end



  //Zoe Setup
  for (i=0; i < zboxes.length; i++) {
    zboxes[i].speedX = 0;
    zboxes[i].speedY = 0;
    zboxPosition[i] = new ZoeBoxMoved(zboxes[i]);
  }
  for (i=0; i < zcircles.length; i++) {
    zcircles[i].speedX = 0;
    zcircles[i].speedY = 0;
    zcirclePosition[i] = new ZoeCircleMoved(zcircles[i]);
  }
  //Zoe end





  //ksy start

  for (let i = 0; i < ksyboxes.length; i++) {
    ksyboxes[i].speedX = 0;
    ksyboxes[i].speedY = 0;
    ksyboxPosition[i] = new KsyMovedBox(ksyboxes[i]);
  }

  for (let i = 0; i < ksyloops.length; i++){
    ksyloops[i].speedX = 0;
    ksyloops[i].speedY = 0;
    ksyloopPosition[i] = new KsyLoop(ksyloops[i]);
  }

  for (let i = 0; i < ksyboxes00.length; i++) {
    ksyboxes00[i].speedX = 0;
    ksyboxes00[i].speedY = 0;
    ksyboxPosition00[i] = new KsyMovedBox00(ksyboxes00[i]);
  }

  for (let i = 0; i < ksyboxes01.length; i++) {
    ksyboxes01[i].speedX = 0;
    ksyboxes01[i].speedY = 0;
    ksyboxPosition01[i] = new KsyMovedBox01(ksyboxes01[i]);
  }

  for (let i = 0; i < ksycircles.length; i++){
    ksycircles[i].speedX = 0;
    ksycircles[i].speedY = 0;
    ksycirclePosition[i] = new KsyCircle(ksycircles[i]);
  }

  for (let i = 0; i < ksycircles01.length; i++){
    ksycircles01[i].speedX = 0;
    ksycircles01[i].speedY = 0;
    ksycirclePosition01[i] = new KsyCircle01(ksycircles01[i]);
  }

  //ksy end


  for (let i = 0; i < circles.length; i++) {
    circles[i].speedX = 0;
    circles[i].speedY = 0;
    circleaArray[i] = new Guitar(circles[i]);
  }
  for (let i = 0; i < rects.length; i++) {
    rects[i].speedX = 0;
    rects[i].speedY = 0;
    rectArray[i] = new Guitar(rects[i]);
  }
  for (let i = 0; i < quads.length; i++) {
    quads[i].speedX = 0;
    quads[i].speedY = 0;
    quadArray[i] = new Guitar(quads[i]);
  }

  for (let i = 0; i < halfCircles.length; i++){
    halfCircles[i].speedX = 0;
    halfCircles[i].speedY = 0;
    halfCirclePosition[i] = new Watermelon(halfCircles[i]);
  }
  for (let i = 0; i < seeds.length; i++){
    seeds[i].speedX = 0;
    seeds[i].speedY = 0;
    seedsPosition[i] = new Seed(seeds[i]);
  }
  for (let i = 0; i < shapes01.length; i++){
    shapes01[i].speedX = 0;
    shapes01[i].speedY = 0;
    shapeArray01[i] = new MovedShape(shapes01[i]);
  }
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].speedX = 0;
    shapes[i].speedY = 0;
    shapeArray[i] = new Movedshapes(shapes[i]);
  }
  for (let i = 0; i < circleslist.length; i++) {
    circleslist[i].speedX = 0;
    circleslist[i].speedY = 0;
    circleArray[i] = new Circle(circleslist[i]);
  }

  angleMode(RADIANS);

  for (let i=0; i < rectangles.length; i++) {
    rectangles[i].speedX = 0;
    rectangles[i].speedY = 0;
    rectangleArray[i] = new Drone(rectangles[i]);
  }

  for (let i=0; i < triangles.length; i++) {
    triangles[i].speedX = 0;
    triangles[i].speedY = 0;
    triangleArray[i] = new Drone (triangles[i]);
  }

  for (let i=0; i < lines.length; i++) {
    lines[i].speedX = 0;
    lines[i].speedY = 0;
    lineArray[i] = new Drone (lines[i]);
  }

  for (let i=0; i < cirs.length; i++) {
    cirs[i].speedX = 0;
    cirs[i].speedY = 0;
    cirArray[i] = new Drone (cirs[i]);
  }

  for (let i=0; i < ellipses.length; i++) {
    ellipses[i].speedX = 0;
    ellipses[i].speedY = 0;
    ellipseArray[i] = new Drone (ellipses[i]);
  }
  // Anna and Xuwen

  for (let i = 0; i < flaskElements.length; i++) {
    flaskElements[i].speedX = 0;
    flaskElements[i].speedY = 0;
    flaskArray[i] = new MovedFlask (flaskElements[i]);
  }





  push();
  rectMode(CENTER);
  // angleMode(DEGREES);
  for(let i= 0; i<boxes.length; i++){
    boxes[i].speedX = 0;
    boxes[i].speedY = 0;
    boxArray[i] = new BoxMoved(boxes[i]);
  }

  for(let i= 0; i<xwcircles.length; i++){
    xwcircles[i].speedX = 0;
    xwcircles[i].speedY = 0;
    xwcircleArray[i] = new CircleMoved(xwcircles[i]);
  }

  for(let i= 0; i<xwtriangles.length; i++){
    xwtriangles[i].speedX = 0;
    xwtriangles[i].speedY = 0;
    xwtriangleArray[i] = new TriangleMoved(xwtriangles[i]);
  }
  pop();

  outerBox = new OuterBox(50, 50, 1, 1);
  for (let n = 0; n < 3; n++)
  lines[0] = new Lines(52, 50, 70, 45, 50, 1.5, 1, 1);
  lines[1] = new Lines(70, 45, 525, 45, 50, 1.5, 1, 1);
  lines[2] = new Lines(525, 45, 548, 50, 50, 1.5, 1, 1);
  baseLeft = new Lines(125, 105, 150, 105, 10, 5, 2, 1);
  baseRight = new Lines(450, 105, 475, 105, 10, 5, 2, 1);
  playLine = new Lines(225, 71, 375, 71, 255, 1, 1, 1);
  cutOutLine = new Lines(200, 101, 400, 101, 255, 12, 1, 1);
  bassInnerCircleR = new Circles(525, 75, 30, 255, 255, 2, 2, 2);
  bassInnerCircleL = new Circles(75, 75, 30, 255, 255, 2, 4, 4);
  bassOuterCircleR = new Circles(75, 75, 25, 255, 5, 4, 2, 4);
  bassOuterCircleL = new Circles(525, 75, 25, 255, 5, 4, 4, 2);
  speakerOuterCircleR = new Circles(475, 75, 20, 5, 250, 4, 3, 3);
  speakerOuterCircleL = new Circles(125, 75, 20, 5, 250, 4, 6, 6);
  speakerInnerCircleR = new Circles(475, 75, 18, 255, 5, 2.5, 3, 6);
  speakerInnerCircleL = new Circles(125, 75, 18, 255, 5, 2.5, 6, 3);


  // Matt Sacha


  for (let i = 0; i < rectsMS.length; i++) {
    rectsMS[i].speedX = 0;
    rectsMS[i].speedY = 0;
    rectArrayMS[i] = new HeadphonesChaos(rectsMS[i]);
  }

  for (let i = 0; i < circlesMS.length; i++) {
    circlesMS[i].speedX = 0;
    circlesMS[i].speedY = 0;
    circleArrayMS[i] = new HeadphonesChaos(circlesMS[i]);
  }

  for (let i = 0; i < arcsMS.length; i++) {
    arcsMS[i].speedX = 0;
    arcsMS[i].speedY = 0;
    arcArrayMS[i] = new HeadphonesChaos(arcsMS[i]);
  }
  // Matt Sacha END



  // Tony start
  // need to fix Tony's circles
  for (let i=0;i < boxsTP.length;i++){
    boxsTP[i].speedX = 0;
    boxsTP[i].speedY = 0;
    boxArrayTP[i]= new boxMoved(boxsTP[i]);
  }
  // Tony END


  // Tyler Start
  for (let i = 0; i < rectsTB.length; i++) {
    rectsTB[i].speedX = 0;
    rectsTB[i].speedY = 0;
    rectArrayTB[i] = new Group(rectsTB[i]);
  }
  for (let i = 0; i < circlesTB.length; i++) {
    circlesTB[i].speedX = 0;
    circlesTB[i].speedY = 0;
    circleArrayTB[i] = new Group(circlesTB[i]);
  }
  // Tyler END


  // Karim START
  for (let i = 0; i < boxesK.length; i++) {
    boxesK[i].speedX = 0;
    boxesK[i].speedY = 0;
    boxPositionK[i] = new MovedBoxK(boxesK[i]);
  }
  for (let i = 0; i < loops.length; i++){
    loops[i].speedX = 0;
    loops[i].speedY = 0;
    loopPosition[i] = new Loop(loops[i]);
  }
  // Karim END


  // Yukta START
  for (let i = 0; i < circlesY.length; i++){
    circlesY[i].speedX = 0;
    circlesY[i].speedY = 0;
    circlePositionY[i] = new CircleY(circlesY[i]);
  }

  for (let i = 0; i < circles01Y.length; i++){
    circles01Y[i].speedX = 0;
    circles01Y[i].speedY = 0;
    circlePosition01Y[i] = new Circle01Y(circles01Y[i]);
  }
  // Yukta END


  // Sonali START
  for (let i = 0; i < boxes00_Sonali.length; i++) {
    boxes00_Sonali[i].speedX = 0;
    boxes00_Sonali[i].speedY = 0;
    boxPosition00_Sonali[i] = new MovedBox00(boxes00_Sonali[i]);
  }

  for (let i = 0; i < boxes01_Sonali.length; i++) {
    boxes01_Sonali[i].speedX = 0;
    boxes01_Sonali[i].speedY = 0;
    boxPosition01_Sonali[i] = new MovedBox01(boxes01_Sonali[i]);
  }
  // Sonali END


}
