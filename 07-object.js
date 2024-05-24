// 객체 생성 방법 1 
console.log("============= 객체 생성 방법 1");
const person = new Object();    // 인스턴스 생성
// 동적으로 속성(프로퍼티, 메서드) 동적으로 추가
console.log(person);    // {} 출력 {}= 자바스크립트에서 객체 표기법
person.name = "홍길동";
person.age = 28;
person.showInfo = function(){
    console.log(`Name : ${this.name}, Age: ${this.age}`);
}
console.log(person); // { name: '홍길동', age: 28, showInfo: [Function (anonymous)] } 출력
person.showInfo();  // Name : 홍길동, Age: 28 출력


// JSON (JavaScript Object Notation) 자바스크립트에서 객체를 표기하기 위한 표기법 -> 데이터 포맷
// 객체 생성 방법 2
console.log("============= 객체 생성 방법 2 : JSON ");
const personJson = {    // 객체 표기
    name : "홍길동",
    age : 28,
    showInfo :  function(){
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    }
};
console.log(personJson); //{ name: '홍길동', age: 28, showInfo: [Function: showInfo] } 출력
person.showInfo();

