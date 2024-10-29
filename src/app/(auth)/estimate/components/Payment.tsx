'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '카드 결제(PG 결제)',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '일반 카드 결제',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '결제 카드 등록',
        value: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '정기 결제(구독)',
            value: '0-0-1-0',
            key: '0-0-0-1-0',
          },
          {
            title: '정기 결제(사용양 만큼)',
            value: '0-0-1-1',
            key: '0-0-1-1',
          },
        ],
      },
    ],
  },
  {
    title: '계좌 결제',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '일반 계좌 결제',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '결제 계좌 등록',
        value: '0-1-1',
        key: '0-1-1',
        children: [
          {
            title: '정기 결제(구독)',
            value: '0-1-1-0',
            key: '0-1-1-0',
          },
          {
            title: '정기 결제(사용양 만큼)',
            value: '0-1-1-1',
            key: '0-1-1-1',
          },
        ],
      },
    ],
  },
  {
    title: '인앱 결제',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '구글 인앱',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: '애플 인앱',
        value: '0-2-1',
        key: '0-2-1',
      },
    ],
  },
  {
    title: '간편 결제',
    value: '0-3',
    key: '0-3',
    children: [
      {
        title: '토스 페이',
        value: '0-3-0',
        key: '0-3-0',
      },
      {
        title: '네이버 페이',
        value: '0-3-1',
        key: '0-3-1',
      },
      {
        title: '카카오 페이',
        value: '0-3-2',
        key: '0-3-2',
      },
      {
        title: '페이코 페이',
        value: '0-3-3',
        key: '0-3-3',
      },
      {
        title: '삼성 페이',
        value: '0-3-4',
        key: '0-3-4',
      },
      {
        title: '기타',
        value: '0-3-5',
        key: '0-3-5',
      },
    ],
  },
  {
    title: '적립금(포인트)',
    value: '0-4',
    key: '0-4',
  },
  {
    title: '쿠폰 발급',
    value: '0-5',
    key: '0-5',
  },
  {
    title: '시간, 거리 비례 결제',
    value: '0-6',
    key: '0-6',
    children: [
      {
        title: '시간으로 계산',
        value: '0-6-0',
        key: '0-6-0',
      },
      {
        title: '거리로 계산',
        value: '0-6-1',
        key: '0-6-1',
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
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  }

  return (
    <>
      <Card
        title="결제"
        extra={
          <Button onClick={() => setValue(['0-0'])} color="slate">
            <span>기본값 적용</span>
          </Button>
        }
      >
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
