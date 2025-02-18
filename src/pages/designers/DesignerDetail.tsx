import React, { useEffect, useState } from 'react'
import { useReservationStore } from '../../store/useReservationStore'
import { SlArrowLeft } from 'react-icons/sl'
import { IconContext } from 'react-icons'
import DesignerInfo from '../../components/designerDetail/DesignerInfo'
import Divider from '../../components/designerDetail/Divider'
import Reservation from '../../components/designerDetail/Reservation'
import ButtonLg from '../../components/designerDetail/ButtonLg'
import BeforeAfterSection from '../../components/home/BeforeAfterSection'

const DesignerDetail: React.FC = () => {
    const { reservationTime } = useReservationStore()
    const [isButtonVisible, setIsButtonVisible] = useState(false)
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

    useEffect(() => {
        if (reservationTime !== null) {
            setIsButtonVisible(true)
        } else {
            setIsButtonVisible(false)
        }
    }, [reservationTime])

    return (
        <div className='overflow-hidden'>
            <IconContext.Provider
                value={{
                    className:
                        'fixed top-0 left-0 max-w-[480px] min-w-[375px] z-20 bg-transparent w-full align-start h-[3.5625rem] pt-[1.25rem] pb-[1.25rem] pr-[87%] flex justify-start',
                }}>
                <div>
                    <SlArrowLeft color={isScrolled ? 'black' : 'white'} />
                </div>
            </IconContext.Provider>
            <img
                src={`${import.meta.env.VITE_CLIENT_URL}/img/Banner.png`}
                alt='designer'
                className='relative object-cover w-full h-2/5'
            />

            <div className='relative z-10 flex-auto w-full pb-10 -mt-20 bg-white shadow-md rounded-t-2xl'>
                <DesignerInfo />
                <Divider />
                <Reservation />
                <Divider />
                {/*  비포 애프터 */}
                <div className='px-20 pb-52 pt-38'>
                    <BeforeAfterSection />
                </div>
                {isButtonVisible && <ButtonLg text='예약' />}
            </div>
        </div>
    )
}

export default DesignerDetail
