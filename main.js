var width = 500;
var height = 500;
var diff = 0;

function hline(layer, h){
  line = new Kinetic.Line({
    points: [100, h, 400, h],
    stroke: 'black',
  });
  layer.add(line);
}


function createPoly(hdiff, vdiff){
  return new Kinetic.Polygon({
    points: [0,height, 0,250+hdiff+vdiff, width,250-hdiff+vdiff, width,height],
    fill: '#00D2FF',
  });
}

function updatePoly(stage, diff, diff2){
  var layer = new Kinetic.Layer();
  poly = createPoly(diff, diff2);
  layer.add(poly);
  

  var mainLine = new Kinetic.Line({
    points: [0, 250, 240, 250, 250, 240, 260, 250, 500, 250],
    stroke: 'black',
  });
  layer.add(mainLine);

  hline(layer, 50);
  hline(layer, 100);
  hline(layer, 150);
  hline(layer, 200);
  hline(layer, 300);
  hline(layer, 350);
  hline(layer, 400);
  hline(layer, 450);


  stage.clear();
  stage.add(layer);
}

var stage = new Kinetic.Stage({
  container: 'container',
  width: 500,
  height: 500
});

var vdiff = 0;
var hdiff = 0;
var default_diff = 2;

var aleft = 37;
var aup = 38;
var aright = 39;
var adown = 40;

var el = document.getElementById("body");
el.onkeydown = function(evt) {
  evt = evt || window.event;
  key = evt.keyCode;

  if (key == aleft) hdiff = hdiff + default_diff;
  if (key == aright) hdiff = hdiff - default_diff;

  if (key == aup) vdiff = vdiff + default_diff;
  if (key == adown) vdiff = vdiff - default_diff;
};

var hx = 1;
var vx = 1;
var hi = 0;
var vi = 0;

var loop = setInterval(function() {
  vdiff = vdiff+Math.floor((Math.random()*10)/2)*vx;
  hdiff = hdiff+Math.floor((Math.random()*10)/2)*hx;

  hi++;
  vi++;

  if (vi == 100) {vi = 0; vx = vx*-1}
  if (hi == 100) {hi = 0; hx = hx*-1}

  updatePoly(stage, hdiff, vdiff);
}, 100);