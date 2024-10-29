---
title: 아키텍쳐 설계 원리
nextjs:
  metadata:
    title: 아키텍쳐 설계
    description: 아키텍쳐를 설계하는 기본 원리를 설명합니다.
---

- 클린 아키텍쳐 설계를 준수해서 이론적인 부분과 간단한 예시들을 기술합니다.

---

## 1. 단일 책임 원칙 (Single Responsibility Principle, SRP)

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

**클래스형**

```js
// 나쁜 예: 하나의 클래스가 여러 책임을 가짐
class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  getUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}`
  }

  saveToDatabase() {
    console.log('Saving user to database...')
  }
}

// 좋은 예: 각 클래스가 하나의 책임만 가짐
class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  getUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}`
  }
}

class UserRepository {
  save(user) {
    console.log('Saving user to database...')
  }
}

const user = new User('Alice', 'alice@example.com')
const userRepository = new UserRepository()

console.log(user.getUserInfo()) // Name: Alice, Email: alice@example.com
userRepository.save(user) // Saving user to database...
```

**함수형**

```js
// 나쁜 예: 하나의 함수가 여러 책임을 가짐
function handleUser(user) {
  console.log(`Name: ${user.name}, Email: ${user.email}`)
  console.log('Saving user to database...')
}

// 좋은 예: 각 함수가 하나의 책임만 가짐
function formatUserInfo(user) {
  return `Name: ${user.name}, Email: ${user.email}`
}

function saveUserToDatabase(user) {
  console.log('Saving user to database...')
}

const user = { name: 'Alice', email: 'alice@example.com' }
console.log(formatUserInfo(user))
saveUserToDatabase(user)
```

## 2. 개방-폐쇄 원칙 (Open/Closed Principle, OCP)

- 정의 : 소프트웨어 엔티티(클래스, 모듈, 함수 등)는 확장에는 열려 있어야 하지만, 수정에는 닫혀 있어야 합니다. 즉, 기존 코드를 변경하지 않고 새로운 기능을 추가할 수 있어야 합니다.
- 이점 : 코드가 수정될 때 발생할 수 있는 오류를 줄이고, 새로운 요구사항에 유연하게 대처할 수 있습니다.

**클래스형**

```js
// 나쁜 예: 새로운 계산 로직을 추가하려면 기존 코드를 수정해야 함
class Calculator {
  calculate(operation, a, b) {
    if (operation === 'add') {
      return a + b
    } else if (operation === 'subtract') {
      return a - b
    }
    // 새로운 연산을 추가하려면 이곳에 수정이 필요함
  }
}

// 좋은 예: 새로운 연산을 추가할 때 기존 코드를 수정할 필요 없음
class Operation {
  execute(a, b) {
    throw new Error('This method should be overridden')
  }
}

class AddOperation extends Operation {
  execute(a, b) {
    return a + b
  }
}

class SubtractOperation extends Operation {
  execute(a, b) {
    return a - b
  }
}

class Calculator {
  calculate(operation, a, b) {
    return operation.execute(a, b)
  }
}

const calculator = new Calculator()
console.log(calculator.calculate(new AddOperation(), 5, 3)) // 8
console.log(calculator.calculate(new SubtractOperation(), 5, 3)) // 2
```

**함수형**

```js
// 나쁜 예: 새로운 계산 로직을 추가하려면 기존 코드를 수정해야 함
function calculate(operation, a, b) {
  if (operation === 'add') {
    return a + b
  } else if (operation === 'subtract') {
    return a - b
  }
  // 새로운 연산을 추가하려면 이곳에 수정이 필요함
}

// 좋은 예: 새로운 연산을 추가할 때 기존 코드를 수정할 필요 없음
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b, // 새로운 연산을 추가해도 calculate 함수는 수정되지 않음
}

function calculate(operation, a, b) {
  return operations[operation](a, b)
}

console.log(calculate('add', 5, 3)) // 8
console.log(calculate('multiply', 5, 3)) // 15
```

## 3. 리스코프 치환 원칙 (Liskov Substitution Principle, LSP)

- 정의 : 프로그램의 객체는 그 하위 타입의 객체로 대체할 수 있어야 하며, 이로 인해 프로그램의 기능이 변경되지 않아야 합니다.
- 이점 : 상속 구조에서의 일관성을 유지하고, 다형성(polymorphism)을 통한 코드 재사용성을 높입니다.

**클래스형**

```js
// 나쁜 예: 리스코프 치환 원칙 위반
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  setWidth(width) {
    this.width = width
  }

  setHeight(height) {
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width
    this.height = width // 정사각형은 높이와 너비가 같아야 함
  }

  setHeight(height) {
    this.width = height
    this.height = height
  }
}

function printArea(rectangle) {
  rectangle.setWidth(5)
  rectangle.setHeight(4)
  console.log(rectangle.getArea())
}

const rectangle = new Rectangle(2, 3)
printArea(rectangle) // 20

const square = new Square(2, 2)
printArea(square) // 16 (예상과 다른 결과)

//좋은 예
class Shape {
  getArea() {
    throw new Error('This method should be overridden')
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Square extends Shape {
  constructor(side) {
    super()
    this.side = side
  }

  getArea() {
    return this.side * this.side
  }
}

function printArea(shape) {
  console.log(shape.getArea())
}

const rectangle = new Rectangle(5, 4)
const square = new Square(5)

printArea(rectangle) // 20
printArea(square) // 25
```

**함수형**

```js
// 나쁜 예: 리스코프 치환 원칙 위반
function getRectangleArea(rectangle) {
  return rectangle.width * rectangle.height
}

const rectangle = { width: 5, height: 4 }
const square = { width: 4, height: 4 }

console.log(getRectangleArea(rectangle)) // 20
console.log(getRectangleArea(square)) // 16

// 좋은 예: 각 도형의 종류에 따라 별도의 함수를 사용
function getRectangleArea(rectangle) {
  return rectangle.width * rectangle.height
}

function getSquareArea(square) {
  return square.side * square.side
}

const square2 = { side: 4 }

console.log(getRectangleArea(rectangle)) // 20
console.log(getSquareArea(square2)) // 16
```

## 4. 인터페이스 분리 원칙 (Interface Segregation Principle, ISP)

- 정의 : 인터페이스는 특정 클라이언트를 위한 메서드들로 분리되어야 하며, 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 합니다.
- 이점 : 인터페이스의 복잡성을 줄이고, 클라이언트와의 결합도를 낮출 수 있습니다.

**클래스형**

```js
// 나쁜 예: 단일 클래스가 너무 많은 기능을 포함하고 있음
class MultiFunctionDevice {
  print(document) {
    console.log('Printing document...')
  }

  scan(document) {
    console.log('Scanning document...')
  }

  fax(document) {
    console.log('Faxing document...')
  }
}

class OldPrinter extends MultiFunctionDevice {
  scan(document) {
    throw new Error('Scan not supported!')
  }

  fax(document) {
    throw new Error('Fax not supported!')
  }
}

// 좋은 예: 인터페이스를 분리하여 필요 없는 기능에 의존하지 않도록 함
class Printer {
  print(document) {
    console.log('Printing document...')
  }
}

class Scanner {
  scan(document) {
    console.log('Scanning document...')
  }
}

class FaxMachine {
  fax(document) {
    console.log('Faxing document...')
  }
}

const printer = new Printer()
printer.print('My Document') // Printing document...
```

**함수형**

```js
// 나쁜 예: 하나의 함수가 너무 많은 기능을 포함하고 있음
function multiFunctionDevice(document, action) {
  if (action === 'print') {
    console.log('Printing document...')
  } else if (action === 'scan') {
    console.log('Scanning document...')
  } else if (action === 'fax') {
    console.log('Faxing document...')
  }
}

// 좋은 예: 필요한 기능만 수행하는 개별 함수 사용
function printDocument(document) {
  console.log('Printing document...')
}

function scanDocument(document) {
  console.log('Scanning document...')
}

function faxDocument(document) {
  console.log('Faxing document...')
}

const document = { content: 'Hello, world!' }

printDocument(document) // Printing document...
scanDocument(document) // Scanning document...
```

## 5. 의존성 역전 원칙 (Dependency Inversion Principle, DIP)

- 정의 : 고수준 모듈(정책 결정 계층)은 저수준 모듈(세부 사항 처리 계층)에 의존해서는 안 됩니다. 둘 다 추상화된 인터페이스에 의존해야 하며, 구체적인 구현이 아닌 추상화에 의존해야 합니다.
- 이점 : 모듈 간 결합도를 낮추어 변경에 유연하고, 재사용 가능한 코드를 작성할 수 있습니다.

**클래스형**

```js
// 나쁜 예: 고수준 모듈이 저수준 모듈에 의존
class MySQLDatabase {
  connect() {
    console.log('Connecting to MySQL database...')
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase()
  }

  getUser() {
    this.db.connect()
    console.log('Fetching user...')
  }
}

const userService = new UserService()
userService.getUser()

// 좋은 예: 고수준 모듈과 저수준 모듈이 추상화된 인터페이스에 의존
class Database {
  connect() {
    throw new Error('This method should be overridden')
  }
}

class MySQLDatabase extends Database {
  connect() {
    console.log('Connecting to MySQL database...')
  }
}

class MongoDBDatabase extends Database {
  connect() {
    console.log('Connecting to MongoDB database...')
  }
}

class UserService {
  constructor(db) {
    this.db = db
  }

  getUser() {
    this.db.connect()
    console.log('Fetching user...')
  }
}

const mysqlDatabase = new MySQLDatabase()
const mongoDatabase = new MongoDBDatabase()

const userService1 = new UserService(mysqlDatabase)
const userService2 = new UserService(mongoDatabase)

userService1.getUser() // Connecting to MySQL database... Fetching user...
userService2.getUser() // Connecting to MongoDB database... Fetching user...
```

**함수형**

```js
// 나쁜 예: 고수준 모듈이 저수준 모듈에 의존
function userService() {
  function connectToMySQL() {
    console.log('Connecting to MySQL database...')
  }

  connectToMySQL()
  console.log('Fetching user...')
}

userService()

// 좋은 예: 고수준 모듈과 저수준 모듈이 추상화된 인터페이스에 의존
function createUserService(databaseConnection) {
  return function () {
    databaseConnection.connect()
    console.log('Fetching user...')
  }
}

function connectToMySQL() {
  return {
    connect: () => console.log('Connecting to MySQL database...'),
  }
}

function connectToMongoDB() {
  return {
    connect: () => console.log('Connecting to MongoDB database...'),
  }
}

const mySQLService = createUserService(connectToMySQL())
const mongoDBService = createUserService(connectToMongoDB())

mySQLService() // Connecting to MySQL database... Fetching user...
mongoDBService() // Connecting to MongoDB database... Fetching user...
```

## 6. 모듈화 (Modularity)

- 정의 : 시스템을 여러 독립적인 모듈로 나누어 설계합니다. 각 모듈은 고유한 기능을 가지며, 다른 모듈과 최소한의 인터페이스만 공유합니다.
- 이점 : 코드의 이해와 유지보수가 용이해지고, 모듈 단위로 테스트 및 재사용이 가능합니다.

**클래스형**

```js
// 나쁜 예: 모든 코드가 한 클래스에 모여 있어 모듈화되지 않음
class ShoppingCart {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  calculateTotal() {
    let total = 0
    for (let item of this.items) {
      total += item.price * item.quantity
    }
    return total
  }

  formatCurrency(value) {
    return `$${value.toFixed(2)}`
  }

  printTotal() {
    const total = this.calculateTotal()
    console.log(this.formatCurrency(total))
  }
}

const cart = new ShoppingCart()
cart.addItem({ name: 'Apple', price: 0.5, quantity: 10 })
cart.addItem({ name: 'Orange', price: 0.75, quantity: 5 })
cart.printTotal() // $10.75

// 좋은 예: 모듈로 분리하여 코드 관리 및 재사용성 향상
class CartCalculator {
  calculateTotal(items) {
    let total = 0
    for (let item of items) {
      total += item.price * item.quantity
    }
    return total
  }
}

class CurrencyFormatter {
  formatCurrency(value) {
    return `$${value.toFixed(2)}`
  }
}

class ShoppingCart {
  constructor(calculator, formatter) {
    this.items = []
    this.calculator = calculator
    this.formatter = formatter
  }

  addItem(item) {
    this.items.push(item)
  }

  printTotal() {
    const total = this.calculator.calculateTotal(this.items)
    console.log(this.formatter.formatCurrency(total))
  }
}

const calculator = new CartCalculator()
const formatter = new CurrencyFormatter()

const cart = new ShoppingCart(calculator, formatter)
cart.addItem({ name: 'Apple', price: 0.5, quantity: 10 })
cart.addItem({ name: 'Orange', price: 0.75, quantity: 5 })
cart.printTotal() // $10.75
```

**함수형**

```js
// 나쁜 예: 모든 코드가 한 파일에 모여 있어 모듈화를 하지 않음
function calculateTotal(items) {
  let total = 0
  for (let item of items) {
    total += item.price * item.quantity
  }
  return total
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`
}

const items = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Orange', price: 0.75, quantity: 5 },
]

const total = calculateTotal(items)
console.log(formatCurrency(total))

// 좋은 예: 모듈로 분리하여 코드 관리 및 재사용성 향상
// file: calculate.js
export function calculateTotal(items) {
  let total = 0
  for (let item of items) {
    total += item.price * item.quantity
  }
  return total
}

// file: format.js
export function formatCurrency(value) {
  return `$${value.toFixed(2)}`
}

// file: main.js
import { calculateTotal } from './calculate.js'
import { formatCurrency } from './format.js'

const items = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Orange', price: 0.75, quantity: 5 },
]

const total = calculateTotal(items)
console.log(formatCurrency(total))
```

## 7. 레이어드 아키텍처 (Layered Architecture)

- 정의 : 소프트웨어 시스템을 여러 계층으로 나누어 설계합니다. 일반적으로 프레젠테이션 계층, 비즈니스 로직 계층, 데이터 접근 계층 등으로 구분됩니다.
- 이점 : 각 계층은 다른 계층의 세부 사항에 의존하지 않으므로, 계층 간의 변경이 독립적으로 이루어질 수 있습니다.

**클래스형**

```js
// 나쁜 예: 모든 로직이 한 곳에 혼합되어 있음
class UserApp {
  getUser(id) {
    // 데이터 접근 로직
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]
    const user = users.find((user) => user.id === id)

    // 비즈니스 로직
    if (user) {
      return `User: ${user.name}`
    } else {
      return 'User not found'
    }
  }
}

const app = new UserApp()
console.log(app.getUser(1)) // User: Alice

// 좋은 예: 레이어드 아키텍처를 적용
class UserRepository {
  getUserData(id) {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]
    return users.find((user) => user.id === id)
  }
}

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  getUser(id) {
    const user = this.userRepository.getUserData(id)
    if (user) {
      return `User: ${user.name}`
    } else {
      return 'User not found'
    }
  }
}

class UserApp {
  constructor(userService) {
    this.userService = userService
  }

  displayUser(id) {
    console.log(this.userService.getUser(id))
  }
}

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const app = new UserApp(userService)

app.displayUser(1) // User: Alice
```

**함수형**

```js
// 나쁜 예: 모든 로직이 한 곳에 혼합되어 있음
function getUser(id) {
  // 데이터 접근 로직
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]
  const user = users.find((user) => user.id === id)

  // 비즈니스 로직
  if (user) {
    return `User: ${user.name}`
  } else {
    return 'User not found'
  }
}

console.log(getUser(1)) // User: Alice

// 좋은 예: 레이어드 아키텍처를 적용
// file: dataLayer.js
export function getUserData(id) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]
  return users.find((user) => user.id === id)
}

// file: businessLayer.js
import { getUserData } from './dataLayer.js'

export function getUser(id) {
  const user = getUserData(id)
  if (user) {
    return `User: ${user.name}`
  } else {
    return 'User not found'
  }
}

// file: presentationLayer.js
import { getUser } from './businessLayer.js'

console.log(getUser(1)) // User: Alice
```

## 8. DRY 원칙 (Don't Repeat Yourself)

- 정의 : 동일한 코드나 로직을 반복하지 않고, 중복을 최소화하여 코드의 일관성을 유지합니다.
- 이점 : 코드의 유지보수를 쉽게 하고, 수정 시 중복된 부분을 모두 변경해야 하는 번거로움을 없앱니다.

**클래스형**

```js
// 나쁜 예: 중복된 코드가 여러 곳에 존재
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  printUserGreeting() {
    const fullName = `${this.firstName} ${this.lastName}` // 중복 코드
    console.log(`Hello, ${fullName}`)
  }

  printUserFarewell() {
    const fullName = `${this.firstName} ${this.lastName}` // 중복 코드
    console.log(`Goodbye, ${fullName}`)
  }
}

const user = new User('Alice', 'Johnson')
user.printUserGreeting() // Hello, Alice Johnson
user.printUserFarewell() // Goodbye, Alice Johnson

// 좋은 예: 중복 코드를 제거하고 재사용
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  printUserGreeting() {
    console.log(`Hello, ${this.getFullName()}`)
  }

  printUserFarewell() {
    console.log(`Goodbye, ${this.getFullName()}`)
  }
}

const user = new User('Alice', 'Johnson')
user.printUserGreeting() // Hello, Alice Johnson
user.printUserFarewell() // Goodbye, Alice Johnson
```

**함수형**

```js
// 나쁜 예: 중복된 코드가 여러 곳에 존재
function getUserFullName(user) {
  return `${user.firstName} ${user.lastName}`
}

function printUserGreeting(user) {
  const fullName = `${user.firstName} ${user.lastName}` // 중복 코드
  console.log(`Hello, ${fullName}`)
}

function printUserFarewell(user) {
  const fullName = `${user.firstName} ${user.lastName}` // 중복 코드
  console.log(`Goodbye, ${fullName}`)
}

// 좋은 예: 중복 코드를 제거하고 재사용
function getUserFullName(user) {
  return `${user.firstName} ${user.lastName}`
}

function printUserGreeting(user) {
  const fullName = getUserFullName(user)
  console.log(`Hello, ${fullName}`)
}

function printUserFarewell(user) {
  const fullName = getUserFullName(user)
  console.log(`Goodbye, ${fullName}`)
}

const user = { firstName: 'Alice', lastName: 'Johnson' }
printUserGreeting(user) // Hello, Alice Johnson
printUserFarewell(user) // Goodbye, Alice Johnson
```

## 9. KISS 원칙 (Keep It Simple, Stupid)

- 정의 : 코드를 가능한 한 단순하고 명확하게 유지합니다. 복잡성을 줄이는 것이 목표입니다.
- 이점 : 코드의 가독성을 높이고, 디버깅과 유지보수가 용이해집니다.

**클래스형**

```js
// 나쁜 예: 불필요하게 복잡한 코드
class NumberUtility {
  isPositiveNumber(number) {
    if (typeof number === 'number') {
      if (number > 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}

// 좋은 예: 단순하고 명확한 코드
class NumberUtility {
  isPositiveNumber(number) {
    return typeof number === 'number' && number > 0
  }
}

const utility = new NumberUtility()
console.log(utility.isPositiveNumber(5)) // true
console.log(utility.isPositiveNumber(-5)) // false
```

**함수형**

```js
// 나쁜 예: 불필요하게 복잡한 코드
function isPositiveNumber(number) {
  if (typeof number === 'number') {
    if (number > 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// 좋은 예: 단순하고 명확한 코드
function isPositiveNumber(number) {
  return typeof number === 'number' && number > 0
}

console.log(isPositiveNumber(5)) // true
console.log(isPositiveNumber(-5)) // false
```

## 10. SOLID 원칙 통합

- 정의 : 앞에서 설명한 SRP, OCP, LSP, ISP, DIP 원칙의 첫 글자를 따서 만든 약어로, 객체 지향 설계의 5대 원칙을 의미합니다.
- 이점 : SOLID 원칙을 따르면 코드의 유연성, 확장성, 유지보수성이 크게 향상됩니다.

**클래스형**

```js
// SRP, OCP: 계산 로직과 사용자 서비스 로직을 분리하고 확장 가능하게 설계
class Operation {
  execute(a, b) {
    throw new Error('This method should be overridden')
  }
}

class AddOperation extends Operation {
  execute(a, b) {
    return a + b
  }
}

class SubtractOperation extends Operation {
  execute(a, b) {
    return a - b
  }
}

class Calculator {
  calculate(operation, a, b) {
    return operation.execute(a, b)
  }
}

// DIP: 데이터베이스와 사용자 서비스의 의존성을 역전
class Database {
  connect() {
    throw new Error('This method should be overridden')
  }
}

class MySQLDatabase extends Database {
  connect() {
    console.log('Connecting to MySQL database...')
  }
}

class UserService {
  constructor(db) {
    this.db = db
  }

  getUser() {
    this.db.connect()
    console.log('Fetching user...')
  }
}

const calculator = new Calculator()
console.log(calculator.calculate(new AddOperation(), 5, 3)) // 8

const mysqlDatabase = new MySQLDatabase()
const userService = new UserService(mysqlDatabase)
userService.getUser() // Connecting to MySQL database... Fetching user...
```

**함수형**

```js
// SOLID 원칙을 종합한 예시
// file: calculate.js (OCP, SRP)
export function calculate(operation, a, b) {
  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  }
  return operations[operation](a, b)
}

// file: userService.js (DIP)
export function createUserService(databaseConnection) {
  return function () {
    databaseConnection.connect()
    console.log('Fetching user...')
  }
}

// file: main.js (ISP)
import { calculate } from './calculate.js'
import { createUserService } from './userService.js'

function connectToMySQL() {
  return {
    connect: () => console.log('Connecting to MySQL database...'),
  }
}

const mySQLService = createUserService(connectToMySQL())
mySQLService()

console.log(calculate('add', 5, 3)) // 8
```
