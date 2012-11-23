// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"$('#main').hide()"});
  window.close();
}


/*

code:"console.log(nt.body.style.backgroundColor='" + e.target.id + "'"

  var p_line_height = parseInt($('p:last').css('line-height'));

  $('<canvas style="display: none" width="10px" height="100px" id="bgcanvas" ></canvas>').appendTo('body');

  var canvas = document.getElementById("bgcanvas");

  canvas.width = 1;
  canvas.height = p_line_height;

  var context = canvas.getContext("2d");
  context.fillStyle = "rgba(0, 0, 0, .1)";
  context.fillRect(0, 0, p_line_height, 1);

  $('body').css('background', 'url("'+ canvas.toDataURL() +'")');
*/

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
