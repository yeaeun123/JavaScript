console.log("================= 배열의 전개 연산");

let arr1 = ["홍길동", "장길산"];
let arr2 = ["임꺽정", "전우치"];

console.log(arr1, arr2); //[ '홍길동', '장길산' ] [ '임꺽정', '전우치' ]
// 두 개의 배열을 합치고 싶으면

// 기존 방식으로 합치기
let combined = [];
// 방법 1 : (안쓰는게 좋음)
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log(combined); //[ '홍길동', '장길산', '임꺽정', '전우치' ]

// 방법 2 : concat 사용
// combined = arr1.concat(arr2);
combined = [].concat(arr1, arr2);
console.log(combined); //[ '홍길동', '장길산', '임꺽정', '전우치' ]

// ES Next 방식 : 전개 연산자를 활용
combined = [...arr1, ...arr2];
console.log(combined);  //[ '홍길동', '장길산', '임꺽정', '전우치' ]

console.log("================== 배열의 전개");
console.log("원본 배열: ", combined);

// 배열 전개
let [first, 
    second, 
    third = "empty"/*기본값*/,
    ...others /*나머지*/] = arr1;
console.log(first, second, third, others);  //홍길동 장길산 empty []

[first, second, third = "empty", ...others] = combined;
console.log(first, second, third, others); //홍길동 장길산 임꺽정 [ '전우치' ]

console.log("=================== 객체 전개 연산");
let obj1 = { one: 1, two: 2, other: 0};
let obj2 = { three: 3, four: 4, other: -1};

console.log("obj1:", obj1);
console.log("obj2:", obj2);

// 기존 방식 : 방법 1 (권장하지 않음)
combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj1.other
};
console.log("기존방식 1 : ", combined);

// 기존 방식: 방법 2
combined = Object.assign({}, obj1, obj2);
// combined = Object.assign({}, obj2, obj1);
console.log("기존방식2:", combined); 
// 기존방식2: { one: 1, two: 2, other: -1, three: 3, four: 4 } 
// 기존방식2: { three: 3, four: 4, other: 0, one: 1, two: 2 }
// assign 순서에 따라 나중에 오는 other로 덮어쓰기됨

// 전개 연산자
combined = {
    ...obj1,    // obj1의 모든 속성을 전개
    ...obj2    // obj2의 모든 속성을 전개
};  // 전개 순서에 유의 ! 
console.log("전개연산자 활용: ", combined);
//전개연산자 활용:  { one: 1, two: 2, other: -1, three: 3, four: 4 }

// 특정 속성 제거 
delete combined.other; // other 속성 제거
console.log(combined);

// 객체 속성 전개
let { one, three, five, ...rest} = combined;
console.log(one, three, five, rest); //1 3 undefined { two: 2, four: 4 }
                                    // five = undefined

