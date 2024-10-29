'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const treeData = [
  {
    title: '0~15 페이지',
    value: '0-0',
  },
  {
    title: '15 ~ 30 페이지',
    value: '0-1',
  },
  {
    title: '30 ~ 45 페이지',
    value: '0-2',
  },
  {
    title: '45 ~ 60 페이지',
    value: '0-3',
  },
  {
    title: '60 ~ 80 페이지',
    value: '0-4',
  },
  {
    title: '80 ~ 120 페이지',
    value: '0-5',
  },
  {
    title: '120 ~ 160 페이지',
    value: '0-6',
  },
  {
    title: '160 페이지 이상',
    value: '0-7',
  },
]

const Communication: React.FC = () => {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Card
      title="UI 페이지 수"
      extra={
        <Button onClick={() => setValue('0-2')} color="slate">
          <span>기본값 적용</span>
        </Button>
      }
    >
      <TreeSelect
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={onChange}
      />
    </Card>
  )
}

export default Communication
