'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '데이터 조회/수정/삭제',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '재고 관리',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '고객 관리',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '상품 관리',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '주문 관리',
    value: '0-4',
    key: '0-4',
  },
  {
    title: '배송 관리',
    value: '0-5',
    key: '0-5',
  },
  {
    title: '정산 관리',
    value: '0-6',
    key: '0-6',
  },
  {
    title: '통계 산출',
    value: '0-7',
    key: '0-7',
  },
]

const Admin: React.FC = () => {
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
        title="어드민 기능"
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

export default Admin
