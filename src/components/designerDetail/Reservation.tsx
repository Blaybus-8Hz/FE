import React, { useEffect, useState } from 'react'
import ToggleButton from './ToggleButton'
import CustomCalendar from './CustomCalendar'
import TimeSelectBar from './TimeSelectBar'
import { useGetAvailableTimes } from '../../apis/api/get/useGetAvailableTimes'
import dayjs from 'dayjs'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Reservation: React.FC = () => {
    //날짜 선택
    const [selectedDate, setSelectedDate] = useState<Value>(new Date()) // 초기값은 현 날짜
    const handleDateClick = (value: Value) => {
        setSelectedDate(value)
    }
    //시간 선택
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const handleTimeClick = (time: string) => {
        setSelectedTime(time)
    }

    //예약 가능한 시간 조회
    const [timeTable, setTimeTable] = useState<string[]>([])
    const designerId = '1' //임시 디자이너 id
    const availableTimes = useGetAvailableTimes(
        designerId,
        dayjs(selectedDate as Date).format('YYYY-MM-DD')
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
    }, [availableTimes, selectedDate])

    return (
        <div className='flex flex-col gap-[1.44rem] pb-[2.8rem] pl-[1.25rem] pr-[1.25rem] pt-[2.8rem]'>
            <div className='text-body1 font-bold text-gray-1300'>상담 예약</div>
            <ToggleButton />
            <CustomCalendar
                selectedDate={selectedDate}
                handleDateClick={handleDateClick}
            />
            <TimeSelectBar
                selectedTime={selectedTime}
                handleTimeClick={handleTimeClick}
                timeTable={timeTable}
            />
        </div>
    )
}

export default Reservation
