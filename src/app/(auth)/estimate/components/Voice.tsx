'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '1:1 통화',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '단체 통화',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '통화 설정',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '듣기 음량 설정',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: '마이크 음량 설정',
        value: '0-2-1',
        key: '0-2-1',
      },
      {
        title: '마이크 음소거',
        value: '0-2-2',
        key: '0-2-2',
      },
      {
        title: '대화방 소리 차단',
        value: '0-2-3',
        key: '0-2-3',
      },
      {
        title: '녹음',
        value: '0-2-4',
        key: '0-2-4',
      },
      {
        title: '참여자 내보내기',
        value: '0-2-5',
        key: '0-2-5',
      },
      {
        title: '참여 비밀번호',
        value: '0-2-6',
        key: '0-2-6',
      },
    ],
  },
  {
    title: '캠 사용하기',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '화면 공유',
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
      <Card title="통화&캠">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
