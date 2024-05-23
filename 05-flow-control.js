// 연습문제 1 .
// 2단~ 9단까지 구구단표 출력

// - for문 버전
for(let dan = 2; dan <=9 ; dan++){
    console.log(dan + "단");
    for(let num = 1; num <= 9; num++){
console.log(dan,"*",num,"=",dan * num);
    }
    console.log();
}

// - while문 버전
let dan = 2;
while(dan <= 9){

    let num = 1;
    console.log(dan + "단");
    while(num <= 9) {
        console.log(dan,"*",num,"=",dan*num);
        num ++;
    }
    console.log();
    dan++;
}


// 연습문제 2.
/* 역삼각형 별 찍기

*****
****
***
**
*

*/ 

// - for문 버전

for(let c = 5; c > 0; c--){
    let r = "";
    for(let d = 0; d < c; d++){
        r += "*";
    }
    console.log(r);
}


// - while문 버전
let e = 5;

while(e > 0){
    let result = "";
    let f = 1;
    while(f <= e){
        result += "*";
        f++;
    }
    console.log(result);
    e--;
} 