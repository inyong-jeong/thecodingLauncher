'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'
import { Button } from '@/components/Button'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '일반 회원가입',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '인증 없음',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '휴대전화 번호 인증',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '실명 본인 인증(패스)',
        value: '0-0-2',
        key: '0-0-2',
      },
      {
        title: '회사 또는 학교 인증',
        value: '0-0-3',
        key: '0-0-3',
      },
      {
        title: '이메일 인증',
        value: '0-0-4',
        key: '0-0-4',
      },
    ],
  },
  {
    title: '소셜 회원가입',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '구글 인증',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '애플 인증',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: '카카오 인증',
        value: '0-1-2',
        key: '0-1-2',
      },
      {
        title: '네이버 인증',
        value: '0-1-3',
        key: '0-1-3',
      },
      {
        title: '메타 인증',
        value: '0-1-4',
        key: '0-1-4',
      },
      {
        title: '트위터 인증',
        value: '0-1-5',
        key: '0-1-5',
      },
    ],
  },
  {
    title: '일반 로그인',
    value: '0-2',
    key: '0-2',
  },
  {
    title: '중복 로그인 처리',
    value: '0-3',
    key: '0-3',
  },
  {
    title: '아이디 저장',
    value: '0-4',
    key: '0-4',
  },
  {
    title: '아이디 찾기',
    value: '0-5',
    key: '0-5',
  },
  {
    title: '비밀번호 변경',
    value: '0-6',
    key: '0-6',
  },
  {
    title: '개인정보처리방침,이용약관',
    value: '0-7',
    key: '0-7',
    children: [
      {
        title: '표준 약관 적용',
        value: '0-7-0',
        key: '0-7-0',
      },
      {
        title: '자체 기획된 약관 적용',
        value: '0-7-1',
        key: '0-7-1',
      },
    ],
  },
  {
    title: '회원탈퇴',
    value: '0-8',
    key: '0-8',
    children: [
      {
        title: '회원 정보 삭제',
        value: '0-8-0',
        key: '0-8-0',
      },
      {
        title: '회원 정보 보존',
        value: '0-8-1',
        key: '0-8-1',
      },
    ],
  },
  {
    title: '회원 휴먼 처리',
    value: '0-9',
    key: '0-9',
  },
  {
    title: '회원 신고',
    value: '0-10',
    key: '0-10',
  },
  {
    title: '회원 권한',
    value: '0-11',
    key: '0-11',
    children: [
      {
        title: '2개(학생, 선생님)',
        value: '0-11-0',
        key: '0-11-0',
      },
      {
        title: '3개(학생,선생님,관리자)',
        value: '0-11-1',
        key: '0-11-1',
      },
      {
        title: '4개 이상',
        value: '0-11-2',
        key: '0-11-2',
      },
    ],
  },
  {
    title: '회원 등급',
    value: '0-12',
    key: '0-12',
  },
  {
    title: '프로필 수정',
    value: '0-13',
    key: '0-13',
  },
  {
    title: '추천인',
    value: '0-14',
    key: '0-14',
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
        title="인증"
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
