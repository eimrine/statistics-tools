(function () {
	'use strict';

	function average(elements) {
		var elementsSum = 0,
			elementsLength = elements.length,
			i;
		for (i = 0; i < elementsLength; i += 1) {
			elementsSum += elements[i];
		}
		return elementsSum / elementsLength;
	}

	function dispersion(elements, average) {
		var derivation,
			derivationSum = 0,
			elementsNumber = elements.length,
			i;
		for (i = 0; i < elementsNumber; i += 1) {
			derivation = Math.pow(elements[i] - average, 2);
			derivationSum += derivation;
		}
		return derivationSum / (elementsNumber - 1);
	}

	function standardDerivation(elements) {
		return Math.sqrt(dispersion(elements, average(elements)));
	}
	/*
	  dispersion([1, 3, 5, 6, 6, 7, 9, 11], average([1, 3, 5, 6, 6, 7, 9, 11])) / dispersion([5, 7, 9, 10, 10, 11, 13, 15], average([5, 7, 9, 10, 10, 11, 13, 15]); // 1 
	  standardDerivation([2, 4, 5, 8, 9, 10, 14, 16])/standardDerivation([6, 12, 15, 24, 27, 30, 42, 48]); // 0.3333333333333333
	*/  
}());
