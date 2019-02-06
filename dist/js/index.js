'use strict';

(function () {
  var d = void 0;
  var h = void 0;
  var m = void 0;
  var s = void 0;

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');

  var setClock = function setClock() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hour.style.transform = 'rotate(' + (h / 12 * 360 + m / 60 * 30 + 270) + 'deg)';
    min.style.transform = 'rotate(' + (m / 60 * 360 + 180) + 'deg)';
    sec.style.transform = 'rotate(' + (s / 60 * 360 + 180) + 'deg)';
  };
  setInterval(setClock, 1000);
})();
//# sourceMappingURL=index.js.map
