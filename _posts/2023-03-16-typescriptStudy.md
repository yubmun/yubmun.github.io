---
title:  "index signatures, keyof연산자, infer?"
categories: typescript
tag: typescript
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

# index signatures

너무 많은 프로퍼티, 속성값들을 통일시켜야 할 때 index signatures 문법을 사용할 수 있다.

예를들면 object 자료형에 모든 속성 값들이 string 타입을 가져야 한다고 가정했을 때

```tsx
let junyub: { name: string, age: string } : { name: "junyub", age: "30" }
```

이런식으로, 프로퍼티의 이름과 타입을 작성하여 타입지정이 이루어졌는데 name, age 따로따로 부여해줄게 아니라 한번에도 부여가 가능하다는 것이다.

```tsx
type JunYub = {
  [key: string]: string;
}

let obj: JunYub = { name: "junyub", age: "30" }
```

type JunYub은 모든 string 타입을 갖는 key 에 값의 타입을 string으로 지정했다.

때문에 object 자료형에서 어떤 string으로 쓰여지는 프로퍼티 key 라면 모두 값의 자료형을 string 타입을 갖는다는 것이다.

타입은 union type, Literal type 모두 지정이 가능하다.

타입이 Literal type, union type도 지정이 가능하다 했으니 다음 object도 정의할 수 있다.

```tsx
interface MyType {
	"font-size": MyType | number
}

let obj: MyType {
  "font-size" : {
		"font-size": {
			"font-size": number
		}
  }
}
```

이렇게 속성의 자료형도 object인 형태가 있다면, interface를 정의한 타입을 그대로 정의할 수 있다.

# keyof 연산자

object 자료형에 사용하게 되면, object 타입이 갖고 있는 모든 key를 union type으로 갖게되는 연산자다.

```tsx
interface Person {
	age: number;
	name: string;
}

type PersonKeys = keyof Person;
// "age" | "name" 타입이 된다.
```

그렇다면 위에서 사용한 index signatures 문법을 쓰면 어떤 결과가 나오나?

```tsx
interface Person {
	[key: string]: number;
}

type PersonKeys = keyof Person;
// string | number 타입이 된다.
```

### keyof 연산자로 타입 변환기 만들기

만약 정의한 type을 모두 변경해야할 일이 생긴다면 다음과 같이 진행할 수 있다.

```tsx
type Car = {
	color: boolean,
	model: boolean,
	price: boolean | number,
}

type TypeChanger<T> = {
	[key in keyof T]: string;
}

// Car 로 정의한 타입 속성들을 모두 string 으로 변경하고 싶다면 아래와같이 진행하면 된다.
type NewCar: TypeChanger<Car>;
```

코드를 분석해보자면,

[key in keyof T] 라는 index signature 문법이, 모든 T의 프로퍼티 key 값들을 의미하니까

제네릭 타입으로 들어오는 Car라는 타입의 속성 프로퍼티 key 들이 TypeChanger의 key 값이되고, 그 값의 타입은 string이 되어, NewCar라는 타입의 속성값들은 모두 string 타입을 갖게 되는 것이다.

쓸일이.. 많이 있을까 싶다..

# infer 키워드

```tsx
type Person<T> = T extends infer R ? R : unknown;
```

제네릭 타입이 들어간다면, 개발자가 Person 타입을 사용할때 <> 안에 타입을 넣을 수 있었다.

저기서 extends는 포함하고 있느냐는 의미로 T extends string 이면, T 가 string 입니까? 라는 조건식이 될수도 있다.

그래서 삼항연산자를 사용한 것이고,

infer 키워드는, R이라고 작명한데에다 T에서 타입을 유추한대로 집어 넣는 역할을 한다.

위 처럼 쓰지는 않고, 보통 함수 제네릭 타입이나 배열 등에서 쓰인다고 한다.

```tsx
type Person<T> = T extends (infer R)[] ? R : unknown;

type NewPerson = Person<boolean[]> // NewPerson의 타입은 boolean[] 이 아닌 boolean
```

```tsx
type Person<T> = T extends ( () => infer R ) ? R : unknown;

type NewPerson = Person<() => number >
// NewPerson의 타입은 number
```

이런식으로 사용하면 infer 키워드를 유용하게 쓸 수 있다고 한다.

infer 키워드 뒤에 R 이라고 써있는 건, Result를 의미하며, 다른 이름으로 사용해도 무방하긴 하다.