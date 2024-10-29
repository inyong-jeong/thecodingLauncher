import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '기획은 어떻게 진행 되나요?',
      answer: `화면 기획서는 고객사에서 준비해주셔야 합니다.
         기획서 작성 경험이 없으시다면 기획서 전문 업체를 통해 컨설팅을 받으시길 바랍니다.
         하지만 더코딩런처 에서 기획하시길 원하신다면 저희 총괄하에 기획을 할 수는 있습니다. 섹션별 기획의 최종 컨펌은 고객사쪽에서 해주시면 됩니다.

         결론적으로 메뉴구조도, 화면 흐름도, 스토리보드는 산출물로 나와야 개발에 들어갈 수 있습니다. 이 중에서도 스토리보드가 가장 중요합니다.
         스토리보드 없이도 기능명세서를 통해 대략적인 견적은 안내해드릴 수 있으나 실제 견적 산출 및 착수 확정을 위해서는 스토리보드 상의 모든 링크, 버튼, 입력창, 텍스트에 대한 동작 설명이 명시된 상세 기획서가 필요합니다.`,
    },
    {
      question: '디자인 작업은 어떻게 하나요?',
      answer: `디자인을 준비하셔도 되지만 디자인 작업은 저희쪽에 맡기시길 권장드립니다.
               디자이너의 미적인 욕심으로 영양가는 없는데 개발 공수를 많이 잡아먹는 경우가 은근히 많기 때문입니다.
               더 나아가서 디자인 잡을 때 공통 컴포넌트 규칙을 정하지 않으면 개발들어갈 때 페이지마다 따로국밥처럼
               디자인 규칙 없는 화면이 많을 확률이 높습니다.

               마지막으로 디자인 같은 경우 미세한 색상이나 폰트 사이즈, 마진, 디테일한 부분은 점진적으로 채워 나갑니다.
               전반적인 디자인 개선 -> 디테일한 조정의 단계로 디자인을 고도화 합니다. 개발하면서 디자인은 조금씩 바뀌니깐요.

               만약 고객사쪽에서 디자인을 하신다면 주기적으로 디자인 시안을 공유해주시길 바랍니다.
               저희가 디자을 하게 된다면 최종 컨펌은 고객사쪽에서 해주시면 됩니다.
      `,
    },
    {
      question: '계약은 어떻게 진행되나요?',
      answer: `고객사에서 개발 문의를 주시고 협의 후 착수결정이 나면 계약서를 작성합니다. 계약서는 대한민국 노무 계약 법률에 근거하여 작성하고 특약사항은 협의하에 작성합니다.
         일정까지 협의가 된다면 일정 금액의 개발비를 선입금 해주시면 서비스 개발이 시작됩니다.
        `,
    },
  ],
  [
    {
      question: '유지보수, 하자보수는 어떻게 진행되나요?',
      answer: `기본적으로 하자보수는 소프트웨어사업의 하자담보책임 제 60조에 따라 1년 이내에 발생한 하자에 대하여서는 무상으로 하자보수를 해드립니다. 그 범위도 역시 대한민국 법률을 따릅니다.
        유지보수(기능추가, 기능개선)는 개발 공수에 따른 인건비를 산출하여 계약을 하거나 양사 협의하에 월별로 계약을 진행합니다.
        `,
    },
    {
      question:
        '정부 창업지원금을 통해 집행하고 싶은경우는 어떻게 해야 할까요?',
      answer: `정부 지원금의 경우 프로그램마다 집행 절차와 시점이 다릅니다. 더코딩런처는 일정금액의 개발비가 입금되어야 개발을 진행합니다. 그래서 지원 프로그램의 집행이 늦은 경우
        고객사 자체 자금으로 집행 하신 후 정부 지원금을 통해서 입금이 되면 자체 자금은 돌려드립니다. 그리고 정부지원금을 받기 위해서 저희쪽에서 작성해야 하는 서류들은 요청하시면 작성해 드립니다.
        그리고 정부지원금과 자체자금을 혼합해서 의뢰하시는 경우가 있는데 저희는 정부지원사업 예산으로 구현할 수 있는 개발 결과물을 완료 한 후 지원사업 잔금이 처리 된 후 자체자금을 투입하길 권장드립니다.`,
    },
    {
      question: '개발 일정은 어떻게 될까요?',
      answer: `개발일정은 기획서를 기준으로 견적을 산출하고 해당 견적을 통해서 일정을 유추할 수 있습니다. 통상적으로 1천 2백만원의 개발공수 범위라면 1개월 정도가 소요된다고 생각하시면됩니다.
        해당 비용은 기획, 디자인이 완성됐다는 가정 하에 산출하는 일정과 비용입니다. 
        `,
    },
  ],
  [
    {
      question: '개발비 예산은 어떻게 결정해야 할까요?',
      answer: `저희가 추천드리는 점은 최대 예산을 한 번에 사용하시지 말고 70~80% 수준으로 견적계산 하는 것을 권장드립니다. 왜냐하면 서비스 출시 후에 운영을 하게 되면
        예상치 못했는데 필요한 기능들(서버비, 어드민 기능, 유지보수 비용)이 생기는 경우가 부지기수이기 때문입니다.`,
    },
    {
      question: '개발 견적을 어떻게 알 수 있을까요??',
      answer: `더코딩런처 간편견적 서비스를 통해서 기능명세서와 견적서를 받아보실 수 있습니다. 해당 견적은 말그대로 대략적인 간편견적 입니다.

      실제 구현할 때에는 세밀한 기획서, 디자인 시안, 개발 난이도에 따라 비용이 달라질 수 있습니다. 직접 간편견적을 산출해보기 힘드시면 
      더코딩런처로 문의해주시면 담당자가 견적 계산을 도와드립니다. 그리고 견적이 산출되는 원리는 간단합니다. 저희는 SI 사업을 하기 때문에 개발자가 투입되는
      시간당 인건비를 산출합니다. 추가적으로 까다로운 기술구현은 비용이 추가됩니다.
       `,
    },
    {
      question: '리뉴얼이나 기존의 서비스에서 기능추가도 개발이 가능한가요?',
      answer: `따로 가리는 프로젝트 없이 대부분의 프로젝트를 수주하고 있습니다. 다만, 개발들어가기 전에 기존의 소스코드 자료들을 검토해본 후
        이슈사항이나 까다롭게 개발되어 있는경우를 검토합니다. 혹은 레거시 코드가 많거나 개발을 하면 할수록 서비스로 산으로가는 경우가 더러 있습니다. 의뢰자와 개발사가 몰랐던 사실인데
        개발사가 개발하다보니 시간이 굉장히 많은 소요되는 공수가 생길수도 있습니다.
        해당사항을 서로 협의 후 계약서에 특약사항으로 명시하고 일정과 견적을 산출해서 작업에 들어갑니다.`,
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            자주 물어보는 질문들
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            궁금하신 사항이 리스트에 없으시다면, thecodingclub8@gmail.com 으로
            이메일 바랍니다.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
