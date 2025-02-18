import React, { useEffect, useState } from 'react'
import DesignerInfo from '../../components/designerDetail/DesignerInfo'
import Reservation from '../../components/designerDetail/Reservation'
import Divider from '../../components/designerDetail/Divider'
import ButtonLg from '../../components/designerDetail/ButtonLg'
import { SlArrowLeft } from 'react-icons/sl'
import { IconContext } from 'react-icons'

const DesignerDetail: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        const bannerHeight = window.innerHeight * 0.25
        if (window.scrollY > bannerHeight) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='relative mt-0 flex h-screen w-full flex-col items-center justify-start overflow-visible'>
            <IconContext.Provider
                value={{
                    className: isScrolled
                        ? 'fixed top-0 left-0 max-w-[480px] min-w-[375px] z-20 bg-white w-full align-start h-[3.5625rem] flex justify-start pt-[1.25rem] pb-[1.25rem] pr-[87%]'
                        : 'fixed top-0 left-0 max-w-[480px] min-w-[375px] z-20 bg-transparent w-full align-start h-[3.5625rem] pt-[1.25rem] pb-[1.25rem] pr-[87%] flex justify-start',
                }}>
                <div>
                    <SlArrowLeft color={isScrolled ? 'black' : 'white'} />
                </div>
            </IconContext.Provider>
            <img
                src={`${import.meta.env.VITE_CLIENT_URL}/img/Banner.png`}
                alt='designer'
                className='relative h-2/5 w-full object-cover'
            />

            <div className='relative z-10 -mt-20 w-full flex-auto rounded-t-2xl bg-white pb-10 shadow-md'>
                <DesignerInfo />
                <Divider />
                <Reservation />
                <Divider />
                {/*  비포 애프터 */}
                <ButtonLg text='예약' />
            </div>
        </div>
    )
}

export default DesignerDetail
