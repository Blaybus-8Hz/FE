import React, { useState } from 'react'
import ToggleButton from './ToggleButton'
import CustomCalendar from './CustomCalendar'
import TimeSelectBar from './TimeSelectBar'
const Reservation: React.FC = () => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const handleTimeClick = (time: string) => {
        setSelectedTime(time)
    }

    return (
        <div className='flex flex-col gap-[1.44rem] pb-[2.8rem] pl-[1.25rem] pr-[1.25rem] pt-[2.8rem]'>
            <div className='text-body1 font-bold text-gray-1300'>상담 예약</div>
            <ToggleButton />
            <CustomCalendar />
            <TimeSelectBar
                selectedTime={selectedTime}
                handleTimeClick={handleTimeClick}
            />
        </div>
    )
}

export default Reservation
