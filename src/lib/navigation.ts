export const navigation = [
  // {
  //   title: '정적 분석',
  //   links: [
  //     { title: 'Eslint', href: '/docs/eslint' },
  //     {
  //       title: 'Prettier',
  //       href: '/docs/prettier',
  //     },
  //     {
  //       title: 'Webpack',
  //       href: '/docs/webpack',
  //     },
  //     {
  //       title: 'Babel',
  //       href: '/docs/babel',
  //     },
  //   ],
  // },
  // {
  //   title: '디자인 시스템',
  //   links: [
  //     { title: '기획', href: '/docs/convention' },
  //     {
  //       title: '디자인',
  //       href: '/docs/antiPattern',
  //     },
  //   ],
  // },
  {
    title: '클린코드',
    links: [
      { title: 'Convention', href: '/docs/convention' },
      {
        title: 'Anti-pattern',
        href: '/docs/antiPattern',
      },
    ],
  },
  {
    title: '인증',
    links: [
      { title: '기본개념', href: '/docs/auth' },
      // { title: '세션', href: '/docs/auth/session' },
      // { title: '토큰', href: '/docs/auth/token' },
      { title: 'nextAuth(세션, 토큰)', href: '/docs/auth/nextAuth' },
      {
        title: 'springSecurity(세션, 토큰)',
        href: '/docs/auth/springSecurity',
      },
      { title: 'clerk 인증', href: '/docs/auth/nextAuth' },
      { title: 'keycloak 인증', href: '/docs/auth/nextAuth' },
      { title: 'microsoft auth', href: '/docs/auth/nextAuth' },
      { title: 'sso 인증', href: '/docs/auth/nextAuth' },
      {
        title: '소셜(네이버, 카카오, 페북, 구글) 인증',
        href: '/docs/auth/nextAuth',
      },
    ],
  },
  {
    title: '아키텍쳐 설계',
    links: [
      { title: '기본 개념', href: '/docs/architecture' },
      { title: '프론트 설계', href: '/docs/frontEnd' },
      { title: '공통 컴포넌트 설계', href: '/docs/commonFront' },
      { title: '스토리북 설계', href: '/docs/storybook' },
      { title: '백엔드 설계', href: '/docs/backEnd' },
      { title: 'API 설계', href: '/docs/backEnd' },
      { title: 'DB 설계', href: '/docs/backEnd' },
      { title: '인프라 설계', href: '/docs/backEnd' },
    ],
  },
  {
    title: '기획, 디자인',
    links: [
      { title: 'designPattern', href: '/docs/designPattern' },
      { title: '플로우 차트', href: '/docs/designPattern' },
      { title: '정보구조도', href: '/docs/designPattern' },
      { title: '피그마 ', href: '/docs/designPattern' },
      { title: '스토리북 ', href: '/docs/designPattern' },
    ],
  },
  {
    title: '보안',
    links: [{ title: 'secure', href: '/docs/secure' }],
  },
  {
    title: '성능최적화',
    links: [
      { title: '프론트', href: '/docs/reactPerform' },

      { title: 'React', href: '/docs/reactPerform' },
      {
        title: 'Next',
        href: '/docs/nextPerform',
      },
      { title: '이미지 CDN', href: '/docs/reactPerform' },
      {
        title: '서버',
        href: '/docs/express',
      },
      {
        title: 'SQL',
        href: '/docs/mysql',
      },
    ],
  },
  {
    title: '디버깅',
    links: [
      { title: 'React', href: '/docs/debug' },
      { title: '프론트', href: '/docs/debug' },
      { title: '백엔드', href: '/docs/debug' },
    ],
  },
  {
    title: '전역 상태관리',
    links: [
      { title: 'Zustand', href: '/docs/stateManage' },
      { title: 'Redux', href: '/docs/stateManage' },
      { title: 'Recoil', href: '/docs/stateManage' },
      { title: 'Mobx', href: '/docs/stateManage' },
    ],
  },
  {
    title: '데이터 통신',
    links: [
      { title: 'react-query', href: '/docs/dataNetwork' },
      { title: 'fetch', href: '/docs/dataNetwork' },
      { title: 'axios', href: '/docs/dataNetwork' },
      { title: 'ajax', href: '/docs/dataNetwork' },
    ],
  },
  {
    title: '테스트',
    links: [
      { title: '테스트 시나리오', href: '/docs/test' },
      { title: '단위, 통합, E2E', href: '/docs/test' },
      { title: 'cypress', href: '/docs/test' },
      { title: 'jest', href: '/docs/test' },
    ],
  },
  {
    title: '출시',
    links: [
      { title: 'android', href: '/docs/infra' },
      { title: 'ios', href: '/docs/infra' },
      { title: '크로스 플랫폼', href: '/docs/infra' },
      { title: '하이브리드앱', href: '/docs/infra' },
      { title: '웹', href: '/docs/infra' },
    ],
  },
]
