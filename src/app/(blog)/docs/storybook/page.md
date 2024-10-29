---
title: 스토리북 메뉴얼
nextjs:
  metadata:
    title: 스토리북 메뉴얼
    description: 스토리북 메뉴얼을 사용하는 개념을 설명합니다.
---

<!-- - 아키텍쳐 설계 원칙을 준수해서 프론트 설계 방식을 기술합니다.
  next app 라우팅 방식을 예로 들어 설명합니다. -->

---

<!-- ## 1. 프론트 설계 원칙

### 1-1. Project SetUp

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-2. Folder Structure

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-3. Compnent Oraniztion

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-4. Styling

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-5. Data Fetching and APIs

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-6. State Management

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-7. Performance Optimization

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-8. Error Handling and Logging

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-9. Testing and CI/CD

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-10. Deployment and Hosting

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

### 1-11. Best Practices

- 정의 : 한 클래스는 하나의 책임만 가져야 하며, 이를 변경하는 이유는 오직 하나여야 합니다. 즉, 하나의 클래스나 모듈은 하나의 기능만 담당해야 합니다.
- 이점 : 유지보수가 쉬워지고, 코드의 변경이 한 부분에만 영향을 미치도록 제한됩니다.

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
```

## 2. 공통 컴포넌트 설계 원칙

## 3. 스토리북 사용 메뉴얼 -->
