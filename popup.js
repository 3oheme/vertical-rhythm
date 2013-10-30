function click(e) {
  var p_line_height = document.getElementById('spacing').value;
  var p_offset = document.getElementById('offset').value;

  var canvas = document.getElementById("bgcanvas");
  
  canvas.width = 1;
  canvas.height = p_line_height;
                                                                                
  var context = canvas.getContext("2d");
  context.fillStyle = "rgba(0, 0, 0, .1)";
  context.fillRect(0, 0, p_line_height, 1);
  context.fillStyle = "rgba(255, 0, 0, .1)";
  context.fillRect(0, p_line_height/2, p_line_height, 1);
  var image = canvas.toDataURL()

  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundImage='url("+ image  +")';document.body.style.backgroundPosition='0 " + p_offset + "px';"});
}

document.addEventListener('DOMContentLoaded', function () {
  click();
  document.querySelector('#apply').addEventListener('click', click);
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    document.getElementById('spacing').value = 88;
   // document.getElementById('spacing').value = request.size;
});
