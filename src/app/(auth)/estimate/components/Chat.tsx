'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '실시간 채팅 유형',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '1:1 채팅',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '그룹 채팅',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '채팅 파일 첨부',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '채팅 내용 검색',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '채팅 내용 복사',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '선택 내용 답장',
    value: '0-4',
    key: '0-4',
  },
  {
    title: '대화 상대 내보내기',
    value: '0-5',
    key: '0-5',
  },
  {
    title: '메시지 개수 표시',
    value: '0-6',
    key: '0-6',
  },
  {
    title: '채팅 알림 (카톡)',
    value: '0-7',
    key: '0-7',
  },
  {
    title: '채팅 알림 (시스템)',
    value: '0-8',
    key: '0-8',
  },
  {
    title: '상대방 신고',
    value: '0-9',
    key: '0-9',
  },
  {
    title: '상대방 차단',
    value: '0-10',
    key: '0-10',
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
        title="채팅"
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
