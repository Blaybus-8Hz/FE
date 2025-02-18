import { useState } from 'react'
import CloseIcon from '../../../public/img/close.svg'
import RadioItem from './RadioItem'
import { useHomeStore } from '../../store/useStore'

export type Region =
    | '서울 전체'
    | '강남/청담/압구정'
    | '홍대/연남/합정'
    | '성수/건대'

const regionList: Region[] = [
    '서울 전체',
    '강남/청담/압구정',
    '홍대/연남/합정',
    '성수/건대',
]

export default function BottomSheet() {
    const [selectedRegion, setSelectedRegion] = useState<Region>('서울 전체')
    const { currentRegion, isSheetOpen, setCurrentRegion, toggleSheet } =
        useHomeStore()

    const isButtonActive = selectedRegion !== currentRegion
    const buttonStyle = isButtonActive ? 'bg-gray-1200' : 'bg-gray-600'

    const handleButtonClick = () => {
        if (!isButtonActive) return
        setCurrentRegion(selectedRegion)
        toggleSheet()
    }

    return (
        <div
            className={`translate-0 fixed bottom-0 left-0 right-0 z-50 min-h-[386px] w-full rounded-t-16 bg-gray-100 shadow-[2px_0_14px_0_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out ${isSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className='flex items-center'>
                <span className='flex h-[52px] grow items-center justify-center self-center text-body1 font-semibold text-gray-1300'>
                    지역
                </span>
                <button type='button' className='pr-14' onClick={toggleSheet}>
                    <img src={CloseIcon} alt='닫기 아이콘' />
                </button>
            </div>
            <div className='w-full h-1 bg-gray-400'></div>
            <div className='flex flex-col gap-6 mt-5 mx-17 mb-25'>
                {regionList.map((item) => (
                    <RadioItem
                        key={item}
                        item={item}
                        selected={item === selectedRegion}
                        setSelected={setSelectedRegion}
                    />
                ))}
            </div>
            <div className='px-16 pt-10 h-88 border-t-1 border-t-gray-300 pb-30'>
                <button
                    type='button'
                    onClick={handleButtonClick}
                    className={`flex h-48 w-full items-center justify-center rounded-10 text-body1 font-medium text-gray-100 ${buttonStyle}`}>
                    적용
                </button>
            </div>
        </div>
    )
}
