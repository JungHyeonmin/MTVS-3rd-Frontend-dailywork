/* 01_RegExp
정규 표현식(Regular expression)은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어(formal language)이다.
정규 표현식은 대부분의 프로그래밍 언어와 코드 에디터에 내장되어 있다.
문자열을 대상으로한 패턴 매칭 기능을 제공하므로 예를 들어 회원 가입 시 필요한 
사용자가 입력한 비밀번호의 패턴 확인, 전화번호 유효성 확인 등의 기능에서 활용할 수 있다. */

// 정규 표현식 생성
const target = 'JavaScript';    // 검색 대상

// 정규 표현식 리터럴 - /pattern/플래그
let regexp = /j/i;  // 패턴 : j, 플래그 : i => 대소문자 구별 없이

// RegExp 생성자 함수 - new RegExp(pattern[, flag])
regexp = new RegExp('j', 'i');
regexp = new RegExp(/j/, 'i');
regexp = new RegExp(/j/i);          // ES6부터 가능한 표현

// test 메서드 - target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언으로 반환
console.log(regexp.test(target));   

// 패턴이 정해져 있는 경우 정규 표현식 리터럴을 보편적으로 사용하지만
// 변수를 사용해 동적으로 패턴을 결정해야 하는 경우 RegExp 생성자 함수를 사용할 수 있다.
