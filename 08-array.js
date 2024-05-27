// 배열의 생성 : 방법1, new 키워드
const v1 = new Array(10); // 10개짜리 배열
const v2 = new Array();   // 빈 배열
const v3 = new Array(2024, "String", true); // 초기 값이 있을 때, 어떤객체들(함수도) 다 들어간다.

console.log(v1, v1.length, typeof v1); //[ <10 empty items> ] 10 object
console.log(v1, v2.length, typeof v2); //[ <10 empty items> ] 0 object
console.log(v3, v3.length, typeof v3); //[ 2024, 'String', true ] 3 object

// 배열의 생성 : 방법2, 리터럴로 생성 -> 추천 
const v4 = [];  // = new Array();
const v5 =["red", "green", "blue", "yellow"]; // new Array("red", "green", "blue", "yellow");

console.log(v4, v4.length); // [] 0
console.log(v5, v5.length); // [ 'red', 'green', 'blue', 'yellow' ] 4

// ES 특성상 변수가 참조하는 객체의 type 체크가 필요
console.log(typeof v5); //object 

// 주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log("is v5 Array? ", Array.isArray(v5)); //true

// ES의 경우 객체 속성도 배열(맵)처럼 사용할 수 있음
const person = {
    name: "홍길동",
    age : 28
};
console.log(person.name, person.age);   //홍길동 28
console.log(person['name'], person['age']); // 홍길동 28

// ES 배열은 인덱스 범위를 엄격하게 체크하지 않음
// 인덱스 범위를 벗어난 접근도 허용한다.

const v6 = [];
console.log(v6, v6.length);     // [] 0
v6[10] = 2024;

console.log(v6, v6.length);     // [ <10 empty items>, 2024 ] 11


console.log("=============== 주요 메서드");
// 합치기 : concat
const veges = ["무", "배추", "쪽파"];
console.log(veges, veges.length);
const sources = ["소금", "고춧가루", "새우젓"];
console.log(sources, sources.length);

const ingr = veges.concat(sources);
console.log(ingr, ingr.length);

// join : 배열 내부의 요소(아이템)를 한 문장으로 합침
console.log(ingr, "-> 김장재료: ", ingr.join(", "));


// push, pop -> Stack 자료형처럼 활용 가능
// Stack : Last Input First Output(LIFO 자료형)
console.log("==============push, pop");
let fruits = [];
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);
// 인출: pop -> 배열의 뒤에서 인출 발생
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);

// push, shift -> queue 자료형처럼 활용 가능
// queue : First Input First Output (FIFO 자료형)
console.log(fruits);
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);

console.log("==============shift");
// shift : 배열의 첫 번째 요소를 먼저 인출, 삭제
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);

// splice : 배열 요소 인출 후 삭제, 추가를 동시에 할 수 있는 메서드
console.log("==============splice");
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits); //[ 'Apple', 'Banana', 'Carrot', 'Durian' ]

console.log(fruits.splice(2)); //[ 'Carrot', 'Durian' ]
// 인수가 1개 -> 시작인덱스, 끝까지 추출

console.log(fruits); //[ 'Apple', 'Banana' ]

fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);

console.log(fruits.splice(2, 1));   //[ 'Carrot' ]
// 인수가 2개 -> 시작인덱스, 갯수

console.log(fruits); //[ 'Apple', 'Banana', 'Durian' ]

fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);

// 인수가 3개 이상 -> 시작인덱스, 삭제할 갯수, 추가할 요소들 명시
console.log(fruits.splice(2, 1, "Kiwi", "Mango")); 
//[ 'Carrot' ] 삭제 후 삭제한 부분에 kiwi,mango추가

console.log(fruits); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Durian' ]

// reverse, slice 
// reverse : 순서 반전
console.log("==============reverse");
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);

fruits.reverse(); 
console.log(fruits); //[ 'Durian', 'Carrot', 'Banana', 'Apple' ]

// slice : 배열의 요소를 추출 -> 새 배열로 
console.log("==============slice");
console.log(fruits);
let slice = fruits.slice(1, 2); // 원본 배열은 유지
console.log(slice);
console.log(fruits);

// split : 구분자를 기준으로 문자열을 분리-> 배열로 생성
console.log("==============split");
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ");    // 공백을 기준으로 분리
console.log(chunks);

console.log("==================== sort ");
fruits = ["Carrot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열:",fruits); //[ 'Carrot', 'Durian', 'Apple', 'Mango', 'Kiwi', 'Banana' ]

fruits.sort();  // 정렬 -> 오름차순
console.log("오름차순 정렬 : ", fruits); // [ 'Apple', 'Banana', 'Carrot', 'Durian', 'Kiwi', 'Mango' ]

// 정렬 규칙을 정하고자 할 때 : 정렬 기준 함수를 매개변수로 전달 해줘야 함
fruits = ["Carrot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열:",fruits);

// 역순 정렬
fruits.sort((v1, v2) => {
    // 키 함수 : 두 개 요소의 선후 관계를 결정해줌
    // 리턴 값
    //       음수 : -> v1이 앞에 온다.
    //       양수 : -> v1이 뒤에 온다.(v2가 앞에 온다.)
    //        0   : -> 순서 안바꿈 (순위가 같다.)
        if(v1 < v2) return 1;
        if(v1 > v2) return -1;
        if(v1 == v2) return 0;

});
console.log("역순정렬:",fruits); //[ 'Mango', 'Kiwi', 'Durian', 'Carrot', 'Banana', 'Apple' ]

// 문자열 길이로 정렬
fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("문자열 길이로 소팅: ", fruits); //[ 'Kiwi', 'Mango', 'Apple', 'Durian', 'Carrot', 'Banana' ]







