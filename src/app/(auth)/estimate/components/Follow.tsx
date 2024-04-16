'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '팔로우 신청',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '맞팔로우 신청',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '팔로우 기반 피드',
    value: '0-0',
    key: '0-0',
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
      <Card title="팔로우">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
