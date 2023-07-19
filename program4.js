var str = 'abcba';
var temp = str.split("").reverse('').join('');
if(temp==str){
    console.log("palindrome");
}
else{
    console.log("not palindrome")
}