'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const treeData = [
  {
    title: '고객사 기획',
    value: '0-0',
    children: [
      {
        title: '40 ~ 80% 기획',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '0 ~ 40% 기획',
        value: '0-0-1',
        key: '0-0-1',
      },
    ],
  },
  {
    title: '개발사 전체 기획',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '아이디어 구상단계',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '개발사 제안 요청',
    value: '개발사 제안',
    key: '0-3',
  },
]

const Planning: React.FC = () => {
  const [value, setValue] = useState<string>('개발사 제안')

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Card title="기획">
      <TreeSelect
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="선택하세요"
        treeDefaultExpandAll
        treeCheckable
        onChange={onChange}
      />
    </Card>
  )
}

export default Planning
