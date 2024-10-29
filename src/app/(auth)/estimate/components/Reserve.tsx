'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '대관, 숙소, 미팅 등 예약',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '예약 일시 설정',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '예약 항목',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '예약 알림',
    value: '0-3',
    key: '0-3',
    children: [
      {
        title: '예약 완료 알림',
        value: '0-3-0',
        key: '0-3-0',
      },
      {
        title: '예약 임박 알림',
        value: '0-3-1',
        key: '0-3-1',
      },
    ],
  },
  {
    title: '예약 공유',
    value: '0-4',
    key: '0-4',
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
        title="예약"
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
