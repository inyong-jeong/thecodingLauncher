'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '매칭 신청 시 작성하는 내용',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '텍스트(내용)',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '가격',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '이력서',
        value: '0-0-2',
        key: '0-0-2',
      },
      {
        title: '항목 선택하기',
        value: '0-0-3',
        key: '0-0-3',
      },
      {
        title: '주소',
        value: '0-0-4',
        key: '0-0-4',
      },
      {
        title: '파일 업로드',
        value: '0-0-5',
        key: '0-0-5',
      },
      {
        title: '일정',
        value: '0-0-6',
        key: '0-0-6',
      },
    ],
  },
  {
    title: '매칭 수락',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '바로 매칭',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '수락시 매칭 성사',
        value: '0-1-1',
        key: '0-1-1',
      },
    ],
  },
  {
    title: '매칭 관련 알림',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '카톡 푸시 알림',
        value: '0-2-0',
        key: '0-2-0',
        children: [
          {
            title: '지원서 열람 알림',
            value: '0-2-0-0',
            key: '0-2-0-0',
          },
          {
            title: '매칭 수락 알림',
            value: '0-2-0-1',
            key: '0-2-0-1',
          },
          {
            title: '배달 과정 알림(준비중, 배달중, 배달완료)',
            value: '0-2-0-2',
            key: '0-2-0-2',
          },
          {
            title: '매칭 취소 알림',
            value: '0-2-0-3',
            key: '0-2-0-3',
          },
        ],
      },
      {
        title: '시스템 푸시 알림',
        value: '0-3-0',
        key: '0-3-0',
        children: [
          {
            title: '지원서 열람 알림',
            value: '0-3-0-0',
            key: '0-3-0-0',
          },
          {
            title: '매칭 수락 알림',
            value: '0-3-0-1',
            key: '0-3-0-1',
          },
          {
            title: '배달 과정 알림(준비중, 배달중, 배달완료)',
            value: '0-3-0-2',
            key: '0-3-0-2',
          },
          {
            title: '매칭 취소 알림',
            value: '0-3-0-3',
            key: '0-3-0-3',
          },
        ],
      },
    ],
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
      <Card title="매칭(소개팅, 구인구직, 배달 ...)">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
