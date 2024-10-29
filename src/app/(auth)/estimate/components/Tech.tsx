'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '프론트',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Next',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Vue',
        value: '0-0-1',
        key: '0-0-1',
      },
    ],
  },
  {
    title: '백엔드',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'spring boot',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'express',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'next',
        value: '0-1-2',
        key: '0-1-2',
      },
      {
        title: 'SQL',
        value: '0-1-3',
        key: '0-1-3',
      },
      {
        title: 'NoSql',
        value: '0-1-4',
        key: '0-1-4',
      },
    ],
  },
  {
    title: '네이티브',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: 'React-native',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: 'Flutter',
        value: '0-2-1',
        key: '0-2-1',
      },
      {
        title: 'kotlin/swift',
        value: '0-2-2',
        key: '0-2-2',
      },
    ],
  },
  {
    title: '인프라',
    value: '0-3',
    key: '0-3',
    children: [
      {
        title: 'jenkins',
        value: '0-3-0',
        key: '0-3-0',
      },
      {
        title: 'github',
        value: '0-3-1',
        key: '0-3-1',
      },
      {
        title: 'AWS',
        value: '0-3-2',
        key: '0-3-2',
      },
      {
        title: 'cafe24',
        value: '0-3-3',
        key: '0-3-3',
      },
      {
        title: 'vercel',
        value: '0-3-4',
        key: '0-3-4',
      },
      {
        title: 'Docker',
        value: '0-3-5',
        key: '0-3-5',
      },
      {
        title: 'Kubernetis',
        value: '0-3-6',
        key: '0-3-6',
      },
      {
        title: 'FTP',
        value: '0-3-7',
        key: '0-3-7',
      },
    ],
  },
  {
    title: '개발사 제안',
    value: '0-4',
    key: '0-4',
  },
]

const Tech: React.FC = () => {
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
        title="개발 기술"
        extra={
          <Button onClick={() => setValue(['0-4'])} color="slate">
            <span>기본값 적용</span>
          </Button>
        }
      >
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Tech
