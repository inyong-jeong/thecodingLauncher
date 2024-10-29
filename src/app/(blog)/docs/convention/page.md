---
title: Clean Code for Typescript and Javascript
nextjs:
  metadata:
    title: Clean Code
    description: 타입스크립트, 자바스크립트 클린코드 입니다.
---

가독성, 성능최적화, 리팩토링이 용이한 소프트웨어 규칙입니다. 컴퓨터 과학 기술의 역사는 다른 학문들에 비해 오래되지 않아 여전히 점진적으로 개선되고 있습니다.
해당 클린코드 규칙은 타입스크립트를 기준으로 해서 작성된 문서입니다.

시중에 표준적으로 많이 적용되는 문서들을 재가공 및 정리한 문서라는 것 말씀드립니다.
100% 모두 준수 해야한다는 강박관념을 가질 필요는 없습니다. 해당 클린코드 규칙이 정답이라는 것도 아닙니다.

또한 이론적인 정석은 알고있더라도 해당 이론을
현실속에서 완벽하게 적용하는 것은 굉장히 힘든 일입니다. 대부분의 일은 빨리 되게하는 것이 훨씬 중요합니다. 리팩토링은 차후에 해도 되니깐요.

다만, 해당 클린코드 규칙은 일반적으로 통용되는 소스코드 규칙입니다.
말하자면, 준수하는게 틀린 방법보단 올바른 방법으로 인도할 확률이 상당히 높습니다.

(feat : 회사에는 항상 우선순위가 존재합니다. 회사입장에서 우선순위 1순위는 다른 것을 다 제쳐두고 매출을 불러일으키는 일이 우선순위가 가장 높습니다.
즉, 해당 클린코드를 준수하는 것보다 우선순위가 높은 무언가(마감기한이 시급한 일)가 있다면 그 일부터 하시기 바랍니다.)

---

## 1. 변수

### 1-1. 의미있고 발음가능한 변수를 작명하세요.

함축된 변수명은 가독성을 떨어뜨리고 팀원들간에 소통이 힘들어집니다. 회사 내부에서 용어사전으로 변수명을 정해놓은게
아니라면 발음가능한 변수를 사용하기를 권장합니다.

명시적인 것이 길어지더라도 암시적인 것보단 가독성이 탁월합니다. 해당 사실을 팀원들이 모른다고 해서 공격적인 어조로
주장을 펼치지 않기 바랍니다.

- 안좋은 예

```ts
type userInfo = {
  fnm: string
  eml: string
  comp: string
  pdtod: number
}
```

- 좋은 예

```ts
type userInfo = {
  fullname: string
  email: string
  company: string
  productorder: number
}
```

### 1-2. 동일한 의미를 내포하는 변수는 같은 단어를 사용합니다.

- 안좋은 예

```ts
function getCustomerInfo(): Customer
function getCustomerDetails(): Customer
function getCustomerData(): Customer
```

- 좋은 예

```ts
function getCustomer(): Customer
```

### 1-3. 클래스나 객체 안에 중복되는 의미의 변수를 추가하지 않습니다.

- 안좋은 예

```ts
const Phone = {
  phoneMaker: 'apple',
  phoneModel: 'NH-94S',
  phoneColor: 'blue',
}

function paintPhone(phone, color) {
  phone.phoneColor = color
}
```

- 좋은 예

```ts
const Phone = {
  Maker: 'apple',
  Model: 'NH-94S',
  Color: 'blue',
}

function paintCar(phone, color) {
  phone.color = color
}
```

### 1-4. 삼항연산자나 조건문 대신 기본 매개변수를 사용하세요.

- 안좋은 예

```ts
function getWeight(weight?: number) {
  const calculateWeight = weight !== undefined ? weight : 70
  // ...
}
```

- 좋은 예

```ts
function getWeight(weight: number = 70) {
  // ...
}
```

### 1-5. 처음 보는 사람이 의도를 알아채기 위해 enum을 사용하세요

열거형은 타입을 강제합니다. 그래서 정의된 값만을 사용할 수 있습니다. 그에 반해 상수는 단순히 특정 값을 변수에 할당하는 데 사용됩니다.
따라서 상수를 할당한 후에도 다른 값을 할당할 수 있습니다. 여기서 말하는 상수에 값을 할당하는 것은 객체 상수를 말하는 것입니다.

- 안좋은 예

```ts
const GENRE = {
  ROMANTIC: 'romantic',
  DRAMA: 'drama',
  COMEDY: 'comedy',
  DOCUMENTARY: 'documentary',
}

projector.configureFilm(GENRE.COMEDY)

class Projector {
  // Projector의 선언
  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
      // 실행되어야 하는 로직
    }
  }
}
```

- 좋은 예

```ts
enum GENRE {
  ROMANTIC,
  DRAMA,
  COMEDY,
  DOCUMENTARY,
}

projector.configureFilm(GENRE.COMEDY)

class Projector {
  // Projector의 선언
  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
      // 실행되어야 하는 로직
    }
  }
}
```

## 2. 함수

### 2-1. 함수의 매개변수는 많아야 3개 여야 합니다.

함수 매개변수가 3개 이상인 경우 여러 케이스를 테스트 해야 하므로 경우의 수가 많아집니다.
많은 매개변수가 필요하다면 객체 리터럴을 사용하세요.

- 안좋은 예

```ts
function createModal(title: string, body: string, cancellable: boolean) {
  // ...
}

createModal('Kaa', 'ContentBody', true)
```

- 좋은 예

```ts
function createModal(options: {
  title: string
  body: string
  cancellable: boolean
}) {
  // ...
}

createModal({
  title: 'Foo',
  body: 'Bar',
  cancellable: true,
})
```

### 2-2. 함수는 한 가지만 해야합니다.

함수가 여러가지 역할을 수행하면 디버깅하기 어렵고 가독성이 떨어집니다.

- 안좋은 예

```ts
function emailClients(clients: Client[]) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client)
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}
```

- 좋은 예

```ts
function emailClients(clients: Client[]) {
  clients.filter(isActiveClient).forEach(email)
}

function isActiveClient(client: Client) {
  const clientRecord = database.lookup(client)
  return clientRecord.isActive()
}
```

### 2-3. 함수 매개변수로 플래그를 사용하지 마세요

매개변수에 플러그가 있다는 것은 함수가 두가지 이상의 일을 한다는 것입니다.
더 나아가서 함수가 수정되어야 할 때 분기처리 별로 수정을 해야 하므로 실수를 발생시킬 확률을 높입니다.

- 안좋은 예

```ts
// function createMail(name: string, temp: boolean) {
//   if (temp) {
//     fs.create(`./temp/${name}`)
//   } else {
//     fs.create(name)
//   }
// }
```

- 좋은 예

```ts
// function createTempFile(name: string) {
//   createMail(`./temp/${name}`)
// }

// function createMail(name: string) {
//   fs.create(name)
// }
```

### 2-4. 되도록이면 원본배열을 바꾸지 말고 얕은복사를 한 이후 값을 추가하세요.

자바스크립트에서 원시값은 값에 의해 전달되고 객체/배열은 참조에 의해 전달됩니다. 예를 들어, 객체와 배열의 경우 어떤 함수가 쇼핑 장바구니 배열을 변경하는 기능을 가지고 있다면, 구매하려는 아이템이 추가됨으로써 cart 배열을 사용하는 다른 함수는 이 추가의 영향을 받을 수 있습니다.

- 안좋은 예

```ts
function addItemToCart(cart: CartItem[], item: Item): void {
  cart.push({ item, date: Date.now() })
}
```

- 좋은 예

```ts
function addItemToCart(cart: CartItem[], item: Item): CartItem[] {
  return [...cart, { item, date: Date.now() }]
}
```

### 2-5. 전역 함수를 작성하지 마세요

전역을 더럽히는 것은 자바스크립트에서 나쁜 관습입니다. 왜냐하면 다른 라이브러리와 충돌날 수 있고 당신의 API의 사용자는 상용에서 예외가 발생할 때까지 전혀 모를 것이기 때문입니다. 한 예제를 생각해보겠습니다: 당신이 자바스크립트 네이티브 배열 메소드를 확장해서 두 배열 사이의 다른 점을 보여주는 diff 메소드를 추가하고 싶다면 어떨까요? Array.prototype에 당신의 새로운 함수를 작성할 것입니다. 하지만 동일한 기능을 수행하고 있는 다른 라이브러리와 충돌날 수 있습니다. 다른 라이브러리에서는 배열에서 첫 번째 요소와 마지막 요소 사이의 다름만 찾기 위해 diff 함수를 사용한다면 어떨까요? 이것이 단지 클래스를 사용해서 전역 Array를 상속하는 것이 더 좋은 이유입니다.

- 안좋은 예

```ts
declare global {
  interface Array<T> {
    diff(other: T[]): Array<T>
  }
}

if (!Array.prototype.diff) {
  Array.prototype.diff = function <T>(other: T[]): T[] {
    const hash = new Set(other)
    return this.filter((elem) => !hash.has(elem))
  }
}
```

- 좋은 예

```ts
class MyArray<T> extends Array<T> {
  diff(other: T[]): T[] {
    const hash = new Set(other)
    return this.filter((elem) => !hash.has(elem))
  }
}
```

### 2-6. 명령형 프로그래밍보다 함수형 프로그래밍을 지향하세요.

코드의 가독성, 모듈의 재사용성과 불변성적인 측면에서 함수형 프로그래밍이 선호됩니다.

- 안좋은 예

```ts
const product = [
  {
    name: 'A',
    code: 300,
  },
  {
    name: 'B',
    code: 100,
  },
  {
    name: 'C',
    code: 150,
  },
  {
    name: 'D',
    code: 300,
  },
]

let totalOutput = 0

for (let i = 0; i < product.length; i++) {
  totalOutput += product[i].code
}
```

- 좋은 예

```ts
const product = [
  {
    name: 'A',
    code: 300,
  },
  {
    name: 'B',
    code: 100,
  },
  {
    name: 'C',
    code: 150,
  },
  {
    name: 'D',
    code: 300,
  },
]

const totalOutput = product.reduce((sum, output) => sum + output.code, 0)

const totalOutput = product.reduce((sum, output) => sum + output.code, 0)
```

### 2-7. 조건문을 캡슐화 하세요.

- 안좋은 예

```ts
if (subscription.isTrial || account.balance > 0) {
  // ...
}
```

- 좋은 예

```ts
function canActivateService(subscription: Subscription, account: Account) {
  return subscription.isTrial || account.balance > 0
}

if (canActivateService(subscription, account)) {
  // ...
}
```

### 2-8. 부정 조건문을 피하세요

- 안좋은 예

```ts
function isAccountNotValid(email: string): boolean {
  // ...
}

if (isAccountNotValid(email)) {
  // ...
}
```

- 좋은 예

```ts
function isAccountValid(email): boolean {
  // ...
}

if (!isAccountValid(node)) {
  // ...
}
```

### 2-9. 불변성을 선호하세요

객체 생성 후 속성값을 변경할 수 있으면 시스템이 불안정합니다. 인터페이스의 각 속성 앞에 'readonly' 키워드를 추가해서
속성들이 불변하게 만들면 시스템이 안정적입니다. 모든 경우에 readonly 를 사용 하라는 것이 아닙니다.

언제 'readonly' 를 사용해야 할까요?

1. 불변성을 요구하는 경우

- 설정이나 구성 객체처럼 한 번 설정되면 변경되지 않아야 하는 경우

2. 데이터의 안정성이 중요한 경우

- 데이터가 의도치 않게 변경되지 않도록 보호해야 하는 경우

- 안좋은 예

```ts
interface Config {
  host: string
  port: string
  database: string
}
```

- 좋은 예

```ts
interface Config {
  readonly host: string
  readonly port: string
  readonly database: string
}
```

배열의 경우, ReadonlyArray<T>를 사용해서 읽기 전용의 배열을 생성할 수 있습니다.
이것은 push()와 fill()과 같은 변경을 막습니다. 하지만 값 자체를 변경하지 않는 concat(), slice()과 같은 기능은 사용할 수 있습니다.

읽기 전용 배열(ReadonlyArray<T>)을 사용해야 하는 경우는 주로 배열의 불변성을 유지해야 하는 상황에서 발생합니다. 불변성을 유지하는 배열을 사용하면 데이터의 예측 가능성을 높이고, 의도치 않은 변경으로부터 배열을 보호할 수 있습니다. 다음은 읽기 전용 배열을 사용해야 하는 몇 가지 경우입니다.

1. 데이터의 무결성 유지
   읽기 전용 배열을 사용하면 데이터가 의도치 않게 변경되는 것을 방지할 수 있습니다. 이는 데이터의 무결성을 유지하는 데 중요합니다.

```ts
type Config = {
  readonly settings: ReadonlyArray<string>
}

const config: Config = {
  settings: ['setting1', 'setting2', 'setting3'],
}

// config.settings.push('setting4'); // 오류: 'push' 속성은 읽기 전용 배열에 존재하지 않습니다.
```

2. 함수 인자로 사용
   함수에 배열을 인자로 전달할 때, 함수가 배열을 변경하지 않도록 보장하고 싶을 때 사용합니다. 이는 함수의 부작용을 줄이는 데 도움이 됩니다.

```ts
function printSettings(settings: ReadonlyArray<string>): void {
  settings.forEach((setting) => console.log(setting))
}

const settings = ['setting1', 'setting2', 'setting3']
printSettings(settings)

// settings.push('setting4'); // 오류: 'push' 속성은 읽기 전용 배열에 존재하지 않습니다.
```

3. API 응답 데이터
   외부 API로부터 받은 데이터를 변경하지 않도록 보장할 때 사용합니다. API 응답 데이터는 보통 불변으로 간주해야 합니다.

```ts
type ApiResponse = {
  readonly data: ReadonlyArray<string>
}

const response: ApiResponse = {
  data: ['item1', 'item2', 'item3'],
}

// response.data[0] = 'newItem'; // 오류: 읽기 전용 속성이므로 '0'에 할당할 수 없습니다.
```

- 안좋은 예

```ts
const array: number[] = [1, 4, 9]
array = [] // 에러
array.push(100) // 배열은 변경될 것입니다.
```

- 좋은 예

```ts
const array: ReadonlyArray<number> = [1, 4, 9]
array = [] // 에러
array.push(100) // 에러
```

### 2-10. 타입 VS 인터페이스

합집합 또는 교집합이 필요할 때 타입을 사용하세요.
extends 또는 implements가 필요할 때 인터페이스를 사용하세요.

- 안좋은 예

```ts
interface passwordConfig {
  // ...
}

interface DbConfig {
  // ...
}

type Shape = {
  // ...
}
```

- 좋은 예

```ts
type passwordConfig = {
  // ...
}

type DbConfig = {
  // ...
}

type Config = EmailConfig | DbConfig

// ...

interface Shape {
  // ...
}

class Rectangle implements Shape {
  // ...
}

class Ellipse implements Shape {
  // ...
}
```

### 2-11. 메소드 체이닝을 사용하세요

- 안좋은 예

```ts
class QueryBuilder {
  private collection: string
  private pageNumber: number = 1
  private itemsPerPage: number = 100
  private orderByFields: string[] = []

  from(collection: string): void {
    this.collection = collection
  }

  page(number: number, itemsPerPage: number = 100): void {
    this.pageNumber = number
    this.itemsPerPage = itemsPerPage
  }

  orderBy(...fields: string[]): void {
    this.orderByFields = fields
  }

  build(): Query {
    // ...
  }
}

// ...

const queryBuilder = new QueryBuilder()
queryBuilder.from('users')
queryBuilder.page(1, 100)
queryBuilder.orderBy('firstName', 'lastName')

const query = queryBuilder.build()
```

- 좋은 예

```ts
class QueryBuilder {
  private collection: string
  private pageNumber: number = 1
  private itemsPerPage: number = 100
  private orderByFields: string[] = []

  from(collection: string): this {
    this.collection = collection
    return this
  }

  page(number: number, itemsPerPage: number = 100): this {
    this.pageNumber = number
    this.itemsPerPage = itemsPerPage
    return this
  }

  orderBy(...fields: string[]): this {
    this.orderByFields = fields
    return this
  }

  build(): Query {
    // ...
  }
}

// ...

const query = new QueryBuilder()
  .from('users')
  .page(1, 100)
  .orderBy('firstName', 'lastName')
  .build()
```

## 3. 테스트

테스트는 배포보다 중요합니다. 테스트가 없거나 부족한 경우, 코드를 배포할 때마다 당신은 어떤 것이 작동하지 않을지 확실하지 않을 것입니다. 적절한 양의 테스트를 구성하는 것은 당신의 팀에게 달려있지만, 100%의 커버리지를 가진다면 배포할 때 마음의 평화를 얻을 것입니다.

테스트를 작성하지 않을 이유는 없습니다. 단, 기획과 디자인이 주기적으로 바뀌는 프로젝트는 테스트를 후반부에 하는 것을 권장드립니다.
타입스크립트의 타입을 지원하는 많은 양의 좋은 자바스크립트 테스트 프레임워크가 있으므로 당신의 팀이 선호하는 것을 찾아 사용하세요. 당신의 팀에 적합한 테스트 프레임워크를 찾았다면, 당신이 만드는 모든 새로운 기능/모듈을 위한 테스트를 항상 작성하는 것을 목표로 하세요.

### 3-1. 테스트의 이름은 테스트의 의도가 드러나야 합니다.

테스트가 실패했을 때 테스트의 이름을 보고 어떤 부분이 잘못됐는지 파악되야 합니다.

- 안좋은 예

```ts
describe('Calendar', () => {
  it('2/29/2020', () => {
    // ...
  })

  it('throws', () => {
    // ...
  })
})
```

- 좋은 예

```ts
describe('Calendar', () => {
  it('should handle leap year', () => {
    // ...
  })

  it('should throw when format is invalid', () => {
    // ...
  })
})
```

## 4. 에러 핸들링

### 4.1 에러처리

에러를 던지는 것은 좋은 것입니다! 에러를 던진다는 것은 런타임이 당신의 프로그램에서 뭔가 잘못되었을 때 식별하고 현재 스택에서 함수 실행을 멈추고, (노드에서) 프로세스를 종료하며, 스택 트레이스를 콘솔에 보여줌으로써 당신에게 해당 에러를 알려주는 것을 의미합니다.

throw 또는 reject 구문에서 항상 Error 타입을 사용하세요
타입스크립트뿐만 아니라 자바스크립트는 어떤 객체든지 에러를 throw 하는 것을 허용합니다. 또한, 프로미스는 어떤 객체라도 거부될 수 있습니다.
Error 타입에는 throw 구문을 사용하는 것이 바람직합니다. 당신의 에러가 상위 코드의 catch 구문에서 잡힐 수 있기 때문입니다. 문자열 메시지가 잡히는 것은 매우 혼란스러우며 이는 디버깅을 더 고통스럽게 만듭니다.
이와 같은 이유로 당신은 Error 타입으로 프로미스를 거부해야합니다.

- 안좋은 예

```ts
function calculateTotal(items: Item[]): number {
  throw 'Not implemented.'
}

function get(): Promise<Item[]> {
  return Promise.reject('Not implemented.')
}
```

- 좋은 예

```ts
function calculateTotal(items: Item[]): number {
  throw new Error('Not implemented.')
}

function get(): Promise<Item[]> {
  return Promise.reject(new Error('Not implemented.'))
}

// 또는 아래와 동일합니다:

async function get(): Promise<Item[]> {
  throw new Error('Not implemented.')
}
```

### 4.2 catch 절에서 에러 처리 부분을 비워두지 마세요.

catch 절에서 단지 에러를 받는 것만으로는 해당 에러에 대응할 수 없습니다. 또한, 콘솔에 에러를 기록하는 것(console.log)은 콘솔에 출력된 많은 것들 사이에서 발견되지 못할 수 있기 때문에 그다지 좋은 선택은 아닙니다. 당신이 어떤 코드를 try/catch로 감쌌다면, 그 코드에서 에러가 일어날 수 있으며, 즉 에러가 발생했을 때에 대한 계획이나 장치가 있어야 한다는 것을 의미합니다.

- 안좋은 예

```ts
try {
  functionThatMightThrow()
} catch (error) {
  console.log(error)
}

// 아래 예제는 훨씬 나쁩니다.

try {
  functionThatMightThrow()
} catch (error) {
  // 에러를 무시
}
```

- 좋은 예

```ts
import { logger } from './logging'

try {
  functionThatMightThrow()
} catch (error) {
  logger.log(error)
}
```

### 4.3 요청이 거부된 프로미스 객체를 무시하지 마세요

try/catch 절에서 받은 에러 처리 부분을 비워두면 안됩니다.

- 안좋은 예

```ts
getUser()
  .then((user: User) => {
    return sendEmail(user.email, 'Welcome!')
  })
  .catch((error) => {
    console.log(error)
  })
```

- 좋은 예

```ts
import { logger } from './logging'

getUser()
  .then((user: User) => {
    return sendEmail(user.email, 'Welcome!')
  })
  .catch((error) => {
    logger.log(error)
  })

// 또는 async/await 구문을 사용할 수 있습니다:

try {
  const user = await getUser()
  await sendEmail(user.email, 'Welcome!')
} catch (error) {
  logger.log(error)
}
```

## 5. 서식

### 5.1 서식은 주관적입니다.

여기서 말하는 서식이란 주석이 있어야 하느냐, 스타일 가이드, 코드 포맷터, 린트 등등을 말합니다. 여기에 있는 많은 규칙들과 같이 당신이 따르기 어려운 규칙은 없습니다. 중요한 점은 서식에 대해서 논쟁하지 않는 것입니다. 서식을 자동화하기 위한 도구들이 매우 많습니다.

그 중 하나를 사용하세요! 서식에 대해 논쟁하는 것은 엔지니어에게 시간과 돈 낭비일 뿐입니다. 미들급 3~4명에서 2~3시간동안 논쟁하면 수십만원이 허공에 날라가는 샘입니다! 논쟁할 시간에 어서 행동으로 옮기세요!
