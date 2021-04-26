function join(arr, concatStr) {
	if(arr.length === 0){
		return ""
	} 
	var result = arr[0]
	for(var i=1; i<arr.length; i++){
		result += concatStr + arr[i]
	}
	return result
}


function repeat(str, times) {
  var sum = ""
  for(var i=1; i<=times;  i++){
  	sum += str
  }
  return sum
}

console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('yo', 5));
