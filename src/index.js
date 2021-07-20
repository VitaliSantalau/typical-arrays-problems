
exports.min = function min (array) {
  if(!array) return 0;
  return array.reduce((res, elem) => {
    if(elem < res) res = elem;
    return res;
  }, 0)
}

exports.max = function max (array) {
  if(!array) return 0;
  let res = 0;
  for(let i = 0; i < array.length; i++ ) {
    array[i] > res ? (res = array[i]) : res;
  }
  return res;
}

exports.avg = function avg (array) {
  if(!array || array.length === 0) return 0;
  return array.reduce((sum, elem) => {
    return sum+=elem;
  }, 0) / array.length;
}