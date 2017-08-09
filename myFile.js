// Write a function called RepeatN that accpets and string and a number the return that string n times

function RepeatN(string, n) {
	var s=''
	for(var i=0;i<n;i++){
		s+= string +" "
	}
return s
}


RepeatN('RBK', 3); // => RBK RBK RBK
RepeatN('Javascript', 5); // => Javascript Javascript Javascript Javascript Javascript
