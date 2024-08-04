/* 02_RegExp-method */
const target = 'Java JavaScript';

// RegExp.prototype.exec
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환
console.log(/va/.exec(target));
console.log(/va/g.exec(target));   // 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫 번째 매칭 결과만 반환
console.log(/hello/.exec(target));   // 매칭 결과가 없을 경우 null 반환

// RegExp.prototype.test
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언으로 반환
console.log(/va/.test(target));   
console.log(/hello/.test(target));

// String.prototype.match
// String 표준 빌트인 객체가 제공하는 메서드로 대상 문자열과 인수로 전달 받은 정규 표현식과의
// 매칭 결과를 배열로 반환한다
console.log(target.match(/va/));
console.log(target.match(/va/g));   // 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정하면 모든 매칭 결과를 배열로 반환
console.log(target.match(/hello/));

// 이외에도 정규표현식을 사용하는 메서드로 
// String.prototype.replace, String.prototype.search, String.prototype.split 등이 있다.
// String 챕터에서 살펴보자