(function () {
  'use strict';

  var LS_FS = 'mc-a11y-font';
  var LS_HC = 'mc-a11y-hc';
  var FS_MAX = 3;

  function readFs() {
    var v = parseInt(localStorage.getItem(LS_FS), 10);
    if (isNaN(v)) return 1;
    return Math.max(0, Math.min(FS_MAX, v));
  }

  function writeFs(n) {
    n = Math.max(0, Math.min(FS_MAX, n));
    localStorage.setItem(LS_FS, String(n));
    document.documentElement.setAttribute('data-a11y-fs', String(n));
  }

  function readHc() {
    return localStorage.getItem(LS_HC) === '1';
  }

  function writeHc(on) {
    localStorage.setItem(LS_HC, on ? '1' : '0');
    document.documentElement.setAttribute('data-a11y-hc', on ? '1' : '0');
    var b = document.getElementById('a11y-contrast');
    if (b) b.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function toggleHc() {
    writeHc(!readHc());
  }

  function openVLibras() {
    var n = 0;
    function step() {
      var el = document.querySelector('[vw-access-button]');
      if (el) {
        el.click();
        return;
      }
      if (++n < 30) setTimeout(step, 100);
    }
    step();
  }

  function wire() {
    writeFs(readFs());
    writeHc(readHc());

    var down = document.getElementById('a11y-font-down');
    var reset = document.getElementById('a11y-font-reset');
    var up = document.getElementById('a11y-font-up');
    var hc = document.getElementById('a11y-contrast');
    var lib = document.getElementById('a11y-libras');

    if (down) {
      down.addEventListener('click', function () {
        writeFs(readFs() - 1);
      });
    }
    if (up) {
      up.addEventListener('click', function () {
        writeFs(readFs() + 1);
      });
    }
    if (reset) {
      reset.addEventListener('click', function () {
        writeFs(1);
      });
    }
    if (hc) hc.addEventListener('click', toggleHc);
    if (lib) lib.addEventListener('click', openVLibras);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
