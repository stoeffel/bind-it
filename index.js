export function bindFirst () {
	if (typeof this !== 'function') {
		throw new TypeError('Expected a function');
	}

	var fn = this;

	return function(...args) {
		return fn.call(fn, this, ...args);
	};
};

export function bindLast () {
	if (typeof this !== 'function') {
		throw new TypeError('Expected a function');
	}

	var fn = this;

	return function(...args) {
		return fn.call(fn, ...args, this);
	};
};
