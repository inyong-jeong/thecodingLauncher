'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '웹푸시',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '앱푸시',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '카카오푸시',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '메일알림',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '관리자 푸시',
    value: '0-4',
    key: '0-4',
    children: [
      {
        title: '푸시알림 개별 발송',
        value: '0-4-0',
        key: '0-4-0',
      },
      {
        title: '단체 알림 발송',
        value: '0-4-1',
        key: '0-4-1',
      },
    ],
  },
  {
    title: '시스템 푸시',
    value: '0-5',
    key: '0-5',
    children: [
      {
        title: '알림내역 리스트',
        value: '0-5-0',
        key: '0-5-0',
      },
      {
        title: '알림 네비게이트',
        value: '0-5-1',
        key: '0-5-1',
      },
      {
        title: '알림 삭제',
        value: '0-5-2',
        key: '0-5-2',
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
        title="푸시알림"
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
