module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(pre, current) {
//    return pre.concat(fn(current));
    pre.push(fn(current));
    return pre;
  }, []);
};