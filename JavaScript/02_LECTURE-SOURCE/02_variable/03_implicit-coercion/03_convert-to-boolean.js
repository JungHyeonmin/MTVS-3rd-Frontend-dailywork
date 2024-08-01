/**
 * 2-3-3. convert to boolean(논리 타입으로 변환)
 *
 * - 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값 (참으로 평가되는 값)또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
 * - Truthy -> true, Falsy -> false 로 암묵적 타입 변환된다.
 */

if(true) console.log("if(true)"); // true
if(false) console.log("if(false)"); // false
if(undefined) console.log("if(undefinde"); // false
if(null) console.log("if(null)"); // false
if(0) console.log("if(0)"); // false
if(NaN) console.log("if(NaN)"); // false
if('') console.log('if("")'); // false
if('javaScript') console.log("if('javaScript')"); // true