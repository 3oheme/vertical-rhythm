function click(e) {

  load_url_configuration();

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

  set_url_configuration(p_line_height, p_offset, 'example.com');

  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundImage='url("+ image  +")';document.body.style.backgroundPosition='0 " + p_offset + "px';"}); 
}

function set_url_configuration(spacing, offset, url) {
  var site_config = {};
  site_config['spacing'] = spacing;
  site_config['offset'] = offset;
  var current_url = url;
  
  chrome.storage.sync.set({current_url: site_config});
}

function load_url_configuration() {
  chrome.storage.sync.get('example.com', function(site_configuration) {
    if (typeof site_configuration != 'undefined') {
      document.getElementById('spacing').value = site_configuration['spacing'];
      document.getElementById('offset').value = site_configuration['offset'];
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  load_url_configuration();
  click();
  document.querySelector('#apply').addEventListener('click', click);
});
