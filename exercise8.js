function duckCount() {
  var arr = Array.prototype.slice.call(arguments);
  var result = arr.filter(function(obj) {
    var checked = Object.prototype.hasOwnProperty.call(obj, 'quack');
    return checked;
  });
  return result.length;
}

module.exports = duckCount;