'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '지도API(지도 검색, 주변 지역 표출)',
    value: '0-0',
    key: '0-0',
  },
  {
    title: 'GPS',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '현재 나의 위치 설정',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '주변 콘텐츠 표출',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: '거리 정보',
        value: '0-1-2',
        key: '0-1-2',
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
        title="지도"
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
