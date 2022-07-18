function basic(){
    confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  }
  
  function randomDirection(){
   confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  }); 
  }
  
  function makeItRain() {
    document.getElementById("Partybtn").disabled = true;
    var end = Date.now() + (111 * 1000);
  
  // go Buckeyes!
  var colors = ['#6064f4', '#ffffff'];
  
  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
    else {
      document.getElementById("makeItRain").disabled = false;
    }
  };
    frame();
  }
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var aud = document.getElementById("Partybtn").children[0];

        function Partybtn() {
        aud.play();
        aud.volume = 0.07
        makeItRain();
        }
