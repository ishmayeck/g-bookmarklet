javascript:(function() {
	window.g = function() {
		function G(element)
		{
			if (element.childNodes.length > 0) 
			for (var i = 0; i < element.childNodes.length; i++) {
			    if(element.childNodes[i].nodeName.toLowerCase() !== 'style' && element.childNodes[i].nodeName.toLowerCase() !== 'script') {
                    G(element.childNodes[i]);
                }
			}

            if (element.nodeType === Node.TEXT_NODE && element.nodeValue !== '') {
				element.textContent = element.textContent.replace(/[a-z]/g, 'g').replace(/[A-Z]/g, 'G');
			}
		}
		var html = document.getElementsByTagName('html')[0];
			G(html);
		};
	g();
})();
