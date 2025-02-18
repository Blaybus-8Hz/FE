// 홈 화면

import React from 'react'
import Logo from '../components/home/Logo'
import MainSection from '../components/home/MainSection'
import RescheduleBanner from '../components/home/RescheduleBanner'
import HotNewSection from '../components/home/HotNewSection'
import BeforeAfterSection from '../components/home/BeforeAfterSection'
import TabBar from '../components/TabBar/TabBar'
import BannerSwiper from '../components/home/BannerSwiper'

const Home: React.FC = () => {
    return (
        <div className='relative z-0 w-full px-20 overflow-hidden bg-gray-100 pb-155'>
            <div className='absolute left-0 right-0 top-0 -z-20 -m-16 h-[852px] bg-gradient-to-b from-purple-50 to-gray-100'></div>
            <Logo />
            <MainSection />
            <BannerSwiper />
            <RescheduleBanner />
            <HotNewSection />
            <BeforeAfterSection />
            <TabBar />
        </div>
    )
}

export default Home
