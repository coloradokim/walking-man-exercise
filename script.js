var stickMan = document.getElementById('stickMan');

stickMan.style.left = '0';
stickMan.style.position= 'relative';


var move = function() {
    stickMan.style.left = parseInt(stickMan.style.left) + 10 + 'px';
  };

setInterval(move, 200);
