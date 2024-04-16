'use client'

import React, { Children, useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '교육',
    value: '교육',
    key: '0-0',
    children: [
      {
        title: '온라인 강의 플랫폼',
        value: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '유데미,코세라,패스트캠퍼스,인프런,칸아카데미',
            value: '0-0-0-0',
            key: '0-0-0-0',
          },
        ],
      },
      {
        title: '인터랙티브 플랫폼',
        value: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '듀어링고, 스픽, 말해보카, 코드아카데미',
            value: '0-0-1-0',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: '온라인 튜터링 서비스',
        value: '0-0-2',
        key: '0-0-2',
        children: [
          {
            title: 'tutor.com, wyzant, chegg',
            value: '0-0-2-0',
            key: '0-0-2-0',
          },
        ],
      },
      {
        title: '전자책 학습 서비스',
        value: '0-0-3',
        key: '0-0-3',
        children: [
          {
            title: 'Kindle, goggle pay books, scrbd',
            value: '0-0-3-0',
            key: '0-0-3-0',
          },
        ],
      },
      {
        title: '학습 관리 플랫폼',
        value: '0-0-4',
        key: '0-0-4',
        children: [
          {
            title: 'canvas, moodle',
            value: '0-0-4-0',
            key: '0-0-4-0',
          },
        ],
      },
      {
        title: '온라인 과외 플랫폼',
        value: '0-0-5',
        key: '0-0-5',
        children: [
          {
            title: '밀당피티, verbiling',
            value: '0-0-5-0',
            key: '0-0-5-0',
          },
        ],
      },
    ],
  },
  {
    title: '엔터테인먼트 및 미디어',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '영화, TV',
        value: '0-1-0',
        key: '0-1-0',
        children: [
          {
            title: '넷플릭스, 디즈니, 쿠팡플레이',
            value: '0-1-0-0',
            key: '0-1-0-0',
          },
        ],
      },
      {
        title: '음악',
        value: '0-1-1',
        key: '0-1-1',
        children: [
          {
            title: 'spotify, 유튜브 뮤직, 애플 뮤직',
            value: '0-1-1-0',
            key: '0-1-1-0',
          },
        ],
      },
      {
        title: '전자책',
        value: '0-1-2',
        key: '0-1-2',
        children: [
          {
            title: '밀리의 서재, 리디북스',
            value: '0-1-2-0',
            key: '0-1-2-0',
          },
        ],
      },
      {
        title: '웹툰',
        value: '0-1-3',
        key: '0-1-3',
        children: [
          {
            title: '네이버 웹툰',
            value: '0-1-3-0',
            key: '0-1-3-0',
          },
        ],
      },
      {
        title: '스트리밍',
        value: '0-1-4',
        key: '0-1-4',
        children: [
          {
            title: '아프리카 tv, 유튜브, 트위치, 치지직, 틱톡',
            value: '0-1-4-0',
            key: '0-1-4-0',
          },
        ],
      },
    ],
  },
  {
    title: '금융',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '토스, 카카오뱅크',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: '마이데이터',
        value: '0-2-1',
        key: '0-2-1',
      },
      {
        title: '증권어플',
        value: '0-2-3',
        key: '0-2-3',
      },
      {
        title: '바이낸스',
        value: '0-2-4',
        key: '0-2-4',
      },
    ],
  },
  {
    title: '음식 및 음료',
    value: '0-3',
    key: '0-3',
    children: [
      {
        title: '음식 주문',
        value: '0-3-0',
        key: '0-3-0',
        children: [
          {
            title: '배달의민족, 요기요, 쿠팡이츠',
            value: '0-3-0-0',
            key: '0-3-0-0',
          },
          {
            title: '매장별 주문(교촌, 비비큐)',
            value: '0-3-0-1',
            key: '0-3-0-1',
          },
        ],
      },
      {
        title: '맛집 예약',
        value: '0-3-1',
        key: '0-3-1',
        children: [
          {
            title: '캐치테이블',
            value: '0-3-1-0',
            key: '0-3-1-0',
          },
        ],
      },
      {
        title: '음식 레시피',
        value: '0-3-2',
        key: '0-3-2',
        children: [
          {
            title: '만개의 레시피',
            value: '0-3-2-0',
            key: '0-3-2-0',
          },
        ],
      },
      {
        title: '맛집 검색',
        value: '0-3-3',
        key: '0-3-3',
        children: [
          {
            title: '식신',
            value: '0-3-3-0',
            key: '0-3-3-0',
          },
          {
            title: '어디가지',
            value: '0-3-3-1',
            key: '0-3-3-1',
          },
        ],
      },
    ],
  },
  {
    title: '건강 및 의료',
    value: '0-4',
    key: '0-4',
    children: [
      {
        title: '홈트레이닝 서비스',
        value: '0-4-0',
        key: '0-4-0',
        children: [
          {
            title: '홈트레이닝, 다노',
            value: '0-4-0-0',
            key: '0-4-0-0',
          },
        ],
      },
      {
        title: '병원 방문 예약',
        value: '0-4-1',
        key: '0-4-1',
        children: [
          {
            title: '굿닥',
            value: '0-4-1-0',
            key: '0-4-1-0',
          },
        ],
      },
      {
        title: '식단관리',
        value: '0-4-2',
        key: '0-4-2',
        children: [
          {
            title: '삼성헬스, 밀리그램, 필리코치, 눔',
            value: '0-4-2-0',
            key: '0-4-2-0',
          },
        ],
      },
      {
        title: '비대면 진료',
        value: '0-4-3',
        key: '0-4-3',
        children: [
          {
            title: '닥터 나우, 나만의 닥터',
            value: '0-4-3-0',
            key: '0-4-3-0',
          },
        ],
      },
      {
        title: '성형 관련',
        value: '0-4-4',
        key: '0-4-4',
        children: [
          {
            title: '그루밍족, 강남언니',
            value: '0-4-4-0',
            key: '0-4-4-0',
          },
        ],
      },
    ],
  },
  {
    title: '이커머스',
    value: '0-5',
    key: '0-5',
    children: [
      {
        title: '일반 전자상거래',
        value: '0-5-0',
        key: '0-5-0',
        children: [
          {
            title: '아마존, 이베이, 쿠팡, 11번가',
            value: '0-5-0-0',
            key: '0-5-0-0',
          },
        ],
      },
      {
        title: '애완동물 관련',
        value: '0-5-1',
        key: '0-5-1',
        children: [
          {
            title: '팻프렌즈',
            value: '0-5-1-0',
            key: '0-5-1-0',
          },
        ],
      },
      {
        title: '육아용품 관련',
        value: '0-5-2',
        key: '0-5-2',
        children: [
          {
            title: '맘가이드, 화해',
            value: '0-5-2-0',
            key: '0-5-2-0',
          },
        ],
      },
      {
        title: '의류관련',
        value: '0-5-3',
        key: '0-5-3',
        children: [
          {
            title: '무신사, 지그재그, 에이블리, 29cm, zara, 하이버',
            value: '0-5-3-0',
            key: '0-5-3-0',
          },
        ],
      },
    ],
  },
  {
    title: '소셜네트워크(o2o중개, 매칭)',
    value: '0-6',
    key: '0-6',
    children: [
      {
        title: '구인구직',
        value: '0-6-0',
        key: '0-6-0',
        children: [
          {
            title: '잡코리아, 위시켓, 크몽, 소모임, 트레바리',
            value: '0-6-0-0',
            key: '0-6-0-0',
          },
        ],
      },
      {
        title: '데이팅앱',
        value: '0-6-1',
        key: '0-6-1',
        children: [
          {
            title: '위피, 아만다, 골드스푼, 정오의 데이트',
            value: '0-6-1-0',
            key: '0-6-1-0',
          },
        ],
      },
      {
        title: '커뮤니티',
        value: '0-6-2',
        key: '0-6-2',
        children: [
          {
            title: '레딧, 핀터레스트, 인스타그램, 페이스북, 산업별 커뮤니티',
            value: '0-6-2-0',
            key: '0-6-2-0',
          },
        ],
      },
    ],
  },
  {
    title: '여행 및 숙박',
    value: '0-7',
    key: '0-7',
    children: [
      {
        title: '숙박 예약 플랫폼',
        value: '0-7-0',
        key: '0-7-0',
        children: [
          {
            title: '에어비앤비, 야놀자',
            value: '0-7-0-0',
            key: '0-7-0-0',
          },
        ],
      },
      {
        title: '비행기 예약 플랫폼',
        value: '0-7-1',
        key: '0-7-1',
        children: [
          {
            title: '스카이 스캐너',
            value: '0-7-1-0',
            key: '0-7-1-0',
          },
        ],
      },
      {
        title: '여행 일정',
        value: '0-7-2',
        key: '0-7-2',
        children: [
          {
            title: '마이리얼트립, 트리플',
            value: '0-7-2-0',
            key: '0-7-2-0',
          },
        ],
      },
    ],
  },
  {
    title: '생산성',
    value: '0-8',
    key: '0-8',
    children: [
      {
        title: '협업툴',
        value: '0-8-0',
        key: '0-8-0',
        children: [
          {
            title: '트렐로, 아사나, 지라, 슬랙, 스윗, 잔디',
            value: '0-8-0-0',
            key: '0-8-0-0',
          },
        ],
      },
      {
        title: '캘린더',
        value: '0-8-1',
        key: '0-8-1',
        children: [
          {
            title: '구글 캘린더, 마소 아웃룩',
            value: '0-8-1-0',
            key: '0-8-1-0',
          },
        ],
      },
      {
        title: '화상채팅',
        value: '0-8-2',
        key: '0-8-2',
        children: [
          {
            title: '줌, 마이크로소프트 팀즈',
            value: '0-8-2-0',
            key: '0-8-2-0',
          },
        ],
      },
      {
        title: '전자서명',
        value: '0-8-3',
        key: '0-8-3',
        children: [
          {
            title: '모두싸인, 위드싸인',
            value: '0-8-3-0',
            key: '0-8-3-0',
          },
        ],
      },
    ],
  },
  {
    title: '부동산',
    value: '0-9',
    key: '0-9',
    children: [
      {
        title: '부동산 중개',
        value: '0-9-0',
        key: '0-9-0',
        children: [
          {
            title: '직방, 다방, 네이버 부동산, 집토스',
            value: '0-9-0-0',
            key: '0-9-0-0',
          },
        ],
      },
      {
        title: '아파트 거래',
        value: '0-9-1',
        key: '0-9-1',
        children: [
          {
            title: '아파트 실거래가, 호갱노노',
            value: '0-9-1-0',
            key: '0-9-1-0',
          },
        ],
      },
      {
        title: '토지, 빌딩, 상가',
        value: '0-9-2',
        key: '0-9-2',
        children: [
          {
            title: '디스코, 네모',
            value: '0-9-2-0',
            key: '0-9-2-0',
          },
        ],
      },
    ],
  },
  {
    title: '모빌리티',
    value: '0-10',
    key: '0-10',
    children: [
      {
        title: '자동차',
        value: '0-10-0',
        key: '0-10-0',
        children: [
          {
            title: '쏘카, 그린카, 우버, 겟차',
            value: '0-10-0-0',
            key: '0-10-0-0',
          },
        ],
      },
      {
        title: '스쿠터, 전동킥보드',
        value: '0-10-1',
        key: '0-10-1',
        children: [
          {
            title: '라임, bird, 킥고잉',
            value: '0-10-1-0',
            key: '0-10-1-0',
          },
        ],
      },
      {
        title: '지도',
        value: '0-10-2',
        key: '0-10-2',
        children: [
          {
            title: '네이버 지도, 카카오 맵, 구글지도',
            value: '0-10-2-0',
            key: '0-10-2-0',
          },
        ],
      },
      {
        title: '택시',
        value: '0-10-3',
        key: '0-10-3',
        children: [
          {
            title: '카카오 t, 티맵, 우티, 타다, 아이엠',
            value: '0-10-3-0',
            key: '0-10-3-0',
          },
        ],
      },
    ],
  },
  {
    title: '주거',
    value: '0-11',
    key: '0-11',
    children: [
      {
        title: '인테리어',
        value: '0-11-0',
        key: '0-11-0',
        children: [
          {
            title: '오늘의 집, 집닥, 집꾸미기',
            value: '0-11-0-0',
            key: '0-11-0-0',
          },
        ],
      },
      {
        title: '이사',
        value: '0-11-1',
        key: '0-11-1',
        children: [
          {
            title: '짐싸, 미소, 이사모아',
            value: '0-11-1-0',
            key: '0-11-1-0',
          },
        ],
      },
    ],
  },
]

const Industry: React.FC = () => {
  const [value, setValue] = useState(['0-0-0'])

  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue)
    setValue(newValue)
  }

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: '선택하세요',
    style: {
      width: '100%',
    },
  }

  return (
    <>
      <Card title="산업군&벤치마킹">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
