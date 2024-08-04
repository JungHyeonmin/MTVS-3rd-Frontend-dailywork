// 04. public field declarations (클래스 필드 정의 제안)
class Book {

    // 클래스를 정의할 때 '프로퍼티 이름 = 값'을 써주면 클래스 필드를 만들 수 있다.
    // 최신 브라우저 (Chrome 72 이상) 또는 최신 Node.js(버전 12 이상)에서만 실행 가능하다.
    name = "모던JavaScript";
    // this.price = 35000; // 문법 오류 : this.은 constructor 내부 또는 메소드 내부에서 작성해야 한다.
    price;

    introduce() {
        console.log(`${this.name}(이)가 그렇게 재밌죠~`);
    }
}

let book = new Book();
book.introduce();
console.log(book.name);
console.log(Book.prototype.name); // Book.prototype이 아닌 개별 객체에만 클래스 필드가 설정
console.log(book.price);    // undefined

// 참고 - 클래스 필드에 함수를 할당하면 인스턴스 함수가 되므로 이는 권장되지 않는다.
