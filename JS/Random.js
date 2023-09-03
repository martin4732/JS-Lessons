function randomNumber(min, max) {
    var generatingRandomNumber = Math.random();
    var num = (max - min +1 ) * generatingRandomNumber;
    return Math.floor(num);
}
console.log(randomNumber(5, 10));
var foods =['yam', 'rice','cassava','cocoyam','plantain']
console.log(foods[randomNumber(0,4)])