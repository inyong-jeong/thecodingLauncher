'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '투표글 작성, 수정, 삭제',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '텍스트(제목)',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '투표 항목 추가',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '복수 선택',
        value: '0-0-2',
        key: '0-0-2',
      },
      {
        title: '최대 선택 갯수 제한',
        value: '0-0-3',
        key: '0-0-3',
      },
      {
        title: '익명 투표',
        value: '0-0-4',
        key: '0-0-4',
      },
      {
        title: '투표 항목 추가 허용',
        value: '0-0-5',
        key: '0-0-5',
      },
      {
        title: '투표 일정',
        value: '0-0-6',
        key: '0-0-6',
      },
      {
        title: '투표 종료 알림',
        value: '0-0-7',
        key: '0-0-7',
      },
    ],
  },
  {
    title: '투표 결과 표시',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '숫자로 표시',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '막대 차트',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: '도넛 차트',
        value: '0-1-2',
        key: '0-1-2',
      },
      {
        title: '기타',
        value: '0-1-3',
        key: '0-1-3',
      },
    ],
  },
  {
    title: '투표 내역 리스트 조회',
    value: '0-2',
    key: '0-2',
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
        title="투표"
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
