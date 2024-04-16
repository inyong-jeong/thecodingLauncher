import React from 'react'
import Industry from './components/Industry'
import Benchmarking from './components/Benchmarking'
import Planning from './components/Planning'
import Design from './components/Design'
import Develop from './components/Develop'
import UserInterface from './components/UserInterface'
import Home from './components/Home'
import Auth from './components/Auth'
import Chat from './components/Chat'
import ContentsUpload from './components/ContentsUpload'
import Exam from './components/Exam'
import Follow from './components/Follow'
import Gps from './components/Gps'
import Grade from './components/Grade'
import Lang from './components/Lang'
import Matching from './components/Matching'
import Meeting from './components/Meeting'
import Navigation from './components/Navigation'
import Onboarding from './components/Onboarding'
import Order from './components/Order'
import Payment from './components/Payment'
import PushNoti from './components/PushNoti'
import Reserve from './components/Reserve'
import Scrap from './components/Tech'
import Search from './components/Search'
import SellProduct from './components/SellProduct'
import Shopping from './components/Extra'
import Streaming from './components/Streaming'
import Voice from './components/Voice'
import Vote from './components/Vote'
import Picture from './components/Picture'
import Admin from './components/Admin'
import Extra from './components/Extra'
import Tech from './components/Tech'
import { Card } from 'antd'

const Estimate = () => {
  return (
    <>
      <div className="mb-4">
        <Card title="더코딩런처 간편견적 산출 서비스입니다.">
          <ul>
            <li>
              머리속에 둥둥 구름처럼 떠다니는 아이디어를 실현할 서비스를 만들어
              보세요
            </li>
            <li>기능명세서를 만들 수 있어요.</li>
            <li>간편견적을 산출할 수 있어요.</li>
            <li>excel 및 pdf 로 무료로 출력할 수 있어요</li>
          </ul>
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <div className="fixed w-[15%]">
            <Card title="예상견적 및 일정">
              <p>금액 : 약 1천만원</p>
              <p>기간 : 약 3개월</p>
            </Card>
          </div>
        </div>
        <div className="col-span-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <Industry />
            </div>
            <div className="col-span-4">
              <Planning />
            </div>
            <div className="col-span-4">
              <Design />
            </div>
            <div className="col-span-4">
              <Develop />
            </div>
            <div className="col-span-4">
              <UserInterface />
            </div>
            <div className="col-span-4">
              <Tech />
            </div>
          </div>
          <hr className="my-4 border-y-2" />
          <p>기능</p>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <Onboarding />
            </div>
            <div className="col-span-4">
              <Auth />
            </div>
            <div className="col-span-4">
              <ContentsUpload />
            </div>
            <div className="col-span-4">
              <SellProduct />
            </div>

            <div className="col-span-4">
              <PushNoti />
            </div>
            <div className="col-span-4">
              <Search />
            </div>
            <div className="col-span-4">
              <Reserve />
            </div>
            <div className="col-span-4">
              <Payment />
            </div>
            <div className="col-span-4">
              <Navigation />
            </div>
            {/* <div className="col-span-4">
              <Gps />
            </div> */}
            <div className="col-span-4">
              <Matching />
            </div>
            <div className="col-span-4">
              <Chat />
            </div>
            <div className="col-span-4">
              <Follow />
            </div>
            <div className="col-span-4">
              <Meeting />
            </div>
            <div className="col-span-4">
              <Grade />
            </div>
            <div className="col-span-4">
              <Vote />
            </div>
            <div className="col-span-4">
              <Exam />
            </div>
            <div className="col-span-4">
              <Voice />
            </div>
            <div className="col-span-4">
              <Order />
            </div>
            {/* <div className="col-span-4">
              <Shopping />
            </div> */}
            <div className="col-span-4">
              <Lang />
            </div>
            <div className="col-span-4">
              <Admin />
            </div>
            <div className="col-span-4">
              <Extra />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Estimate
