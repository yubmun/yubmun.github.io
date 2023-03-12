---
title:  "rest parameter, object자료형의 파라미터"
categories: typescript
tag: typescript
toc: true
author_profile: false
sidebar:
  nav: "docs"
---


이전 강의에서 진행했던 예제였던 것중에 중요했던 개념이다. rest parameter

rest parameter와 object 자료형의 파라미터는, 구조분해 할당에 대한 이해와 spread 문법에 대해 아는 것부터 필요하다.

```tsx
let arr1 = [1,2,3]
let [숫자1, 숫자2, 숫자3] = arr1;

console.log(숫자1) // 1
console.log(숫자2) // 2
console.log(숫자3) // 3

```

구조분해할당의 가장 기초적인 개념이다. 선언된 [숫자1, 숫자2, 숫자3] 이

`let 숫자1 = arr1[0]` , `let 숫자2 = arr[1]`, `let 숫자3 = arr[2]` 과 같은 역할을 하는건데, 한줄로 표현되니깐 참 코드가 간결해진다.

spread 문법은

```tsx
let arr1 = [1,2,3];
let arr2 = [4,5];

let arr3 = [...arr1, ...arr2];

console.log(arr3); // [1,2,3,4,5]
```

… 을 붙이면, 배열이나 객체 자료형을 풀어서 쓴다(?) 벗겨준다(?)의 의미로 이해했다.

때문에 arr3은, arr1의 [] arr2의 [] 이 풀어서 써졌기에, [1,2,3,4,5] 의 결과를 갖는 것이다.

react 를 공부할때, object 자료형의 state에 무언가 추가될때

```tsx
{...state, 추가되는 속성}
```

이렇게 쓰는게, 원래 object 자료형에있던 state가 앞에 풀려지고, 뒤에 추가되는 속성을 써서 다시 object자료형으로 묶어서 합쳐주는 느낌. 그게 spread 문법이다.

그래서, rest parameter는 무엇인가.

전에 풀었던 예제에서 파라미터가 하나 두개가 아닌 사용자가 입력하는 대로 받아들여질때, 3개든 100개든 상관없이 들어갈 수 있는 함수를 만든다고 할때 rest parameter를 써야한다.

어떻게 쓰냐면

```tsx
function junyub(...a) {
  console.log(a);
}

console.log(junyub(1,2,3,4,5)); // [1,2,3,4,5]
```

이렇게 파라미터 자리에 spread 문법을 써버리는 것이다. 그럼 a 라는 파라미터로 입력된 데이터는 array 형태로 받아진다.

그럼, rest parameter에 대한 타입은 어떻게 지정하는가?

그 데이터가 배열로 받아진다 했으니, 배열 타입 선언하듯이 만들면 된다.

```tsx
function junyub(...a: number[]){
  console.log(a);
}
```

물론 union type으로 타입을 선언해도 되겠다.

그렇게 받아진 여러개의 데이터를 갖는 파라미터는 forEach, map, filter 등 array 자료형에서 쓸 수 있는 메서드들을 활용할 수 있다. 

Narrowing 할때 많이 쓰인다.

## 그럼 파라미터가 object로 들어가려면

```tsx
let obj = { name: "lee", age: 30 }

function junyub ({name, age}){
  console.log(name);
  console.log(age);
}

console.log(junyub(obj)); // "lee" \n 30
```

파라미터 자리에 object 자료형이 들어오면, 구조분해할당 문법대로 써주면 된다.

객체를 미리 파라미터에 넣어놓으면 된다.

타입지정하려면 object 자료형에 타입지정하듯이 하면 된다.

```tsx
function junyub({name, age}: {name: string, age: number}){
  블라블라
}
```

근데 객체 타입지정해줄때는 보통 type alias 나 interface 써줬으니 미리 선언해놓고 쓰면 되겠다.

# narrowing 할때 null이나 undefined 체크할때

typeof 써서 `if(typeof 변수 === "string")` 이런식으로 썼는데, 생각보다 undefined 체크하는 narrowing이 많다고 한다.

개발자들은 간결한 코드를 좋아해서 또 간결하게 해결하는 법을 알려줬다.

```tsx
if(변수 && typeof 변수 === "string") {
	실행문
}
```

조건식에 이렇게 쓰면, 변수가 undefined면 undefined를 반환시키도록하고, string이면 실행문을 실행시켜주는 역할을 한다고 한다.

이전에 js 배울때 && 조건연산자 쓰면 and , 양쪽 둘다 참이면 이라는 의미였는데 아마 동일하지 않을까 생각한다.

변수라는 애가 값이 있으면 undefined가 아닐거니깐 typeof 변수 === “string” 이라는 조건도 함께 충족되니 실행문에 접근이 될거고

변수라는애가 값이 없으면 undefined가 되니깐 양쪽 다 참이 안되니 실행문에 접근이 안될 것이라고 본다.

```tsx
type Jun = { age: number };
type Yub = { weight: 100 };

function lee(x: Jun | Yub) {
  if(typeof x === "Jun") // 이런건 없음
}
```

typeof 연산자는, type alias 에 대한 타입을 검사해주지는 않는다. 기본 자료형만 해준다. number string boolean 같은,, 

때문에 type alias를 쓴 타입인지에 대해 narrowing을 하려면 !

```tsx
type Jun = { age: number };
type Yub = { weight: 100 };

function lee(x: Jun | Yub) {
  if("age" in Jun){
		x.age = 30;
  }
}
```

`in` 키워드를 써주면 된다. 문법 자체는 `속성명 in object자료` 순으로 작성한다.

Jun 이라는 type에 속성이 age 니깐, age가 Jun에 있냐? , 참이라면 x 타입이 Jun 인거니깐. narrowing이 된다.

단, 두 type alias에서 정의된 속성이 서로 다를 때에만 `in` 키워드를 사용할 수 있다.

### class 로 사용되면 instanceof 연산자 써서 해주면 된다.

```tsx
let 날짜 = new Date();
if(날짜 instanceof Date){
	console.log("참입니다");
}
```

날짜 라고 쓴 변수가 Date class의 인스턴스이냐? 라고 조건식이 걸리는 거고, 참이면 실행문에 접근되니 이게 narrowing 이다.

중복되는 속성들이 있을때엔, Literal type이 있으면 narrowing이 쉽다. (당연한것)

## never 타입은 언제 쓰이는가?

주로 안쓰인다. 개발자가 코드를 잘못 입력했을 때 간혹 never타입이 지정되곤 하는데, 이런 타입은 있을 수 없다는 의미로 받아들이면 된다.

```tsx
type Jun = { age: number }
type Yub = { age: string }

type JunYub = Jun & Yub;

let yubmun: JunYub = { age: 10 }; // error, age는 never타입
```

type alias 에서, 속성명이 중복되고 타입이 다를 때, never 타입이 적용되곤 한다.

age가 number | string 타입이 아닌, never 타입이 되는 이유는 string도 되고 number도 되는 타입이 없기 때문이다.

함수에서도 never 타입이 써진다.

```tsx
function junyub() :never {
	
}
```

return type 이 never 이면, return이 이루어지면 안된다는 의미로 함수가 끝나지 않는다는 것을 의미하거나 return 하는게 없는 함수임을 의미한다.

return 하는게 없을 때엔 never 타입보다는 void 타입을 더 많이 사용한다.

never 타입이 return 타입일때엔, 함수가 에러를 던지거나, 무한반복문으로 인해 끝나지 않을때 (end point 가 없을 때) 선언된다.

내 코드에 never 타입이 있다면, 코드를 잘못짠거라고 생각하면 되겠다.