'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '스플래쉬',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '이미지',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '영상',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '로고',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '팝업',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '진입 비밀번호',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '숫자',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: '패턴',
        value: '0-2-1',
        key: '0-2-1',
      },
      {
        title: '생체인증',
        value: '0-2-2',
        key: '0-2-2',
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
        title="온보딩"
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
