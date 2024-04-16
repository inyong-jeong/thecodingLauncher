'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '칸반보드',
    value: '0-0',
    key: '0-0',
  },
  {
    title: 'drag/drop',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '전자서명',
    value: '0-2',
    key: '0-2',
  },
  {
    title: 'webRTC(실시간 데이터교환)',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '의약품 API 연동',
    value: '0-4',
    key: '0-4',
  },
  {
    title: '화장품 API 연동',
    value: '0-5',
    key: '0-5',
  },
  {
    title: '주식 API 연동',
    value: '0-6',
    key: '0-6',
  },
  {
    title: '복잡한 계산 산출',
    value: '0-7',
    key: '0-7',
  },
  {
    title: 'AI api 연동',
    value: '0-8',
    key: '0-8',
  },
  {
    title: '기타 외부 API 연동',
    value: '0-9',
    key: '0-9',
  },
]

const Extra: React.FC = () => {
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
      <Card title="기타/외부api">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Extra
