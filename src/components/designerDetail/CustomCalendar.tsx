import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import '../../styles/calendar.css'
import dayjs from 'dayjs'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useGetAvailableDates } from '../../apis/api/get/useGetAvailableDates'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const CustomCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Value>(new Date()) // 초기값은 현 날짜
    const handleSelect = (value: Value) => {
        console.log(value)
        setSelectedDate(value)
    }
    //선택 가능한 maxDate 설정
    const threeMonthLater = dayjs().add(3, 'month').endOf('month').toDate()

    /**
     * 예약 가능 기간 조회
     */
    const designerId = '1' //임시 디자이너 id
    const availableDates = useGetAvailableDates(designerId)
    // const availableTimes = useGetAvailableTimes()
    const [availableDateList, setAvailableDateList] = useState<string[]>([])

    useEffect(() => {
        if (availableDates.isSuccess && availableDates.data !== null) {
            setAvailableDateList(
                availableDates.data.data.data['예약 가능 날짜 리스트: ']
            )
        }
    }, [availableDates.isSuccess])

    return (
        <div>
            <Calendar
                calendarType='gregory'
                view='month'
                locale='ko'
                formatMonthYear={(_, date) => dayjs(date).format('YYYY.MM')}
                formatDay={(_, date) => dayjs(date).format('D')}
                onChange={handleSelect}
                value={selectedDate}
                minDate={new Date()} // 오늘 이전 날짜 선택 불가
                maxDate={threeMonthLater} // 3개월 이후 날짜 선택 불가
                prevLabel={<SlArrowLeft />}
                nextLabel={<SlArrowRight />}
                prev2Label={null}
                next2Label={null}
                showNeighboringMonth={false}
                tileDisabled={({ date }) => {
                    const dateString = date.toISOString().split('T')[0]
                    return !availableDateList.includes(dateString)
                }}
            />
        </div>
    )
}

export default CustomCalendar
