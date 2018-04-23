let _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // 1. Returns the first element of an array.
_.first = function(array) {
  if(array.length === 0) {
    return 0;
  }
    return array[0];
};

 // 2. Returns the first n number of elements in an array.
_.take = function(array, n) {
  if(!n) {
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
  if(!n) {
    n = 1;
}
  return array.slice(array.length - n);
};

// 5. Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {

  return array.filter(Boolean);

  for ( let i = 0; i < array.length; i++ ) {
    if ( !array[i] ){
      output.push(array[i]);
    }
  }

  console.log("output>>>",output)
  return output;
};

// 6. Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
    let newArray = [];
    for(let i = 0; i < arrayOne.length; i++) {
      let element = arrayOne[i];

    if(arrayTwo.indexOf(element) === -1) {
      newArray.push(element);
    }
  }
  return newArray;
};

// 7. Returns element with minimum
// value in an array.
_.min = function(array) {
  let min = array[0];
    for(let i = 0; i < array.length; i++) {
      let element = array[i];
    if(element < min) {
        min = element;
    }
  }
  return min;
};

// 8. Returns element with maximum
// value in an array.
_.max = function(array) {
  let max = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

// 9. Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
	for(let i = 0; i < array.length; i++) {
    if (el === array[i]) {
      return i;
    }
  }
  return -1;
};

/*************** BONUS ***************/
// 10. Retuns a new array with elements in shuffled order.

_.shuffle = function(array) {
  //Wendell's shuffle solution
  let shuffled = [];
  for(let i = array.length-1; i >= 0; i--) {
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
    collection = Object.values(collection);
  }
  return collection.length;
};

// 12. Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
  if(typeof collection === 'string' || Array.isArray(collection)) {
    for(let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for(let key in collection) {
      callback(collection[key]);
    }
  }
};

// 13. Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
  let newArray = [];
  _.forEach(collection, function(el) {
    newArray.push(callback(el));
  });
  return newArray;
};

// 14. Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
  let filteredArray = [];
  _.forEach(collection, function(element) {
    if(callback(element));
    filteredArray.push(element);
  });
  return filteredArray;
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
