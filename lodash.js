let _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // 1. Returns the first element of an array.
_.first = function(array) {
  if (array.length === 0) {
    return 0;
  }
    return array[0];
};

 // 2. Returns the first n number of elements in an array.
_.take = function(array, n) {
  if (!n) {
    n = 1;
  }
	 return array.slice(0, n);
};

// 3. Returns the last element of an array.
_.last = function(array) {
  return array.pop();
};

// 4. Returns the last n number of elements in an array.
_.takeRight = function(array,n) {
	//not sure how to proceed, saved for later
};

// 5. Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {

  return array.filter(Boolean);

};

// 6. Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
    let newArray = [];
    for (let i = 0; i < arrayOne.length; i++) {
      let element = arrayOne[i];

    if ( arrayTwo/indexOf(elemen) === -1) {

    }
  }
};

// 7. Returns element with minimum
// value in an array.
_.min = function(array) {
  //Math.ceil or Math.floor?
};

// 8. Returns element with maximum
// value in an array.
_.max = function(array) {

};

// 9. Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
	// Place your solution here
};

/*************** BONUS ***************/
// 10. Retuns a new array with elements in shuffled order.

_.shuffle = function(array) {
  //Wendell's shuffle solution
  let shuffled = [];
  for (let i = array.length-1; i >= 0; i--) {
    let roll = math.floor(math.random() * (i));
    shuffled.push(array[roll]);
    array[roll] = array[array.length-1];
    array.pop();
  }
  return shuffled;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// 11. Returns the length of a collection.
//Priscilla's Solution.
_.size = function(collection) {
  if(typeof collection === 'object') {
    return object.values(collection).length;
  }
  return collection.length;
};

// 12. Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	// Place your solution here
};

// 13. Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	// Place your solution here
};

// 14. Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	// Place your solution here
};

// 15. Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	// Place your solution here
};

/*************** BONUS ***************/
 // 16. Returns n number of elements in a collection.
_.sample = function(collection, n) {

};

module.exports = _;
