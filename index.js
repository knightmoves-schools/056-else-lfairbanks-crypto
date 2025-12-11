function calculateAward(points) {
	if (points > 99) {
		return "First Place";
	} else if (points > 49 && points < 100) {
		return "Second Place";
	} else {
		return "Participation Award";
	}
}

// expose to global scope for tests running in the browser
if (typeof window !== 'undefined') {
	window.calculateAward = calculateAward;
}

// export for Node.js environment for local tests
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { calculateAward };
}

