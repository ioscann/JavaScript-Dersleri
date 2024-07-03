let luckNumber = (Math.random() * 99) + 10;

luckNumber = parseInt(luckNumber);

let user = prompt("Şanslı sayıyı tahmin et " + luckNumber);

user = parseInt(user);

let userFirstNUmber = user / 10;
userFirstNUmber = parseInt(userFirstNUmber);
let userSecondNumber = user % 10;
userSecondNumber = parseInt(userSecondNumber);

let luckyFirstNumber = luckNumber / 10;
luckyFirstNumber = parseInt(luckyFirstNumber);
let luckSecondNumber = luckNumber % 10;
luckSecondNumber = parseInt(luckSecondNumber);

if (user == luckNumber) {console.log("10000 TL kazandınız");}
else if (userFirstNUmber == luckSecondNumber && userSecondNumber == luckyFirstNumber) {console.log("5000 TL kazandınız");}
else if (userFirstNUmber == luckyFirstNumber || userSecondNumber == luckSecondNumber) {console.log("1000 TL kazandınız");}
else {console.log("Bir sikim kazanmadınız");}