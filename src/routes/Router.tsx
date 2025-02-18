import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Loading } from '../pages/Loading'

// 동적 임포트 (코드 스플리팅 적용)
const Home = lazy(() => import('../pages/Home'))
const Onboarding = lazy(() => import('../pages/Onboarding'))
const Login = lazy(() => import('../pages/Login'))
const ReservationInquiry = lazy(() => import('../pages/ReservationInquiry'))

const DesignerDetail = lazy(() => import('../pages/designers/DesignerDetail'))
const PaymentTransfer = lazy(() => import('../pages/designers/PaymentTransfer'))
const ReservationComplete = lazy(
    () => import('../pages/designers/ReservationComplete')
)

const NotFound = lazy(() => import('../pages/NotFound')) // 404 페이지
const ServerError = lazy(() => import('../pages/SeverError')) // 500 페이지
const NetworkError = lazy(() => import('../pages/NetworkError')) // 인터넷 연결 오류 페이지
const Splash = lazy(() => import('../pages/Splash')) // 스플래시 페이지
const Router = () => {
    const navigate = useNavigate()

    useEffect(() => {
        // 🔹 인터넷 연결 상태 감지
        const handleOffline = () => {
            console.log('⚠ 인터넷 연결이 끊겼습니다.')
            navigate('/notfound') // 인터넷이 끊기면 404 페이지로 이동
        }

        // 이벤트 리스너 등록
        window.addEventListener('offline', handleOffline)

        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener('offline', handleOffline)
        }
    }, [navigate])

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/onboarding' element={<Onboarding />} />
                <Route path='/login' element={<Login />} />
                <Route
                    path='/reservationinquiry'
                    element={<ReservationInquiry />}
                />
                <Route path='/designerdetail' element={<DesignerDetail />} />
                <Route path='/paymenttransfer' element={<PaymentTransfer />} />
                <Route
                    path='/reservationcomplete'
                    element={<ReservationComplete />}
                />
                <Route path='/servererror' element={<ServerError />} />
                <Route path='/networkerror' element={<NetworkError />} />
                 <Route path='/splash' element={<Splash />} />
                {/* 🔹 404 Not Found 라우트 */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default Router
