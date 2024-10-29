import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        '배터리 산업에 종사하고 있어서 배터리 관련 어플리케이션을 만들고 싶었습니다. 더코딩런쳐의 도움을 받아 기간과 견적을 빠르고 쉽게 알 수 있었습니다. ',
      author: {
        name: '현철독일',
        role: '전기차 배터리 대리',
        image: avatarImage1,
      },
    },
    {
      content:
        '반도체 산업에 종사중에 특정 기술은 단순 반복작업이 많았습니다. 해당 작업을 자동화 하고 싶어 의뢰를 하였고 원하는 결과물을 얻을 수 있었습니다. 적극 추천드립니다.',
      author: {
        name: '베릴로그민기여',
        role: '반도체 산업 엔지니어',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        '부동산에 관심이 많아 아실이나 호갱노노와 같은 어플을 제작하고 싶었어요. 실질적으로 어떤 기능이 필요하며 얼마가 들며 어느정도 기간이 필요한지 알 수 있었습니다. 막연하게 생각했던 아이디어를 실체화 할 수 있었던 계기가 되었습니다.',
      author: {
        name: '영혼의숙제',
        role: '금융기관 대리',
        image: avatarImage5,
      },
    },
    {
      content:
        '의료 업계에 종사하고 있었습니다. 환자들을 상담해주고 케어해주는 어플을 만들고 싶었는데 어떤 구상을 해야하고 어떤 기능이 필요한지를 더코딩런처를 통해서 확실히 알 수 있었습니다.',
      author: {
        name: '기가막힌약국',
        role: '간호사',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        '샐러드바를 창업해서 운영중에 있습니다. 원가를 절감하기 위해서 제품을 관리해주는 시스템이 필요했는데 더코딩런처를 통해서 방향성을 잡을 수 있었습니다. 적극 추천합니다.',
      author: {
        name: '샐러드의 화신',
        role: 'COO',
        image: avatarImage3,
      },
    },
    {
      content:
        '외국인과 한국인을 매칭시켜주는 어플을 만들고 싶어 더코딩런처에게 의뢰했습니다. 1:1채팅, 이미지, 프로필, 매칭, 인증, 푸시알림 등등의 기능은 어느정도 소요되며 어느정도 견적이 드는지 빨리 알 수 있어 시간을 세이브 할 수 있었습니다.',
      author: {
        name: '한외커플',
        role: '국제결혼정보업체대표',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            의뢰인들의 추천사
          </h2>
          {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
             실제 IT 서비스를 만들기전 
          </p> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
