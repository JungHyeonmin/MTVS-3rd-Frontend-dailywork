// for in 반복문
// 객체의 모든 키 순회

/**
 * 4-4-2. for in
 *
 * for in 반복문을 이용해 객체의 모든 키를 순회할 수 있다.
 */


var student = {
    name : '유관순',
    age : 16,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
};
  
for (var key in student) {
    console.log(`key : ${key}`);                    // 키
    console.log(`student[key] : ${student[key]}`);  // 키에 해당하는 값 // 반드시 대괄호로 접근!
}


console.log();

var student = {
    name: '유관순',
    age: 16,
    getInfo:function() {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
};

for (var key in student) {
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}