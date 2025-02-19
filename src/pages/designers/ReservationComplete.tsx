import React, { useEffect } from 'react'
import PaymentInfo from '../../components/reservationcompletes/PaymentInfo' // 결제 정보 컴포넌트
import ReservationInfo from '../../components/reservationcompletes/ReservationInfo' // 예약 정보 컴포넌트
import ReservationCompleteIcon from '../../assets/icons/Reservation complete.svg' // 상대 경로
import { useLocation, useNavigate } from 'react-router-dom'
import heartAnimation from '../../assets/lotties/heart.json' // Lottie 파일 import
import Lottie from 'lottie-react'

const ReservationComplete: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    // 전달된 결제 방식 정보
    const paymentMethod = location.state?.paymentMethod || '알 수 없음'

    // 콘솔 출력 (결제 방식만 확인)
    useEffect(() => {
        console.log('📢 결제 방식:', paymentMethod)
    }, [paymentMethod])

    return (
        <div className='flex min-h-[100vh] flex-col items-center justify-center bg-white px-[24px] py-[40px] pb-[96px]'>
            {/* SVG 아이콘 적용 */}
            <div className='relative mb-[24px] flex h-[64px] w-[64px] flex-col items-center justify-end'>
                {/* Lottie 애니메이션 (아래쪽으로 정렬) */}
                <div className='h-[88px] w-[88px] pb-[180px] opacity-70'>
                    <Lottie animationData={heartAnimation} loop={false} />
                </div>

                {/* 기존 아이콘 (하단 배치) */}
                <img
                    src={ReservationCompleteIcon}
                    alt='예약 완료 아이콘'
                    className='h-[64px] w-[64px]'
                />
            </div>

            {/* 예약 완료 텍스트 */}
            <h2 className='text-[24px] font-bold text-gray-900'>
                예약이 완료됐어요
            </h2>

            {/* 예약 정보 컴포넌트 삽입 */}
            <div className='mb-[4px]'>
                <ReservationInfo />
            </div>

            {/* 결제 정보 컴포넌트 삽입 - 결제 방식이 "bankTransfer"일 때만 표시 */}
            {paymentMethod === 'bankTransfer' && <PaymentInfo />}

            {/* 하단 고정 버튼 그룹 */}
            <div className='min-x-[375px] fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[480px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)]'>
                {/* 계좌 복사 버튼 */}
                {paymentMethod === 'bankTransfer' && (
                    <div className='flex flex-col items-center px-[24px]'>
                        <button
                            className='mb-[48px] w-full max-w-[400px] rounded-[50px] bg-purple-100 px-[16px] py-[12px] text-[18px] text-gray-900 shadow-md'
                            onClick={() =>
                                navigator.clipboard.writeText('000-0000-000')
                            }>
                            계좌번호가 복사됐어요.
                        </button>
                    </div>
                )}

                {/* 구분선: 양 끝까지 닿도록 수정 */}
                <hr className='w-full border-t-[1px] border-gray-300' />

                {/* 하단 버튼들 */}
                <div className='flex flex-col items-center px-[16px] py-[20px]'>
                    <div className='flex w-full max-w-[400px] gap-[16px]'>
                        <button
                            className='w-[50%] rounded-[12px] bg-black px-[24px] py-[12px] text-[18px] font-medium text-white shadow-md'
                            onClick={() => navigate('/reservationinquiry')}>
                            예약 확인
                        </button>
                        <button
                            className='w-[50%] rounded-[12px] bg-black px-[24px] py-[12px] text-[18px] font-medium text-white shadow-md'
                            onClick={() => navigate('/')}>
                            홈
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationComplete
