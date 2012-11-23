 var p_line_height = parseInt($('p:last').css('line-height'));

  $('<canvas style="display: none" width="10px" height="100px" id="bgcanvas" ></canvas>').appendTo('body');

  var canvas = document.getElementById("bgcanvas");

  canvas.width = 1;
  canvas.height = p_line_height;

  var context = canvas.getContext("2d");
  context.fillStyle = "rgba(0, 0, 0, .1)";
  context.fillRect(0, 0, p_line_height, 1);

  $('body').css('background', 'url("'+ canvas.toDataURL() +'")');

