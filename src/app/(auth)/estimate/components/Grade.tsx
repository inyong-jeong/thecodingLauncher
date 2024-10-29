'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '별점, 평가글 등록, 수정, 삭제',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '평가애 대댓글 작성',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '평가 당사자만 가능',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '모든 유저 가능',
        value: '0-1-1',
        key: '0-1-1',
      },
    ],
  },
  {
    title: '새로운 평가글 알림',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '사진 첨부',
    value: '0-3',
    key: '0-3',
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
        title="별점,평가"
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
