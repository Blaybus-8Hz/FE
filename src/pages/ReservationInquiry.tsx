import React, { useState, useEffect, useRef } from 'react'
import ReservationList from '../components/reservationinquirys/ReservationList'
import ConsultationAlert from '../components/reservationinquirys/ConsultationAlert'
import TabBar from '../components/TabBar/TabBar'
import Logo from '../components/home/Logo'
interface Reservation {
    id: number
    name: string
    date: string
    time: string
    location: string
    status: '결제 완료' | '입금 확인중' | '상담 완료' | '상담 취소'
    online: boolean
    type: '직접' | '온라인'
}

const ReservationInquiry: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>([])
    const [pastReservations, setPastReservations] = useState<Reservation[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const loaderRef = useRef<HTMLDivElement | null>(null)

    // 초기 데이터 로드
    useEffect(() => {
        const mockData: Reservation[] = [
            {
                id: 1,
                name: '박수연 실장',
                date: '2025-02-15',
                time: '14:00',
                location: '준오헤어 반포점',
                status: '결제 완료',
                online: false,
                type: '직접',
            },
            {
                id: 2,
                name: '박수연 실장',
                date: '2025-02-15',
                time: '14:00',
                location: '준오헤어 반포점',
                status: '입금 확인중',
                online: true,
                type: '온라인',
            },
        ]
        const pastMockData: Reservation[] = [
            {
                id: 3,
                name: '박수연 실장',
                date: '2025-02-10',
                time: '14:00',
                location: '준오헤어 반포점',
                status: '상담 완료',
                online: true,
                type: '온라인',
            },
            {
                id: 4,
                name: '박수연 실장',
                date: '2025-02-08',
                time: '14:00',
                location: '준오헤어 반포점',
                status: '상담 취소',
                online: false,
                type: '직접',
            },
        ]
        setReservations(mockData)
        setPastReservations(pastMockData)
    }, [])

    // 지난 컨설팅 추가 로드 함수
    const loadMorePastReservations = () => {
        setIsLoading(true)
        setTimeout(() => {
            const newPastReservations: Reservation[] = [
                {
                    id: pastReservations.length + 1,
                    name: '박수연 실장',
                    date: '2025-02-05',
                    time: '14:00',
                    location: '준오헤어 반포점',
                    status: '상담 완료',
                    online: true,
                    type: '온라인',
                },
                {
                    id: pastReservations.length + 2,
                    name: '박수연 실장',
                    date: '2025-02-02',
                    time: '14:00',
                    location: '준오헤어 반포점',
                    status: '상담 취소',
                    online: false,
                    type: '직접',
                },
            ]
            setPastReservations((prev) => [...prev, ...newPastReservations])
            setIsLoading(false)
        }, 1500) // 1.5초 후 데이터 추가 (실제 API 요청 시 fetch 사용)
    }

    // 무한 스크롤 감지
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading) {
                    loadMorePastReservations()
                }
            },
            { threshold: 1.0 }
        )

        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current)
            }
        }
    }, [isLoading])

    return (
        <div className='flex min-h-[100vh] w-full flex-col items-center bg-white'>
            {/* 헤더 (고정된 위치) */}
            <Logo />
            <TabBar />
            {/* 콘텐츠를 헤더 높이만큼 아래로 이동 */}
            <div className='mt-[64px] w-full max-w-[768px] p-[20px]'>
                {/* 헤더 아래 알림 컴포넌트 */}
                <div className='mb-[48px]'>
                    <ConsultationAlert
                        designerName='박수연 실장'
                        consultationType='헤어 스타일링'
                        profileImage='https://via.placeholder.com/48' // 임시 프로필 이미지
                    />
                </div>

                {/* 다가오는 예약 (무한 스크롤 적용 X) */}
                <div className='mb-[48px]'>
                    <ReservationList
                        reservations={reservations}
                        title='다가오는 예약'
                    />
                </div>

                {/* 지난 컨설팅 (무한 스크롤 적용) */}
                <ReservationList
                    reservations={pastReservations}
                    title='지난 컨설팅'
                />

                {/* 로딩 인디케이터 */}
                <div
                    ref={loaderRef}
                    className='flex items-center justify-center py-[16px]'>
                    {isLoading && (
                        <div className='h-[28px] w-[28px] animate-[spin_1s_linear_reverse_infinite] rounded-full border-[4px] border-gray-300 border-t-purple-300'></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReservationInquiry
