var OldRange = (206 - 29)  
var NewRange = (100 - 0)  

var pixels = document.querySelectorAll('rect');
var reset = [];

for (var i = 0; i < pixels.length; i++){
    reset.push(pixels[i].getAttribute("fill"));
};

function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
  
  for (var i = 0; i < reset.length; i++){
    originalColor = reset[i];
        pixels[i].setAttribute("fill", originalColor);
  };

  
  for (var i = 0; i < pixels.length; i++){
    var input = (pixels[i].getAttribute("fill"));
    var output = tinycolor(input).getBrightness();
    normOutput = (((output - 29) * NewRange) / OldRange) + 0;
   
  var shade = normOutput;
   
  if (shade <= vol) {
    //paint it black
    pixels[i].setAttribute("fill", "black");
     console.log(shade+":"+vol);
  }else{
    //paint it white
    pixels[i].setAttribute("fill", "white");
  };
};
  
};


outputUpdate(50);