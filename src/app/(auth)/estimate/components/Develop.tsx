'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '웹',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '반응형웹',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '모바일웹',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '하이브리드앱',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '네이티브(크로스플랫폼)',
    value: '0-4',
    key: '0-4',
  },
  {
    title: 'and,ios(네이티브)',
    value: '0-5',
    key: '0-5',
  },
  {
    title: '데스크탑 애플리케이션',
    value: '0-6',
    key: '0-6',
  },
  {
    title: '개발사 제안 요청',
    value: '0-7',
    key: '0-7',
  },
]

const Develop: React.FC = () => {
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
        title="개발방식"
        extra={
          <Button onClick={() => setValue(['0-7'])} color="slate">
            <span>기본값 적용</span>
          </Button>
        }
      >
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Develop
