/**02_computed-property(계산된 프로퍼티 이름)
 *
 * 4-3-2. computed property (계산된 프로퍼티 이름
 *  - ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서
 *    대괄호 표기법을 사용해야 한다.
 *  - ES6에서는 객체 리터럴 내부에섣 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.
 */

var prefix = 'key';
var index = 0;

var obj = {};

// ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면
// 객체 리터럴 외부에서 대괄호 표기법을 사용해야 한다.
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;

console.log(obj);

// ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.
var obj2 = {
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index
};

console.log(obj2);


console.log('====연습====');

var prefix = 'key';
var index = 0;

var obj = {};

// 프로퍼티값 사용
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
console.log(obj)

// 대괄호 이용
var obj2 = {
    [`${prefix}-${index++}`]: index,
    [`${prefix}-${index++}`]: index,
    [`${prefix}-${index++}`]: index
};

console.log(obj2);