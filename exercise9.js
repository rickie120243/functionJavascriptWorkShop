var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    console.log([namespace].concat(slice.call(arguments)).join(' '));
  }
}

module.exports = logger;