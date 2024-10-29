---
title: nextAuth 관련
nextjs:
  metadata:
    title: nextAuth
    description: nextAuth 관련 주요 개념을 소개합니다.
---

Next.js는 Serverless를 지원하도록 처음부터 설계되었습니다.
NextAuth.js를 사용하여 인증을 수행하는 것이 정말 간단합니다.
next-auth의 공식문서를 기반으로 토큰, 세션방식 인증 소스코드를 기술합니다.

---

## 1. NextAuth 왜쓸까요?

### 1-1. 유연합니다.

- 모든 OAuth 서비스와 함께 작동하도록 설계되었으며 OAuth 1.0, 1.0A, 2.0 및 OpenID Connect를 지원합니다.
- 다양한 인기 있는 로그인 서비스 에 대한 기본 지원
- 이메일/비밀번호 없는 인증 지원
- 모든 백엔드 (Active Directory, LDAP 등) 를 사용하여 상태 비저장 인증을 지원합니다.
- JSON 웹 토큰과 데이터베이스 세션을 모두 지원합니다.
- Serverless용으로 설계되었지만 어디에서나 실행 가능(AWS Lambda, Docker, Heroku 등)

### 1-2. 데이터베이스와 함께 사용하거나 데이터베이스 없이도 사용할 수 있습니다.

- URL을 직접 사용할 경우 URL이 변경되거나 CDN(content delivery network)이 서비스에 바로 반영되어 에러가 생길 수 있습니다.
- 데이터를 제어할 수 있는 오픈 소스 솔루션
- BYOD(Bring Your Own Database)를 지원하며 모든 데이터베이스와 함께 사용할 수 있습니다.
- MySQL, MariaDB, Postgres, SQL Server, MongoDB 및 SQLite 에 대한 기본 지원
- 인기 있는 호스팅 제공업체의 데이터베이스와 잘 작동합니다.
- 데이터베이스 없이도 사용 가능 (예: OAuth + JWT)
- (feat) 이메일 로그인을 위해서는 일회용 확인 토큰을 저장하기 위한 데이터베이스를 구성해야 합니다.

### 1-3. 보안이 우수합니다.

- 비밀번호 없는 로그인 메커니즘 사용을 장려합니다
- 기본적으로 보안이 유지되도록 설계되었으며 사용자 데이터를 보호하기 위한 모범 사례를 장려합니다.
- POST 경로에서 크로스 사이트 요청 위조 토큰 사용(로그인, 로그아웃)
- 기본 쿠키 정책은 각 쿠키에 적합한 가장 제한적인 정책을 목표로 합니다.
- JSON 웹 토큰이 활성화되면 기본적으로 A256GCM으로 암호화됩니다(JWE)
- 개발자의 편의를 위해 대칭 서명 및 암호화 키를 자동 생성합니다.
- 단기 세션을 지원하기 위한 탭/창 동기화 및 keepalive 메시지 기능이 있습니다.
- Open Web Application Security Project 에서 발행한 최신 지침을 구현하려고 시도합니다.
- 고급 옵션을 사용하면 JSON 웹 토큰을 인코딩 및 디코딩하기 위해 어떤 계정에 로그인이 허용되는지 제어하는 ​​루틴을 직접 정의하고, 사용자 지정 쿠키 보안 정책과 세션 속성을 설정하여 누가 로그인할 수 있는지와 세션을 얼마나 자주 재검증해야 하는지 제어할 수 있습니다.

## 2. nextAuth 토큰 기반

### 2.1 라이브러리 설치

타입스크립트 쓰시더라도 next-auth package 안에 타입 정의 되어 있어서 안심하셔도 됩니다.

```js
명령어에
npm install next-auth
또는
yarn add next-auth
또는
pnpm add next-auth
입력합니다.
```

### 2.2 API route 추가

next 13.2 이상 기준으로 app/ 경로에다가 해당 파일은 추가합니다.
역할은 dynamic route handler 역할입니다. 그리고 기본적인 전역 config 설정입니다.

dynamic route handler 정의가 헷갈리시면 검색해 보셔요.

```js
app/api/auth/[...nextauth].js 추가하세요.

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
```

위 파일을 추가하면 /api/auth/\* 를 거치는 모든 요청은 해당 파일에의해 자동으로 handle 됩니다.

### 2.3 authOptions 관련

환경변수들

1. NEXTAUTH_URL

OAuth 제공자와의 인증 과정에서 올바른 콜백 URL을 설정합니다.
이메일 인증을 위한 링크를 생성할 때 올바른 URL을 포함합니다.
NextAuth.js의 API 경로(예: /api/auth)를 올바르게 처리합니다.

```js
NEXTAUTH_URL=https://example.com
```

2. NEXTAUTH_SECRET

NextAuth.js JWT를 암호화하고 이메일 인증 토큰을 해시하는 데 사용됩니다. 이는 NextAuth와 미들웨어에서 secret 옵션의 기본 값입니다.

3. NEXTAUTH_URL_INTERNAL

만약 제공된다면, 서버 측 호출은 NEXTAUTH_URL 대신 이것을 사용합니다. 서버가 사이트의 정규 URL에 접근할 수 없는 환경에서 유용합니다. 기본값은 NEXTAUTH_URL입니다.

```js
NEXTAUTH_URL_INTERNAL=http://10.240.8.16
```

Options

사용자가 자신이 선호하는 기존 로그인으로 로그인할 수 있도록 하는 OAuth 정의입니다. (e.g. Google, Facebook, Twitter, GitHub, Email, etc)

1. providers

- default value : []
- Required : Yes

2. secret

- Default value : string
- Required : Yes, in production

NEXTAUTH_SECRET 세팅했으면 정의할 필요 없어요~

3. session

- Default value : obejct
- Required : No

초기값은 다음과 같습니다.

```js
session: {
  // Choose how you want to save the user session.
  // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
  // If you use an `adapter` however, we default it to `"database"` instead.
  // You can still force a JWT session by explicitly defining `"jwt"`.
  // When using `"database"`, the session cookie will only contain a `sessionToken` value,
  // which is used to look up the session in the database.
  strategy: "database",

  // Seconds - How long until an idle session expires and is no longer valid.
  maxAge: 30 * 24 * 60 * 60, // 30 days

  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
  updateAge: 24 * 60 * 60, // 24 hours

  // The session token is usually either a random UUID or string, however if you
  // need a more customized session token string, you can define your own generate function.
  generateSessionToken: () => {
    return randomUUID?.() ?? randomBytes(32).toString("hex")
  }
}
```

4. jwt

JSON Web Tokens(JWT)는 session: { strategy: "jwt" } 옵션을 활성화하면 세션 토큰으로 사용할 수 있습니다.

- Default value : obejct
- Required : No

초기값은 다음과 같습니다.

```js
jwt: {
  // The maximum age of the NextAuth.js issued JWT in seconds.
  // Defaults to `session.maxAge`.
  maxAge: 60 * 60 * 24 * 30,
  // You can define your own encode/decode functions for signing and encryption
  async encode() {},
  async decode() {},
}
```

5. pages

사용자 정의 로그인, 로그아웃 및 오류 페이지를 만들려는 경우 사용할 URL을 지정하세요.

- Default value : {}
- Required : No

```js
pages: {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
}
```

6. callbacks

주어진 작업이나 이벤트가 완료된 후에 실행됩니다.
비동기적으로 작동하여 프로그램의 실행 흐름을 방해하지 않습니다.

- Default value : {}
- Required : No

```js
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    return true
  },
  async redirect({ url, baseUrl }) {
    return baseUrl
  },
  async session({ session, token, user }) {
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    return token
  }
}
```

7. events

- Default value : object
- Required : No

이러한 이벤트 핸들러들은 사용자 인증과 관련된 다양한 작업들을 처리합니다.

```js
events: {
  async signIn(message) { /* on successful sign in */ },
  async signOut(message) { /* on signout */ },
  async createUser(message) { /* user created */ },
  async updateUser(message) { /* user updated - e.g. their email was verified */ },
  async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
  async session(message) { /* session is active */ },
}
```

이외에도 몇가지 속성이 더 있지만 자주 쓰이는 것 위주로 기술하고 넘어갑니다.
공부는 꼬리에 꼬리를 물어서 깊게 파다보면 한도끝도 없으니 어느 적정선에서 끊어야 합니다.

### 2.4 세션 유지

useSession 을 사용하기 위해서는 <SessionPrivider /> 를 application 루트에다가 노출시켜야 합니다.

```js
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
```

### 2.5 프론트 엔드 - React Hook 추가

useSession React Hook은 어떠한 누군가가 로그인 했는지 안했는지 체크하기 위한 가장 쉬운 방법입니다.

```js
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
```

### 2.6 백엔드 - API Route

API Route 를 보호하기 위해서 getServerSession() 함수를 사용할 수 있습니다.

```js
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    res.send({
      content:
        'This is protected content. You can access this content because you are signed in.',
    })
  } else {
    res.send({
      error:
        'You must be signed in to view the protected content on this page.',
    })
  }
}
```

### 2.7 확장성

로그인 과정에서 서버측에서 생성된 값을 클라이언트 측으로 전달하는 방법을 설명합니다.

```js
...
callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}
...
```

Now whenever you call getSession or useSession, the data object which is returned will include the accessToken value.

```js
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Component() {
  const { data } = useSession()
  const { accessToken } = data

  return <div>Access Token: {accessToken}</div>
}
```

### 2.8 Configuring callback URL (OAuth only)

OAuth 제공자 설정: 제공자(예: Google, Facebook 등)를 사용하는 경우, 제공자의 설정에서 **콜백 URL(callback URL)**을 구성해야 합니다. 콜백 URL은 사용자가 인증을 완료한 후 제공자가 리디렉션할 URL입니다.
이 과정은 OAuth 제공자의 설정을 통해 콜백 URL을 정확히 설정하고, 해당 URL을 통해 인증 프로세스를 완료할 수 있도록 하는 것입니다.

### 3 Client API 정리

아래의 library 들은 session과 상호작용을 쉽게하기 위해 제공되는 API 입니다.

<!-- ## 3.1 useSession()

- Client Side: Yes
- Server Side: No

로그인 했는지 확인하기 위해 사용되는 react hook 입니다.

```js
import { useSession } from 'next-auth/react'

export default function Component() {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return <p>Signed in as {session.user.email}</p>
  }

  return <a href="/api/auth/signin">Sign in</a>
}
```

useSession() returns an object containing two values: data and status:

data: This can be three values: Session / undefined / null.
when the session hasn't been fetched yet, data will be undefined
in case it failed to retrieve the session, data will be null
in case of success, data will be Session.
status: enum mapping to three possible session states: "loading" | "authenticated" | "unauthenticated"

If after the initial loading state there was no session found, you can define the appropriate action to respond.
You can also define an onUnauthenticated() callback, if you would like to do something else:

```js
import { useSession } from 'next-auth/react'

export default function Admin() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  })

  if (status === 'loading') {
    return 'Loading or not authenticated...'
  }

  return 'User is logged in'
}
```

```js
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return children
}
``` -->
