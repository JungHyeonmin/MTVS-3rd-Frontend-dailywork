/**
 * 8-3. built in object prototype
 *
 * 8-3-1. object prototype
 *
 * const obj = new Object();
 * Object 는 내장 객체 생성자 함수인데 이 생성자 함수의 prototype 은 toString()을 비롯한 다양한 메서드가 구현되어있는 거대한 객체를 참조
 * new Object()를 호출하거나 리터럴 문법 {...}을 사용해 객체를 만들 때, 새롭게 생성된 객체의 [[Prototype]]은 Object.prototype 을 참조
 */

const obj = {};
console.log(obj.__proto__ === Object.prototype);            // true
console.log(obj.toString === obj.__proto__.toString);       // true
console.log(obj.toString === Object.prototype.toString);    // true


console.log();


const obj1 = {};

console.log(obj1.__proto__ === Object.prototype);
console.log(obj1.toString() === obj1.__proto__.toString());
console.log(obj1.toString() === Object.prototype.toString());