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
    showInfo :  function() {
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    }
};
console.log(personJson); //{ name: '홍길동', age: 28, showInfo: [Function: showInfo] } 출력
person.showInfo();  // Name : 홍길동, Age: 28 출력


// 객체 생성 방법 3
console.log("============= 객체 생성 방법 3 : Prototype 상속");
// prototype 영역 : 해당 객체를 이용해서 new 한 모든 인스턴스가 공유할 수 있는 공용영역
// 함수를 기반으로 객체 설계도 구현
const Member = function(name, position){
    this.name = name;
    this.position = position;

}
m1 = new Member("강백호", "PF");
m2 = new Member("서태웅", "SF");

console.log("m1: ", m1);    //m1:  Member { name: '강백호', position: 'PF' }
console.log("m2: ", m2);    //m2:  Member { name: '서태웅', position: 'SF' }

// ES는 동적으로 속성을 추가할 수 있다.
m1.sayHi = function(){
    console.log(`${this.name}님이 당신에게 인사합니다.`);   //강백호님이 당신에게 인사합니다. 출력
}   //m1 객체 전용 메서드

m1.sayHi();
// m2.sayHi(); //error
console.log("m1:", m1); //m1: Member { name: '강백호', position: 'PF', sayHi: [Function (anonymous)] }
console.log("m2:", m2); //m2: Member { name: '서태웅', position: 'SF' }

// m1의 생성자는 무엇인가?
console.log("m1의 생성자 : ", m1.constructor);  //Member
console.log("m2의 생성자:", m2.constructor);    // Mmeber

// Member의 prototype 영역 확인
console.log("Member의 prototype:", Member.prototype);

Member.prototype.team = "상북";
Member.prototype.introduce = function(){
    console.log(`안녕하세요, 저는 ${this.team}에서 
    ${this.position}을 담당하는 ${this.name}입니다.`);
}

m1.introduce(); //Member의 prototype: { team: '상북', introduce: [Function (anonymous)] }
m2.introduce();

console.log("Member의 prototype:", Member.prototype);
console.log("m1:", m1);

// ES는 동적으로 속성을 추가할 수 있기 때문에
// 기존 객체에도 동적으로 속성 추가 가능

// String 객체 - sayHi 메서드
String.prototype.sayHi = function(){
    return `안녕하세요, ${this}님`
} 
console.log("둘리".sayHi());