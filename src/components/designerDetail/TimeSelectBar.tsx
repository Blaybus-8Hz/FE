import React from 'react'

interface TimeSelectBarProps {
    selectedTime: string | null

    handleTimeClick: (time: string) => void
}

const TimeSelectBar: React.FC<TimeSelectBarProps> = ({
    selectedTime,
    handleTimeClick,
}) => {
    const timeTable = [
        '오전 12:00',
        '오후 12:30',
        '오후 1:00',
        '오후 1:30',
        '오후 5:00',
        '오후 6:00',
        '오후 7:00',
        '오후 8:00',
        '오후 9:00',
    ]

    return (
        <div className='flex flex-row gap-[0.62rem] overflow-scroll'>
            {timeTable.map((time, index) => (
                <button
                    key={index}
                    onClick={() => handleTimeClick(time)}
                    className={`min-h-[2.25rem] min-w-[4.75rem] rounded-xl p-2 text-center text-caption font-normal text-gray-1300 transition ${
                        selectedTime === time
                            ? 'border-none bg-purple-300 text-white'
                            : 'border-1 border-gray-500 bg-white'
                    }`}>
                    {time}
                </button>
            ))}
        </div>
    )
}

export default TimeSelectBar
