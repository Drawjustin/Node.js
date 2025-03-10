/**
 * 챕터 : 변수
 * const : 절대로 바뀌지 않는 상수, 수정X
 * let   : 변할 수 있는 값
 */

const name = "Jane";
let age = "16";
age = "17";

console.log(name + age);

const name1 = "Mike"
const name2 = "Mike"
const name3 = "Mike"

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

console.log(message)
console.log(message2)

const message3 = `My name is ${name1}`;
console.log(message3)

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4);

console.log("==변수선언==")
const y = name/2;
console.log(y);
let time;
console.log(time);
let gender = null;
console.log(gender);

console.log("==typeof==")
console.log(typeof name)
console.log(typeof time)
console.log(typeof gender)
console.log(typeof 3)

console.log("==타입변환계산==");
const a = "나는 ";
const b = " 입니다.";
console.log(a + name + b);
console.log(a + age + b);