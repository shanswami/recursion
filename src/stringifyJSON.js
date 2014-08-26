// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
 var JSONstring = '';
  if (typeof obj === 'function') {
    return '';
  } else if (typeof obj === 'string') {
    return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  } else if (Array.isArray(obj)) {
    JSONstring += '[';
    JSONstring += obj.map(stringifyJSON).join(',');
    JSONstring += ']';
    return JSONstring;
  } else if (obj != null && typeof obj === 'object') {
    JSONstring += '{';
    var arrr = [];
    Object.keys(obj).forEach(function (key) {				// returns an array of a given object's properties
      if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
        return;
      }
      arrr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    });
    JSONstring += arrr.join(',');
    JSONstring += '}';
    return JSONstring;
  }  return '' + obj;
};