var list = []

var addToList = function (num) {
 list.push(num)
}
var getList = function() {
  var sortedList = sortList(list)
  return sortList(list);
}
var sortList = function(arr){
  return arr.sort(function(a,b) { return a-b })
}





























module.exports = {
  "addToList": addToList,
  "getList": getList,
}




