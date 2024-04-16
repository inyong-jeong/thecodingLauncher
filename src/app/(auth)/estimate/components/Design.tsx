'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const treeData = [
  {
    title: '고객사 디자인',
    value: '0-0',
    children: [
      {
        title: '커스텀',
        value: '0-0-1',
      },
      {
        title: '라이브러리 활용',
        value: '0-0-2',
      },
    ],
  },
  {
    title: '개발사 디자인',
    value: '0-1',
    children: [
      {
        title: '커스텀',
        value: '0-1-1',
      },
      {
        title: '라이브러리 활용',
        value: '0-1-2',
      },
    ],
  },
  {
    title: '개발사 제안 요청',
    value: '0-2',
    key: '0-2',
  },
]

const Design: React.FC = () => {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Card title="디자인">
      <TreeSelect
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        treeCheckable
        onChange={onChange}
      />
    </Card>
  )
}

export default Design
