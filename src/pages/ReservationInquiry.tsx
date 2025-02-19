import React, { useEffect, useRef } from "react";
import ReservationList from "../components/reservationinquirys/ReservationList";
import ConsultationAlert from "../components/reservationinquirys/ConsultationAlert";
import TabBar from "../components/TabBar/TabBar";
import Logo from "../components/home/Logo";
import { useGetCurrentBooking } from "../apis/api/get/useGetCurrentBooking";
import { useGetPastBooking } from "../apis/api/get/useGetPastBooking";
import { AxiosError } from "axios";
import profileImage from "../../public/img/designer_image_6.jpg";
interface Reservation {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    status: "결제 완료" | "입금 확인중" | "상담 완료" | "상담 취소";
    online: boolean;
    type: "직접" | "온라인";
}

const ReservationInquiry: React.FC = () => {
    const loaderRef = useRef<HTMLDivElement | null>(null);

    // ✅ 현재 예약 API 호출
    const { data: apiReservations, error: currentError } = useGetCurrentBooking();
    
    // ✅ 과거 예약 API 호출
    const { data: apiPastReservations, error: pastError } = useGetPastBooking();

    // ✅ API 응답 전체 및 에러 바디 콘솔 출력
    useEffect(() => {
        console.log("📥 현재 예약 API 응답:", apiReservations);
        console.log("📥 과거 예약 API 응답:", apiPastReservations);

        if (currentError) {
            const axiosError = currentError as AxiosError;
            console.error("❌ 현재 예약 API 요청 실패:", axiosError);
            if (axiosError.response) {
                console.error("🛑 현재 예약 API 에러 응답 바디:", axiosError.response.data);
            }
        }

        if (pastError) {
            const axiosError = pastError as AxiosError;
            console.error("❌ 과거 예약 API 요청 실패:", axiosError);
            if (axiosError.response) {
                console.error("🛑 과거 예약 API 에러 응답 바디:", axiosError.response.data);
            }
        }
    }, [apiReservations, apiPastReservations, currentError, pastError]);

    const mapApiToReservations = (apiData: any): Reservation[] => {
        if (!apiData || !Array.isArray(apiData)) return [];
    
        return apiData.map((item) => ({
            id: item.bookingId ?? 0,
            name: item.designer?.designerName ?? "알 수 없음",
            date: item.bookingDate ?? "날짜 없음",
            time: item.bookingTime ?? "시간 없음",
            location: item.designer?.designerShop ?? "위치 없음",
            status:
                item.bookingStatus === "CONFIRMED"
                    ? "결제 완료"
                    : item.bookingStatus === "PENDING"
                    ? "입금 확인중"
                    : item.bookingStatus === "CANCELED"
                    ? "상담 취소"
                    : "상담 완료", // ✅ "상태 없음"을 제거하고 기본값을 "상담 완료"로 설정
            online: item.meetingType === "REMOTE",
            type: item.meetingType === "REMOTE" ? "온라인" : "직접",
        }));
    };

    // ✅ 실제 사용할 데이터 (API 데이터 변환 후 사용, 없으면 Mock Data)
    const reservations = apiReservations ? mapApiToReservations(apiReservations) : [];
    const pastReservations = apiPastReservations ? mapApiToReservations(apiPastReservations) : [];

    return (
        <div className="flex min-h-[100vh] w-full flex-col items-center bg-white">
            {/* 헤더 */}
            <Logo />
            <TabBar />

            {/* 콘텐츠 */}
            <div className="mt-[64px] w-full max-w-[768px] p-[20px]">
                {/* 알림 */}
                <div className="mb-[48px]">
                <ConsultationAlert
                        designerName="박수연 실장"
                        consultationType="헤어 스타일링"
                        profileImage={profileImage} // ✅ 로컬 이미지 사용
                    />
                </div>

                {/* 다가오는 예약 */}
                <div className="mb-[48px]">
                    <ReservationList reservations={reservations} title="다가오는 예약" />
                </div>

                {/* 지난 컨설팅 */}
                <ReservationList reservations={pastReservations} title="지난 컨설팅" />

                {/* 로딩 인디케이터 */}
                <div ref={loaderRef} className="flex items-center justify-center py-[16px]"></div>
            </div>
        </div>
    );
};

export default ReservationInquiry;