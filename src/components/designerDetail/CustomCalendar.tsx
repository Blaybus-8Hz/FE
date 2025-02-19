import React, { useState } from 'react'
import Calendar from 'react-calendar'
import '../../styles/calendar.css'
import dayjs from 'dayjs'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

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
            />
        </div>
    )
}

export default CustomCalendar
