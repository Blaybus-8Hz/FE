import React, { useEffect, useState } from 'react'
import ToggleButton from './ToggleButton'
import CustomCalendar from './CustomCalendar'
import TimeSelectBar from './TimeSelectBar'
import { useGetAvailableTimes } from '../../apis/api/get/useGetAvailableTimes'
import dayjs from 'dayjs'
import { useReservationStore } from '../../store/useReservationStore'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Reservation: React.FC = () => {
    const {
        reservationDate,
        setReservationDate,
        reservationTime,
        setReservationTime,
    } = useReservationStore()

    //날짜 선택
    const handleDateClick = (value: Value) => {
        setReservationDate(value as Date)
    }

    //시간 선택
    const handleTimeClick = (time: string) => {
        setReservationTime(time)
    }

    //예약 가능한 시간 조회
    const [timeTable, setTimeTable] = useState<string[]>([])
    const designerId = '1' //임시 디자이너 id
    const availableTimes = useGetAvailableTimes(
        designerId,
        dayjs(reservationDate as Date).format('YYYY-MM-DD')
    )

    useEffect(() => {
        if (
            availableTimes.isSuccess &&
            availableTimes.data !== null &&
            availableTimes.data.data.data['예약 가능 시간 리스트: '].length > 0
        ) {
            const formattedTimes = availableTimes.data.data.data[
                '예약 가능 시간 리스트: '
            ].map((time: string) => {
                const [hour, minute] = time.split(':')
                const hourNumber = parseInt(hour, 10)
                const period = hourNumber < 12 ? '오전' : '오후'
                const formattedHour =
                    hourNumber % 12 === 0 ? 12 : hourNumber % 12
                return `${period} ${formattedHour}:${minute}`
            })
            setTimeTable(formattedTimes)
        }
    }, [availableTimes.isSuccess])

    return (
        <div className='flex flex-col gap-[1.44rem] pb-[2.8rem] pl-[1.25rem] pr-[1.25rem] pt-[2.8rem]'>
            <div className='text-body1 font-bold text-gray-1300'>상담 예약</div>
            <ToggleButton />
            <CustomCalendar
                selectedDate={reservationDate}
                handleDateClick={handleDateClick}
            />
            <TimeSelectBar
                selectedTime={reservationTime}
                handleTimeClick={handleTimeClick}
                timeTable={timeTable}
            />
        </div>
    )
}

export default Reservation
