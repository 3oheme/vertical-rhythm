// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  var p_line_height = document.getElementById('spacing').value;

  var canvas = document.getElementById("bgcanvas");
  
  canvas.width = 1;                                                             
  canvas.height = p_line_height;                                                
                                                                                
  var context = canvas.getContext("2d");                                        
  context.fillStyle = "rgba(0, 0, 0, .1)";                                      
  context.fillRect(0, 0, p_line_height, 1);
  var image = canvas.toDataURL()


  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundImage='url("+ canvas.toDataURL()  +")';"});
  //window.close();

}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#apply').addEventListener('click', click);
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    document.getElementById('spacing').value = 88;
   // document.getElementById('spacing').value = request.size;
});
