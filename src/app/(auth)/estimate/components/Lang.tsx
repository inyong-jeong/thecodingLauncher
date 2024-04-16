'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '영어',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '일본어',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '중국어',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '기타 언어',
    value: '0-1',
    key: '0-1',
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
      <Card title="다국어">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
