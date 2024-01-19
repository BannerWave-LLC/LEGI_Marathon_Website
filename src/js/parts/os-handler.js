window.addEventListener('load', function () {
    detectOsHandler();
});

/**
 *	Checks if it's a mac or ios device and adds a class to body if it is.
 * 
 * @return {Void}
 */
function detectOsHandler() {
	const isMacOs = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    
    if (!isMacOs) {
        document.body.classList.add('os-not-mac');
    }
}