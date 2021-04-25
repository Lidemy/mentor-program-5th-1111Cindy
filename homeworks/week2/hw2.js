function capitalize(str) {
	if(str[0] >= "A" && str[0] <= "Z" || str[0] >= "a" && str[0] <= "z"){
		var strBig = str.replace(str[0],str[0].toUpperCase())
		return strBig
	}
	return str
}

console.log(capitalize('nick'))
console.log(capitalize('Nick'))
console.log(capitalize(',hello'))