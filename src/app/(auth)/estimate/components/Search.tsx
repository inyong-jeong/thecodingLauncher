'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '제목 + 내용 검색',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '작성자 검색',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '유사 검색어 보기',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '내부 서비스 데이터 기반',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: '외부 데이터 기반',
        value: '0-2-1',
        key: '0-2-1',
      },
    ],
  },
  {
    title: '추천 검색어',
    value: '0-3',
    key: '0-3',
    children: [
      {
        title: '최근 검색 기록',
        value: '0-3-0',
        key: '0-3-0',
      },
      {
        title: '인기 검색어',
        value: '0-3-1',
        key: '0-3-1',
      },
    ],
  },
  {
    title: '검색 검색어 하이라이트',
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
      <Card title="검색">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
