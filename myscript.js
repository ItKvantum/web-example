/* Kvadratiki */
window.onload = function() 
{
    var drawingCanvas = document.getElementById('сanvas');
    if(drawingCanvas && drawingCanvas.getContext) 
    {
        var context = drawingCanvas.getContext('2d');
        
        for (var i = 0; i < 15; i++) 
        {
           
            for (var j = 0; j < 15; j++) 
            {
              context.save();
              context.fillStyle = 'rgb( ' + (27 * j) + ', ' + (30 * i) +' , '+(255-2*i*j)+')';
              context.translate(20 + j * 40, 20 + i * 40);
              context.fillRect(35, 0, 35, 35);
              context.restore();
            }
          }     
        
    }
   }

/* Gradient */
   var canvas = document.getElementById("myCanvas"), 
   context = canvas.getContext("2d"),
   gradient = context.createLinearGradient(2, 2, 2, 697);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.21, "orange");
gradient.addColorStop(0.35, "yellow");
gradient.addColorStop(0.6, "green");
gradient.addColorStop(0.8, "blue");
gradient.addColorStop(1, "purple");


context.fillStyle = gradient;
context.fillRect(2, 2, 697, 697);
context.strokeRect(0, 0, 700, 700);

