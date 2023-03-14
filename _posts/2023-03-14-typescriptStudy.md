---
title:  "Generic 타입에 대한 이해"
categories: typescript
tag: typescript
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

# Generic 타입은?

지정해주는 type을 파라미터 처럼 사용하는 문법이다.

그 타입은 <> 괄호 안에 넣어주면 된다.

```tsx
function 함수(x: unknown[]) {
  return x[0];
}

let result = 함수([4,2]);
console.log(result);
console.log(result + 1); // error
```

콘솔에 result 를 찍어보면, 4가 출력된다. 

단, result의 타입은 number가 아닌 unknown으로 나온다. 타입스크립트에서 타입을 알아서 변경해주지 않기 때문이다.

그 말은, result가 4가 아니기에 + - 와 같은 숫자 타입에서의 계산이 안된다는 말이다.

때문에 result + 1 을 입력하면 에러가 발생하게 된다.

이러한 문제를 해결하려면 Narrowing을 잘 하면 되는데, 그걸 더 간결하게 하기 위해서 제네릭 타입이 존재한다.

```tsx
function junyub<T> (x: T[]) :T {
  return x[0];
}

let result1 = junyub<number>([4,2]);
let result2 = junyub<string>(["kim", "park"]);
```

junyub() 함수에는 타입을 따로 지정해주지 않았다. 제네릭 타입으로 T라는 임의의 타입을 설정해뒀으며, 함수의 파라미터 타입, return 타입도 모두 동일한 타입이 되게끔 작성했다.

result1 이라는 변수를 선언, 할당할 때 `junyub<number>([4,2])` 를 보면, <number>가 들어가기에 junyub() 함수에 작성되어있던 <T> 부분에 number가 들어간다. 

```tsx
function junyub<number> (x: number[]) :number { return x[0] } 
```

그럼 함수가 위와같이 동작하게 된다.

result2도 마찬가지로 string이 들어가니, 동일하게 동작할 것이다.

그렇다면,

```tsx
function junyub<T> (a: T) :T {
  return a + 1; // error
}

let result = junyub<number>(1);
```

위의 코드는 왜 에러가 날까?

그 이유는 타입 파라미터처럼 쓰이는 제네릭 타입 작성부분에 number 가 들어갈 보장이 없기 때문이다.

변수를 선언, 할당할때 <number>를 작성해주는데, 개발자가 <string>이라고 쓰면 안되니깐. 타입스크립트에서는 string 타입에 +1 을 할 수 없으니깐 잘못된거라고 미리 컴파일에러가 발생하는 것이다.

이럴때 사용하는것도 Narrowing이지만, extends 키워드로 들어오는 타입을 제한할 수 있다.

이를 constraints라고 부른다.

```tsx
function junyub<T extends number> (a: T) :T {
  return a + 1;
}

let result = junyub<number>(1);
```

extends 키워드를 <> 제네릭타입 넣는데에 작성해서 넣어주면, 상속의 개념과는 조금 다르게 동작한다.

T 라는 제네릭 타입에 number 타입만 오도록 제한한다 라는 의미이다.

interface 와 class에서 사용하는 extends와는 다르니 유의해야 한다.

### 헷갈렸던 커스텀 타입 extends

string으로 제네릭타입을 넣으면 자릿수를 세어서 출력해주는 함수를 만든다고 가정한다.

```tsx
function junyub<T extends string> (a: T) :number {
  return a.length;
} 

let result = junyub<string>("가나다");
```

이렇게 작성해도 훌륭하게 동작한다. 근데 extends 하는게 커스텀 타입이라면 ?

```tsx
interface MyType {
  length: number;
}

function junyub<T extends MyType> (a: MyType) :number {
  return a.length;
}

let result = junyub<string>("가나다");
let result2 = junyub<number>(123); // error
```

이게 많이 헷갈렸다.

type alias 든 interface든, 미리 개발자 입맛에 맞게 타입을 선언하고, 변수나 함수에 타입처럼 쓰이는 문법이 제네릭에 들어가게 됐다.

junyub() 함수의 제네릭 작성 부분에 <T extends MyType> 를 작성하면, T 라는 타입은 MyType에 정의된 length 속성을 복사해서 갖게 된다.

그래서 return을 작성할때 a.length라는 속성에 접근이 가능해진다. MyType이라는 인터페이스에 length라는애가 있으니깐.

그리고 result 변수를 선언,할당할 때 제네릭 타입에 string을 넣었다. 그렇다면 결국 string 객체에 있는 length 속성에 접근하여 a.length에 대한 값을 갖게 될것이다.

그러니깐, MyType 인터페이스는 junyub() 함수의 return에 length를 쓰기 위해서 그냥 넣어준 속성이다. 그리고 변수를 선언, 할당할 때 string 타입이 아닌 다른 number 타입같은게 들어오면, number 객체에는 length 속성이 없으니깐 에러가 나는 것이다.

그래서 `let result2 = junyub<number[]>([1,2,3,4]);` 로 바꿔서 입력해보니, array 자료형에는 length 속성이 존재하니깐, 에러가 나지 않았다.

### class 에서도 제네릭 타입 가능

```tsx
class Person {
  name;
  constructor(a) {
    this.name = a;
  }
}

let a = new Person("어쩌구");
a.name // any 타입이다.
```

여기서 Person 클래스에 대한 인스턴스를 만들어서 할당할 때, any 타입으로만 나오게 된다.

제네릭 타입을 활용하고 타입을, 인스턴스가 할당될 때 적용시켜주고 싶다면 아래와 같이 작성하면 된다.

```tsx
class Person <T> {
  name;
  constructor(a:T){
    this.name = a;
  }
}

let a = new Person<string>("어쩌구");
a.name // string
```