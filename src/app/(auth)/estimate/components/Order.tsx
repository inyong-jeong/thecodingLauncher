'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '주문하기',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '주문 취소',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '배송 추적하기',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '주문 상태 표시',
    value: '0-3',
    key: '0-3',
  },
  {
    title: 'CS관련 기능',
    value: '0-4',
    key: '0-4',
    children: [
      {
        title: '상품 질문, 답변',
        value: '0-4-0',
        key: '0-4-0',
      },
      {
        title: '환불 신청',
        value: '0-4-1',
        key: '0-4-1',
      },
      {
        title: '교환 신청',
        value: '0-4-2',
        key: '0-4-2',
      },
      {
        title: '반품 신청',
        value: '0-4-3',
        key: '0-4-3',
      },
    ],
  },
  {
    title: '장바구니',
    value: '0-5',
    key: '0-5',
    children: [
      {
        title: '회원 장바구니',
        value: '0-5-0',
        key: '0-5-0',
      },
      {
        title: '비회원 장바구니',
        value: '0-5-1',
        key: '0-5-1',
      },
    ],
  },
]

const Industry: React.FC = () => {
  const [value, setValue] = useState(['0-0'])

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
        title="주문관리"
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
