'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '그룹 만들기(위치, 제목, 내용)',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '그룹 세부내용 수정',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '모임 배경 사진 설정',
        value: '0-1',
        key: '0-1',
      },
      {
        title: '모임 사진첩 갤러리',
        value: '0-1',
        key: '0-1',
      },
      {
        title: '상세 관심사 기입',
        value: '0-1',
        key: '0-1',
      },
      {
        title: '정원 제한',
        value: '0-1',
        key: '0-1',
      },
    ],
  },
  {
    title: '그룹원 초대하기',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '회원 등급 지정',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '등급별 권한 설정',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '콘텐츠 공개 설정',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '콘텐츠 푸시 알림',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '카톡 모임 공유',
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
      <Card
        title="그룹&모임"
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
