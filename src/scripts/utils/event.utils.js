let alreadyTested = false;
let passiveSupported = false;

const isSupported = () => {
	if (alreadyTested) return passiveSupported;
	alreadyTested = true;
	let opts = Object.defineProperty({}, 'passive', {
		get: () => {
			passiveSupported = true;
		}
	});
	// Test via a getter in the options object to see if the passive property is accessed
	try {
		
		window.addEventListener('test', null, opts);
	} catch (e) {
		return passiveSupported;
	}
	window.removeEventListener('test', null, opts);
	return passiveSupported;
};

const passiveEvent = () => {
	return isSupported() ? { passive: true } : false;
};

export { passiveEvent };