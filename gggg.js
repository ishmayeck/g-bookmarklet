javascript:(function() {
	window.g = function() {
		function G(g)
		{
			if (g.childNodes.length > 0)
			for (var i = 0; i < g.childNodes.length; i++) {
			    if(g.childNodes[i].nodeName.toLowerCase() !== 'style' && g.childNodes[i].nodeName.toLowerCase() !== 'script') {
                    G(g.childNodes[i]);
                }
			}

            if (g.nodeType === Node.TEXT_NODE && g.nodeValue !== '') {
				g.textContent = g.textContent.replace(/[a-z]/g, 'g').replace(/[A-Z]/g, 'G');
			}
		}
		var html = document.getElementsByTagName('html')[0];
			G(html);
		};
	g();
})();
