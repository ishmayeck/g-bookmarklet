javascript:(function () {
  function ggggggg(g) {
    return g.replace(/[a-z]/g, 'g').replace(/[A-Z]/g, 'G');
  }

  function ggGgggggggg(gggg, gg) {
    if (gg.getAttribute && gg.getAttribute(gggg))
      gg.setAttribute(gggg, ggggggg(gg.getAttribute(gggg)));
  }

  window.g = function () {
    function G(g) {
      var gggggggGggg = ["style", "script"];
      var gggggggggg = ["placeholder", "alt", "value", "title"];

      if (g.childNodes.length > 0) {
        g.childNodes.forEach(function (gggg) {
          if (gggggggGggg.indexOf(gggg.nodeName.toLowerCase()) === -1) {
            G(gggg);
          }
        })
      }

      if (g.nodeType === Node.TEXT_NODE && g.nodeValue !== '') {
        g.textContent = ggggggg(g.textContent);
      } else {
        gggggggggg.forEach(function (gggg) {
          ggGgggggggg(gggg, g);
        });
      }
    }

    var html = document.getElementsByTagName('html')[0];
    G(html);
  };
  g();
})();
