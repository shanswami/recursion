// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var base = document.body;
  var finalArray = [];
  var checker = function(node) {
    if (node.classList && node.classList.contains(className)) {
      finalArray.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      checker(node.childNodes[i]);
    }
  };
  checker(base);
  return finalArray;
};