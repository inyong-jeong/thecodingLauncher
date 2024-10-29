'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '시험',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '객관식',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '단답형',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '장문형',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '토너먼트형 시험',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '시험 시간 제한',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '결과 공유하기',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '오답노트',
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
        title="시험"
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
