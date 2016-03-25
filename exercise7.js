function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr))
  })(0, initial);
//  return recursion(arr, fn, 0, initial);
}

function reduceOne(index, value) {
  if (index > arr.length - 1) return value;
  return reduceOne(index + 1, fn(value, arr[index], index, arr));
}

function recursion(arr, fn, index, value) {
  if (index > arr.length - 1) return value;
  console.log(fn);
  return recursion(index + 1, fn(value, arr[index], index, arr));
}

module.exports = reduce;