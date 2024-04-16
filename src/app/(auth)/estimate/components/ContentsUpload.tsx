'use client'

import React, { useState } from 'react'
import { TreeSelect, Card } from 'antd'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: '작성, 삭제, 수정, 목록 나열',
    value: '0-0',
    key: '0-0',
  },
  {
    title: '작성 권한 부여',
    value: '0-1',
    key: '0-1',
  },
  {
    title: '콘텐츠 세부내용',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: '텍스트 입력',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: '주소 입력',
        value: '0-2-1',
        key: '0-2-1',
      },
      {
        title: '내위치 가져오기',
        value: '0-2-2',
        key: '0-2-2',
      },
      {
        title: '파일 업로드',
        value: '0-2-3',
        key: '0-2-3',
      },
      {
        title: '사진 업로드',
        value: '0-2-4',
        key: '0-2-4',
        children: [
          {
            title: '1장 업로드',
            value: '0-2-4-0',
            key: '0-2-4-0',
          },
          {
            title: '여러장 업로드',
            value: '0-2-4-1',
            key: '0-2-4-1',
          },
        ],
      },
      {
        title: '영상 업로드',
        value: '0-2-5',
        key: '0-2-5',
        children: [
          {
            title: '쇼츠',
            value: '0-2-5-0',
            key: '0-2-5-0',
          },
          {
            title: '10분 내외',
            value: '0-2-5-1',
            key: '0-2-5-1',
          },
          {
            title: '30분 내외',
            value: '0-2-5-2',
            key: '0-2-5-2',
          },
          {
            title: '1시간 이상',
            value: '0-2-5-3',
            key: '0-2-5-3',
          },
        ],
      },
      {
        title: '영상 재생',
        value: '0-2-6',
        key: '0-2-6',
        children: [
          {
            title: '목록 셔플',
            value: '0-2-6-0',
            key: '0-2-6-0',
          },
          {
            title: '다음 영상 자동 재생',
            value: '0-2-6-1',
            key: '0-2-6-1',
          },
        ],
      },
      {
        title: '음성 파일 업로드',
        value: '0-2-7',
        key: '0-2-7',
      },
      {
        title: '임시저장',
        value: '0-2-8',
        key: '0-2-8',
        children: [
          {
            title: '일정시간 자동 저장',
            value: '0-2-8-0',
            key: '0-2-8-0',
          },
          {
            title: '임시저장 버튼 클릭',
            value: '0-2-8-1',
            key: '0-2-8-1',
          },
        ],
      },
      {
        title: '작성 에디터',
        value: '0-2-9',
        key: '0-2-9',
      },
      {
        title: 'SNS 임베드',
        value: '0-2-10',
        key: '0-2-10',
        children: [
          {
            title: '유튜브',
            value: '0-2-10-0',
            key: '0-2-10-0',
          },
          {
            title: '인스타',
            value: '0-2-10-1',
            key: '0-2-10-1',
          },
          {
            title: '트위터',
            value: '0-2-10-2',
            key: '0-2-10-2',
          },
          {
            title: 'vimeo',
            value: '0-2-10-3',
            key: '0-2-10-3',
          },
        ],
      },
      {
        title: '콘텐츠 미리보기',
        value: '0-2-11',
        key: '0-2-11',
      },
      {
        title: '해시태그',
        value: '0-2-12',
        key: '0-2-12',
      },
      {
        title: '콘텐츠 리스트 필터',
        value: '0-2-13',
        key: '0-2-13',
        children: [
          {
            title: '단순 입력 및 선택',
            value: '0-2-13-0',
            key: '0-2-13-0',
          },
          {
            title: '복잡한 입력 및 선택',
            value: '0-2-13-1',
            key: '0-2-13-1',
          },
          {
            title: '매우 복잡한 선택',
            value: '0-2-13-2',
            key: '0-2-13-2',
          },
        ],
      },
      {
        title: '콘텐츠 리스트 정렬',
        value: '0-2-14',
        key: '0-2-14',
        children: [
          {
            title: '날짜 순',
            value: '0-2-14-0',
            key: '0-2-14-0',
          },
          {
            title: '오름차순, 내림차순',
            value: '0-2-14-1',
            key: '0-2-14-1',
          },
          {
            title: '조회수 기준',
            value: '0-2-14-2',
            key: '0-2-14-2',
          },
        ],
      },
      {
        title: '작성 리스트',
        value: '0-2-15',
        key: '0-2-15',
        children: [
          {
            title: '더보기 버튼',
            value: '0-2-15-0',
            key: '0-2-15-0',
          },
          {
            title: '인피니트 스크롤',
            value: '0-2-15-1',
            key: '0-2-15-1',
          },
          {
            title: '페이지네이션',
            value: '0-2-15-2',
            key: '0-2-15-2',
          },
        ],
      },
      {
        title: '좋아요',
        value: '0-2-16',
        key: '0-2-16',
        children: [
          {
            title: '좋아요 목록 보기',
            value: '0-2-16-0',
            key: '0-2-16-0',
          },
          {
            title: '좋아요 알림 보내기',
            value: '0-2-16-1',
            key: '0-2-16-1',
          },
        ],
      },
      {
        title: '댓글',
        value: '0-2-17',
        key: '0-2-17',
        children: [
          {
            title: '대댓글',
            value: '0-2-17-0',
            key: '0-2-17-0',
          },
          {
            title: '파일 첨부 댓글',
            value: '0-2-17-1',
            key: '0-2-17-1',
          },
          {
            title: '댓글 좋아요',
            value: '0-2-17-2',
            key: '0-2-17-2',
          },
          {
            title: '회원 태그하기',
            value: '0-2-17-3',
            key: '0-2-17-3',
          },
          {
            title: '댓글 신고하기',
            value: '0-2-17-4',
            key: '0-2-17-4',
          },
          {
            title: '댓글 수정하기',
            value: '0-2-17-5',
            key: '0-2-17-5',
          },
          {
            title: '내가 남긴 댓글 목록 보기',
            value: '0-2-17-6',
            key: '0-2-17-6',
          },
          {
            title: '댓글 알림 보내기',
            value: '0-2-17-7',
            key: '0-2-17-7',
          },
        ],
      },
      {
        title: '조회수',
        value: '0-2-18',
        key: '0-2-18',
      },
      {
        title: '콘텐츠 등록일 표시',
        value: '0-2-19',
        key: '0-2-19',
        children: [
          {
            title: '등록 날짜 표시',
            value: '0-2-19-0',
            key: '0-2-19-0',
          },
          {
            title: '지난 시간 표시(1일 전)',
            value: '0-2-19-1',
            key: '0-2-19-1',
          },
        ],
      },
      {
        title: '콘텐츠 공유하기',
        value: '0-2-20',
        key: '0-2-20',
        children: [
          {
            title: 'sns',
            value: '0-2-20-0',
            key: '0-2-20-0',
          },
          {
            title: '이메일 ',
            value: '0-2-20-1',
            key: '0-2-20-1',
          },
          {
            title: 'SMS 메시지',
            value: '0-2-20-2',
            key: '0-2-20-2',
          },
          {
            title: '클립보드 복사',
            value: '0-2-20-3',
            key: '0-2-20-3',
          },
        ],
      },
      {
        title: '콘텐츠 공개 권한',
        value: '0-2-21',
        key: '0-2-21',
        children: [
          {
            title: '모두 공개',
            value: '0-2-21-0',
            key: '0-2-21-0',
          },
          {
            title: '친구 공개',
            value: '0-2-21-1',
            key: '0-2-21-1',
          },
          {
            title: '멤버쉽 공개',
            value: '0-2-21-2',
            key: '0-2-21-2',
          },
          {
            title: '비밀번호 설정',
            value: '0-2-21-3',
            key: '0-2-21-3',
          },
        ],
      },
      {
        title: '콘텐츠 신고',
        value: '0-2-22',
        key: '0-2-22',
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
      <Card title="콘텐츠 작성">
        <TreeSelect {...tProps} />
      </Card>
    </>
  )
}

export default Industry
