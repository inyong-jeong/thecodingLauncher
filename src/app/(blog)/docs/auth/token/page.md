---
title: 토큰 관련
nextjs:
  metadata:
    title: token
    description: token 관련 주요 개념을 소개합니다.
---

타입스크립트와 자바스크립트는 지난 몇 년에 걸쳐 꾸준히 진화해 왔습니다. 우리가 만든 소스코드 중 일부는 부정적인 영향을 줄 수 있습니다.
습관적으로 많이 사용하는 패턴이지만 성능, 디버깅, 유지보수, 가독성 측면에서 의미가 없는 것들이 더러 있습니다. 이 글은 그러한 것들을 기술한 페이지 입니다.

---

## 1. 안티패턴

### 1-1. script 는 문서 하단에 위치시킵니다.

CSS나 자바스크립트 같은 외부 파일을 <head> 태그 안에 모아놓는 경우가 많은데, 지양하시기 바랍니다.
브라우저는 페이지를 렌더링하는 과정에서 CSS나 자바스크립트를 만나면, 렌더링을 멈추고 이 요소들을 컴파일합니다.
자바스크립트를 많이 사용하는 페이지일수록 렌더링 속도가 지연됩니다. 초창기에는 별로 차이 안나지만 서비스 규모가 커지면 커질수록 눈에 띄게 속도차이가 납니다.

- 예시

```js
<!DOCTYPE html>
<html>
  <head>
    ...
    <!-- 안좋은 예: head 태그 안에서 script 삽입 -->
    <script src="../js/jquery-1.1.1.min.js"></script>
    <script src="../js/test.js"></script>
  </head>
  <body>
    ...
    <!-- 좋은 예: body 태그 안, 맨 마지막에 삽입 -->
    <script src="../js/jquery-1.1.1.min.js"></script>
    <script src="../js/test.js"></script>
  </body>
  <html></html>
</html>
```

### 1-2. 외부 리소스 사용 시 URL을 직접 사용하지 않습니다.

URL을 직접 사용할 경우 URL이 변경되거나 CDN(content delivery network)이 서비스에 바로 반영되어 에러가 생길 수 있습니다.

- 예

```js
<!DOCTYPE html>
<html>
  <head>
    <title>개발 페이지</title>
  </head>
  <body>
    ...
    <!-- 안좋은 예 -->
    <script src="https://code.jquery.com/jquery-1.1.1.min.js"></script>

    <!-- 좋은 예 -->
    <script src="../js/jquery-3.3.1.min.js"></script>
    ...
  </body>
</html>
```

### 1-3. 전역 변수를 사용하지 않습니다.

웹 브라우저에서 전역 객체는 window 입니다. 선언하지 않고 사용하는 변수, 함수 밖에서 선언한 변수는 전역 변수가 된다.
전역 변수는 어플리케이션 전역에 공유되어 어디서나 읽고 쓸 수 있다. 다른 모듈에서 동일한 이름으로 사용하면 덮어쓸 수 있어 조심해야합니다.
전역 변수를 써야 하는 상황이라면 네임스페이스 패턴이나 즉시 실행 함수를 활용하는 것입니다.

- 네임스페이스 예

```js
// Bad - 전역(Global)에 name변수와 getName()함수 추가
const name = 'thecodingClub' // window.name === 'thecodingClub'
function getName() {
  alert(name)
}

// Good - 전역 객체 MyApp을 정의하고 name변수와 getName()함수를 그 안에 정의
const MyApp = {
  name: 'thecodingClub',
  getName() {
    alert(this.name)
  },
}

MyApp.getName()
```

- 즉시 실행 함수 예

```js
// Bad - 변수 today는 전역 변수가 되어 초기화 코드 이후에도 남아 있음
const today = new Date()

alert(`오늘은 ${today.getDate()}`)

// Good - 변수 today는 익명 함수의 지역 변수가 되므로 즉시 실행 함수 바깥에서 변수에 접근 불가
;(function () {
  const today = new Date()

  alert(`오늘은 ${today.getDate()}`)
})()

alert(today) // Error : today is not defined

// Tip - 즉시 실행 함수로 작성된 함수 내부에 정의된 변수와 함수는 반환되는 객체를 통해 접근 가능
const thecodingClub = (function () {
  const _privateName = 'thecodingClub'

  function getName() {
    return _privateName
  }

  function sayHello() {
    return `안녕, ${_privateName}`
  }

  return {
    whoAmI: getName,
    say: sayHello,
  }
})()

thecodingClub.whoAmI() // thecodingClub
thecodingClub.say() // 안녕, thecodingClub
```

### 1-4. 배열과 객체 생성 시 생성자 함수를 사용하지 않습니다.

배열이나 객체를 선언할 때 생성자(constructor)를 사용할 수도 있지만, 리터럴 표기법을 사용하는 것이 간결하고 직관적이며 속도 면에서도 좋습니다.
리터럴 표기법은 생성자 함수를 호출하지 않기 때문에 약간 더 빠릅니다. 생성자 표기법은 내부적으로 함수 호출이 포함되므로 오버헤드가 있습니다.

- 예

```js
// Bad
const emptyArr = new Array()
const emptyObj = new Object()

const arr = new Array(1, 2, 3, 4, 5)
const obj = new Object()
obj.prop1 = 'val1'
obj.prop2 = 'val2'

const arr2 = new Array(5)
arr2.length // 5

// Good
const emptyArr = []
const emptyObj = {}

const arr = [1, 2, 3, 4, 5]
const obj = {
  prop1: 'val1',
  prop2: 'val2',
}
```

### 1-5. 동등 비교 연산 시 ==를 사용하지 않는다. === 를 사용하세요.

자바스크립트는 두 값을 비교 또는 산술하기 전에 암묵적인 형변환을 실행한다. 이 때문에 다른 타입의 데이터 간에 비교와 산술이 가능하다.
하지만 암묵적인 형변환은 전체 코드의 데이터 관리를 어렵게 만들며 종종 연산 과정에서 발생하는 데이터 타입 오류를 덮어버린다.

- 예

```js
// Bad
undefined == null // true
123 == '123' // true
true == 1 // true
false == 0 // true

// Good
123 === '123' // false
Number('123') === 123 // true
String(123) === '123' // true
1 === true // false
0 === false // false
Boolean(1) === true // true
Boolean(0) === false // true
undefined === null // false
Boolean(undefined) === Boolean(null) // true

// 명시적 강제 형변환
Number('10') === 10
parseInt('10', 10) === 10
;((String(10) === '10' + '10') === 10(123).toString()) === '123'
Boolean(null) === false
Boolean(undefined) === false
```

### 1-6. 중괄호{}를 생략하지 않습니다.

if/while/do/for 문 사용 시 한 줄짜리 블록이면 중괄호({})를 생략하지 않는 것이 좋습니다.
중괄호가 없을 경우에 제어문의 동작 범위를 한눈에 파악하기 힘들기 때문입니다.

### 1-7. 배열의 순회는 for-in을 사용하지 않습니다. for-of 를 사용하세요. 객체의 프로퍼티 순회가 필요할 때 for-in 을 사용합니다.

for-in은 프로토타입 체인에 있는 모든 프로퍼티를 순회하므로 for를 사용할 때보다 훨씬 느립니다.
게다가 순회 순서는 브라우저에 따라 다르게 구현되어 있어서 배열의 요소 순회가 늘 index 순서대로 수행되지 않을 수 있습니다.

- 예

```js
// Bad
const scores = [70, 75, 80, 61, 89, 56, 77, 83, 93, 66]
let total = 0

for (let score in scores) {
  total += scores[score]
}

// Good
const scores = [70, 75, 80, 61, 89, 56, 77, 83, 93, 66]
let total = 0
const { length } = scores

for (let i = 0; i < length; i += 1) {
  total += scores[i]
}
```

### 1-8. 배열의 요소를 삭제할 때 delete를 사용하지 않습니다.

보통 객체(Object)의 프로퍼티를 삭제할 때 delete를 사용한다. 단순히 undefined로 설정되는 것이 아니라 프로퍼티 자체가 완전히 삭제되어 더 이상 존재하지 않는다. 자바스크립트에서는 배열(Array)도 객체이기때문에 delete를 사용할 수 있지만, 객체의 프로퍼티 삭제와 조금 다르게 동작한다. 배열에서 요소가 완전히 삭제되어 배열의 길이가 줄어들 것 같지만, 실제로는 해당 요소 값이 undefined가 될 뿐 배열 길이는 줄어들지 않는다.

### 1-9. 순회와 관련 없는 작업을 반복문 안에서 처리하지 않는다

반복문은 주어진 조건 표현식이 true로 평가되는 동안 실행을 반복한다.
반복 작업은 성능에 영향을 미치므로, 코드를 리팩토링할 때 첫 번째로 순환문의 최적화 작업을 고려합니다.
동일한 값을 반복적으로 할당하는 것처럼 순회와 상관없는 작업이 반복문 안에서 이뤄지지 않도록 주의합니다.

- 예

```js
// Bad
for (let i = 0; i < days.length; i += 1) {
  const today = new Date().getDate()
  const element = getElement(i)

  if (today === days[i]) {
    element.className = 'today'
  }
}

// Good
const today = new Date().getDate()
const { length } = days
let element

for (let i = 0; i < length; i += 1) {
  if (today === days[i]) {
    element = getElement(i)
    element.className = 'today'
    break
  }
}
```

### 1-10. 반복문에서 continue를 사용하지 않습니다.

더글라스 크락포드는 "리팩토링을 통해 continue를 제거했을 때 성능이 향상되지 않은 경우를 본 적이 없다"고 말했을 정도로 continue사용 유무는 성능에 큰 영향을 미친다.
반복문 안에서 continue를 사용하면 자바스크립트 엔진에서 별도의 실행 컨텍스트를 만들어 관리한다. 이러한 반복문은 전체 성능에 영향을 주므로 사용하지 않는다.
continue를 잘 사용하면 코드를 간결하게 작성할 수 있지만, 과용하면 디버깅 시 개발자의 의도를 파악하기 어렵고 유지 보수가 힘들다.

- 안좋은 예

```js
let loopCount = 0

for (let i = 1; i < 10; i += 1) {
  if (i > 5) {
    continue
  }
  loopCount += 1
}
```

- 좋은 예

```js
for (let i = 1; i < 10; i += 1) {
  if (i <= 5) {
    loopCount += 1
  }
}
```

### 1-11. try-catch는 반복문 안에서 사용하지 않는다.

흔히 예외 처리를 위해 try-catch를 사용한다. try-catch를 반복문 안에서 사용하면, 순회가 반복될 때마다 런타임의 현재 스코프에서 예외 객체 할당을 위한 새로운 변수가 생성된다.

- 안좋은 예

```js
const {length} = array;

for (let i = 0; i < length; i += 1) {
  try {
    ...
  } catch (error) {
    ...
  }
}
```

- 좋은 예

```js
const {length} = array;

function doSomething() {
  try {
    ...
  } catch (error) {
    ...
  }
}

for (let i = 0; i < length; i += 1) {
  doSomething();
}
```

### 1-12. 불필요한 레이아웃을 발생시키지 않습니다. 필요하면 쓰라는것입니다. 무조건 하지 말라는게 아닙니다.

브라우저에서 생성된 DOM 노드는 레이아웃 값(너비, 높이, 위치)을 변경 시 영향받는 모든 노드(자기 자신, 자식 노드, 부모 노드, 조상 노드)의 값을 재계산하여 렌더 트리를 업데이트 합니다.
이러한 과정을 리플로우(reflow) 또는 레이아웃(layout)이라 한다.

레이아웃이 발생될 때
페이지 초기 렌더링 시
윈도우 리사이징 시
노드 추가 및 삭제 시
엘리먼트 크기 및 위치 변경 시
특정 프로퍼티( offsetHeight, offsetTop...)를 읽고 쓸 때
메서드(getClientRects(), getBoundingClientRect()...)를 호출할 때

강제 레이아웃이 연속하여 빠르게 실행되는 것을 레이아웃 스래싱이라 하며, 브라우저가 레이아웃을 몇 번이고 되풀이해서 재계산하기 때문에 성능에 좋지 않은 영향을 준다.
사용자 적을 때는 성능차이가 별로 눈에 띄지 않지만, 사용자가 많아질수록 기하급수적으로 그 차이가 드러납니다.

참조 링크 : https://gist.github.com/paulirish/5d52fb081b3570c81e3a

- 안좋은 예

```js
function resizeWidth(paragraphs, box) {
  const { length } = paragraphs

  for (let i = 0; i < length; i += 1) {
    paragraphs[i].style.width = `${box.offsetWidth}px`
  }
}
```

- 좋은 예

```js
function resizeWidth(paragraphs, box) {
  const { length } = paragraphs
  const width = box.offsetWidth

  for (let i = 0; i < length; i += 1) {
    paragraphs[i].style.width = `${width}px`
  }
}
```

### 1-13. 함수 생성자 new Function()은 사용하지 않는다

많이 사용하는 방법은 아니지만, 함수 생성자를 이용해서 함수를 선언할 수 있다. 이 경우, 문자열로 전달되는 파라미터가 수행 시점에 eval로 처리되어 실행 속도가 느려진다.
함수 생성자 (new Function())를 사용하면 문자열로 전달된 코드가 런타임에 평가되어 실행됩니다.
이는 마치 eval() 함수처럼 동작하여, 보안과 성능 측면에서 문제가 발생할 수 있습니다. 따라서, 일반적으로 권장되지 않으며, 필요한 경우에도 주의해서 사용해야 합니다.

- 안좋은 예

```js
const doSomething = new Function('param1', 'param2', 'return param1 + param2;')
```

- 좋은 예

```js
// Good (1) - 함수 선언식
function doSomething(param1, param2) {
  return param1 + param2
}

// Good (2) - 함수 표현식
const doSomething = function (param1, param2) {
  return param1 + param2
}
```

### 1-14. 네이티브 객체는 확장하거나 오버라이드 하지 않습니다.

자바스크립트는 동적인 특징이 있어 이미 선언된 객체의 프로퍼티를 추가, 삭제, 변경할 수 있다. Object.defineProperty를 사용하면 프로퍼티 속성을 지정할 수 있으며, 설정에 따라 프로퍼티 추가, 수정, 삭제가 불가능하게 할 수도 있습니다.
네이티브 객체의 프로토타입은 프로퍼티를 추가하거나 기존 프로퍼티를 재정의할 수 있다.
하지만 네이티브 객체를 확장하거나 이미 정의된 메서드를 재정의하면 네이티브 객체의 기본 동작을 기대한 다른 개발자에게 혼란을 줄 수 있다. 같은 이름의 메서드가 어떤 브라우저에서는 지원되고 어떤 브라우저에서는 지원되지 않는 상황에서 충돌이 발생할 수 있다. 자칫하면 네이티브 메서드를 실수로 덮어쓸 수도 있으며, 코드 내 예측할 수 없는 오류를 만들 수 있다.

참고 몽키패칭(monkey-patching): 네이티브 객체나 함수를 다른 객체나 함수로 확장하는 것을 몽키패칭이라 한다. 하지만 이는 캡슐화를 망치고 표준이 아닌 기능을 추가해 네이티브 객체를 오염되므로 사용하지 않는다. 이런 위험에도 불구하고, 신뢰성 있고 매우 중요한 몽키패칭의 특별한 한가지 사용법이 있는데, 바로 폴리필(polyfill)이다. 폴리필은 Array.prototype.map과 같이 자바스크립트 엔진에 새롭게 추가된 기능이 없는 경우, 비슷한 동작을 하는 다른 함수로 대체하는 것을 말한다. 폴리필과 같이 자바스크립트 기능의 호환성 유지 목적을 제외하고는 어떤 경우에도 네이티브 객체의 확장은 옳지 않다.

- 안좋은 예

```ts
const o = {
  x: 1,
  y: 2,
}

Object.prototype.getKeys = function () {
  const keys = []

  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      keys.push(key)
    }
  }

  return keys
}

o.getKeys()
```

- 좋은 예

```js
const o = {
  x: 1,
  y: 2,
}

function getKeys(obj) {
  const keys = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key)
    }
  }

  return keys
}

getKeys(o)
```

### 1-15. this에 대한 참조를 저장하지 않는다

this는 함수 실행 시점에 결정된다. 어떤 함수 내부에서 또 다른 함수를 호출하면 그 함수의 this는 상위 함수의 this와 같지 않다.
소스 코드 작성 시, 상위 함수 컨텍스트의 this를 참조해야 하는 경우가 있다. 비슷한 이름의 참조 변수(that, self, me...)를 만들고 내부 함수의 클로저로 사용하여 상위 함수의 this를 내부 함수의 전달할 수 있다.
this와 비슷한 이름의 참조 변수를 사용하는 것은 개발자에게 혼란을 줄 수 있다.

- 안좋은 예

```js
function() {
  const self = this;

  return function() {
    console.log(self);
  };
}

function() {
  const that = this;

  return function() {
    console.log(that);
  };
}

function() {
  const _this = this;

  return function() {
    console.log(_this);
  };
}

```

- 좋은 예

```js
function printContext() {
  return function () {
    console.log(this)
  }.bind(this)
}

function printContext() {
  return () => console.log(this)
}
```

### 1.16 배열 순회 시 매번 array.length속성을 참조하지 않는다 (Legacy)

for문은 주어진 조건 표현식이 true로 평가되는 동안 실행을 반복한다. 매 순회 시 조건 표현식을 다시 평가한다. 100번의 순회가 있었다면 100번의 평가가 수행된다. for문에서 반복 횟수만큼 매번 array.length속성을 참조하는 것은 비효율적이다. (최신 브라우저에서는 array.length를 캐시하지 않아도 성능에 큰 차이가 없지만 IE10 이하의 구형 브라우저에서는 성능 차이가 크다.)

- 안좋은 예

```js
// Bad
for (var i = 0; i < array.length; i += 1) {
  ...
}
```

- 좋은 예

```js
var len = array.length;

for (var i = 0; i < len; i += 1) {
  ...
}
```

## 2. typescript 주의해야 하는 패턴

### 2.1 strict 모드를 사용해야 합니다.

엄격한 룰을 적용하면 지금 당장은 시간이 오래 걸리지만 추후 유지보수 및 수정을 할 때 시간세이브를 할 수 있습니다. 시간세이브는 곧 회사의 매출로 연결됩니다.
또한 심리적으로 안정감이 생겨서 배포할 때도 정신적인 스트레스를 덜어 줍니다.

- 안좋은 예

```ts
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs"
  }
}

```

- 좋은 예

```ts
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "strict": true
  }
}
```

### 2.2 디폴트 값을 정의할 때 || 말고 ?? 문법을 사용합니다.

??는 || 와 달리 모든 falsy한 값이 아니라 null 과 undefined 값만 보정한다.

- 좋은 예

```ts
let username: string | null = null
let displayName = username ?? console.log(displayName) // 출력: "Guest"

// 예시 2: 객체의 속성이 null 또는 undefined일 때 디폴트 값 지정
interface User {
  id: number
  name?: string // name 속성이 옵셔널
}

let user: User = {
  id: 1,
  // name 속성이 없으므로 undefined
}

let userName = user.name ?? 'Unknown' // user.name이 undefined이면 "Unknown"이 할당됨

console.log(userName) // 출력: "Unknown"
```

### 2.3 타입을 아직 모른다면 any 타입을 사용하는 것보단 unknown 타입을 사용합니다. 일정이 급한 경우만 any 타입을 사용 합니다.

any 타입: 타입 체크를 하지 않고도 어떤 연산이든 수행할 수 있지만, 이로 인해 예상치 못한 타입 오류가 발생할 수 있습니다.

unknown 타입: 값을 사용하기 전에 반드시 타입 체크나 타입 단언을 통해 명시적으로 타입을 지정해야만 합니다. 이는 추가적인 코드 작성이 필요하지만, 그만큼 타입 안정성이 확보됩니다.

- 예

```ts
let value: any
let valueUnknown: unknown

value = 10 // 어떤 값이든 할당 가능
valueUnknown = 10 // unknown 타입에는 모든 값 할당 가능

let anyNumber: number = value // any 타입은 다른 타입에 할당 가능
// let unknownNumber: number = valueUnknown; // 에러: unknown 타입은 직접적인 할당 불가

if (typeof valueUnknown === 'number') {
  let unknownNumber: number = valueUnknown // 타입 체크 후 할당 가능
  console.log(unknownNumber) // 정상 동작
}

let strLength: number = value.length // any 타입은 모든 속성에 접근 가능 (런타임 에러 발생 가능)
// let strLengthUnknown: number = valueUnknown.length; // 에러: unknown 타입은 직접적인 속성 접근 불가
```

### 2.4 옵셔널 프로퍼티 사용을 지양합니다.

프로퍼티를 타입에서 옵셔널로 만드는 것이 더 쉽고 코드량이 적습니다. 하지만 이 방법은 만들게 될 Product에 대해 깊은 이해를 요구하며 Product에 대한 변경을 고려한다면 코드의 사용이 제한될 수 있다.

타입 시스템의 가장 큰 이점은 런타임에서 문제가 발생하기 전에 컴파일 타임 검증을 할 수 있다는 점이다.

프로퍼티 타입을 extends(확장)을 한다면 특정 속성을 명확히 하고, 코드의 가독성과 유지 보수성을 높이는 데 도움이 됩니다.

- 안좋은 예

```ts
interface Animal {
  type: 'bird' | 'mammal'
  name: string
  wingspan?: number
  lifespan?: number
}
```

- 좋은 예

```ts
interface Animal {
  type: 'bird' | 'mammal'
  name: string
}

interface Bird extends Animal {
  type: 'bird'
  wingspan: number
}

interface Mammal extends Animal {
  type: 'mammal'
  lifespan: number
}
```

### 2.5 한 문자 제너릭을 지양합니다.

공식 문서에서조차 한 문자 네이밍이 사용되고 있기 때문에 그 습관이 퍼졌다고 생각한다. 한 문자로 제너릭을 네이밍하는 것은 쉽고 빠르게 입력할 수 있으며 이름 전체를 쓰는 것에 비해 T 누르는 것은 생각이 덜 필요하다.

하지만 한 문자 변수 이름은 변수가 선언된 부분을 보지 않고서는 그 의미를 파악하기 힘들기 때문에 가독성이 떨어집니다.

- 안좋은 예

```ts
function fetchItem<T>(id: string): T {
  // 실제로는 API 호출 등을 통해 아이템을 가져오는 로직이 있어야 함
  return {} as T // 임시로 빈 객체를 반환하는 예시입니다.
}
```

- 좋은 예

```ts
function fetchItem<Item>(id: string): Item {
  // 실제로는 API 호출 등을 통해 아이템을 가져오는 로직이 있어야 함
  return {} as Item // 임시로 빈 객체를 반환하는 예시입니다.
}
```

### 2.6 불린이 아닌 것의 불린 검사는 지양합니다.

안좋은 예: if (!user.name)을 사용하여 user.name이 null 또는 undefined일 경우를 처리하려고 합니다.
하지만 이는 user.name이 null일 때도 false로 간주되어 버그의 원인이 될 수 있습니다. 따라서 정확히 undefined를 검사하는 것이 중요합니다.

좋은 예: if (user.name === undefined)을 사용하여 명시적으로 undefined를 검사합니다.
이렇게 하면 user.name이 실제로 정의되지 않은 경우와 구별할 수 있어 코드의 명확성과 안정성을 높입니다.

- 안좋은 예

```ts
function displayUserDetails(user: { name?: string }) {
  if (!user.name) {
    return 'Unknown user'
  }
  return `Hello, ${user.name}`
}
```

- 좋은 예

```ts
function displayUserDetails(user: { name?: string }) {
  if (user.name === undefined) {
    return 'Unknown user'
  }
  return `Hello, ${user.name}`
}
```

### 2.7 뱅뱅연산자 사용을 지양합니다.

뱅뱅연산자(!!)는 명시적이지 않고 의도를 명확히 전달하지 않을 수 있습니다. 코드의 의도를 명확히 하기 위해서는 명시적인 검사와 조건 처리가 필요합니다.
이는 코드의 가독성을 높이고, 예기치 않은 버그를 방지하는 데 중요한 역할을 합니다.

- 안좋은 예

```ts
function validateUserInput(input: string | null | undefined): boolean {
  return !!input
}
```

- 좋은 예

```ts
function validateUserInput(input: string | null | undefined): boolean {
  return input !== undefined && input !== null && input.trim().length > 0
}
```

설명
안좋은 예: !!input을 사용하여 input이 null 또는 undefined가 아닌 경우를 검사하고 있습니다. 하지만 이는 불필요하게 복잡하고 읽기 어렵습니다.
또한, !! 연산자는 input이 falsy 값일 때도 false를 반환하기 때문에 예상치 못한 동작을 유발할 수 있습니다.

좋은 예: input !== undefined && input !== null로 명시적으로 null 또는 undefined를 검사합니다.
이와 동시에 input이 빈 문자열('')이 아닌 경우를 추가적으로 검사하여 정확한 검증을 수행합니다.

### 2.8 != null 사용을 지양합니다.

안좋은 예: != null을 사용하여 user.name이 null 또는 undefined가 아닌 경우를 검사합니다.
이는 null과 undefined를 구분하지 않고 처리하므로, name이 null인 경우와 name이 undefined인 경우를 명확히 구분하지 못할 수 있습니다.

좋은 예: !== undefined을 사용하여 명시적으로 undefined를 검사합니다.
이렇게 하면 name이 undefined인 경우에만 처리되며, null인 경우와 구분이 가능합니다.

추가적인 이유
뱅뱅 연산자(!= null)는 두 값이 동등하지 않은지만을 검사하므로, null과 undefined를 동시에 처리합니다.
하지만 코드에서 명확히 null인 경우와 undefined인 경우를 구분하여 처리하는 것이 가독성과 코드의 안정성을 높입니다.
이는 특히 타입스크립트의 strict 모드에서 더욱 중요합니다.
명시적으로 undefined를 체크함으로써 코드의 의도를 명확히 전달하고 예기치 않은 동작을 방지할 수 있습니다.

- 안좋은 예

```ts
function fetchUserDetails(user: { id: number; name?: string | null }): void {
  if (user.name != null) {
    console.log(`User name is ${user.name}`)
  } else {
    console.log(`User name is not available`)
  }
}
```

- 좋은 예

```ts
function fetchUserDetails(user: { id: number; name?: string | null }): void {
  if (user.name !== undefined) {
    console.log(`User name is ${user.name}`)
  } else {
    console.log(`User name is not available`)
  }
}
```
