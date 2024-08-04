/* 03_flag-and-pattern */

/* flag의 종류
i(ignore case) : 대소문자를 구별하지 않고 패턴 검색
g(Global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
m(Multi line) : 문자열의 행이 바뀌더라도 패턴 검색을 계속

flag는 옵션이므로 선택적으로 사용할 수 있고, 순서와 상관 없이 하나 이상의 플래그를 동시에 설정할 수 있다.
*/
let target = 'Java JavaScript';

console.log(target.match(/VA/));
console.log(target.match(/VA/i));
console.log(target.match(/VA/ig));
console.log('---------------------');

/* pattern 
패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다. */

// . : 임의의 문자열
target = 'abcdefg';
console.log(target.match(/../g));   // 임의의 2자리 문자열 전역 검색
console.log('---------------------');

// {m,n} : 최소 m번, 최대 n번 반복 되는 문자열 (반복 검색)
target = 'a aa aaa b bb bbb ab aab abb';
console.log(target.match(/a{2,3}/g));   // a 최소 2번 ~ 최대 3번 반복
console.log(target.match(/b{2}/g));     // b 두번 반복
console.log(target.match(/b{3,}/g));    // b 세번 이상 반복
console.log('---------------------');

// + : 앞선 패턴이 최소 한 번 이상 반복되는 문자열 (반복 검색)
// +는 {1,}과 같다
console.log(target.match(/b+/g));       // b 최소 1번 이상 반복
console.log('---------------------');

// ? : 앞선 패턴이 최대 한 번(0번 포함) 이상 반복되는 문자열 (반복 검색)
// ?는 {0,1}과 같다
target = 'soul seoul';
// s 다음 e가 최대 한번(0번 포함) 이상 반복 되고 oul이 이어지는 문자열 전역 검색
console.log(target.match(/se?oul/g));   
console.log('---------------------');

// | : or
target = 'aa bb cc dd 123 456 _@';
console.log(target.match(/a|b/g));   
// 분해되지 않은 단어 레벨로 검색하기 위해 + 함께 사용
console.log(target.match(/a+|b+/g));  
// [] 내의 문자는 or로 동작
console.log(target.match(/[ab]+/g));  
// 범위를 지정하려면 -를 사용 (소문자 범위)
console.log(target.match(/[a-z]+/g));  
// 대소문자 범위
console.log(target.match(/[A-Za-z]+/g)); 
// 숫자 범위
console.log(target.match(/[0-9]+/g)); 
console.log('---------------------');

// \d : 숫자
// \D : 숫자가 아닌 문자
console.log(target.match(/\d+/g));
console.log(target.match(/\D+/g));  
// \w : 알파벳, 숫자, 언더스코어
// \W : \w의 반대
console.log(target.match(/\w+/g));
console.log(target.match(/\W+/g));  
console.log('---------------------');

// [...] 내의 ^ : not
console.log(target.match(/[^0-9]+/g));  
console.log(target.match(/[^a-z]+/g));
console.log('---------------------');

// [...] 밖의 ^ : 시작 위치 검색
// $ : 마지막 위치 검색
target = 'https://www.google.com';
console.log(/^https/.test(target)); // https로 시작하는지 검사
console.log(/com$/.test(target));   // com으로 끝나는지 검사
console.log('---------------------');