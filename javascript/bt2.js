console.log("Khai báo với var:");
console.log(counterVar);
var counterVar = 10;
console.log(counterVar);
console.log("Khai báo với let:");
try {
  console.log(counterLet);
} catch (error) {
  console.log(error.message);
}
let counterLet = 20;
console.log(counterLet);
console.log("Khai báo với const:");
try {
  console.log(counterConst);
} catch (error) {
  console.log(error.message);
}
const counterConst = 30;
console.log(counterConst);