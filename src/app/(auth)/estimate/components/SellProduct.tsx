'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '판매상품 등록, 수정, 삭제',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '상품 등록 권한 부여',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '상세페이지 작성',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '사진, 글 따로 입력',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: '기본 에디터 사용',
        value: '0-2-1',
        key: '0-2-1',
      },
      {
        title: '커스텀 에디터 사용',
        value: '0-2-2',
        key: '0-2-2',
      },
    ],
  },
  {
    title: '구매 옵션 선택',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '상품 상태 표시',
    value: '0-4',
    key: '0-4',
    children: [
      {
        title: '할인, 이벤트 표시',
        value: '0-4-0',
        key: '0-4-0',
      },
      {
        title: '품절, 지연, 추천',
        value: '0-4-1',
        key: '0-4-1',
      },
    ],
  },
  {
    title: '임시저장',
    value: '0-5',
    key: '0-5',
    children: [
      {
        title: '일정시간 자동 저장',
        value: '0-5-0',
        key: '0-5-0',
      },
      {
        title: '임시저장 버튼 클릭',
        value: '0-5-1',
        key: '0-5-1',
      },
    ],
  },
  {
    title: '상품리스트 필터',
    value: '0-6',
    key: '0-6',
    children: [
      {
        title: '단순 필터',
        value: '0-6-0',
        key: '0-6-0',
      },
      {
        title: '복잡한 필터',
        value: '0-6-1',
        key: '0-6-1',
      },
      {
        title: '매우 복잡한 필터',
        value: '0-6-2',
        key: '0-6-2',
      },
    ],
  },
  {
    title: '상품리스트 정렬',
    value: '0-7',
    key: '0-7',
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
      <Card title="판매상품 관련">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
