import { designersData } from '../../data/designers'
import BottomSheet from './BottomSheet'
import Button from './Button'
import Chip from './Chip'
import DesignerCard from './DesignerCard'
import MethodSelectionCard from './MethodSelectionCard'
import RegionSectionButton from './RegionSectionButton'

export default function MainSection() {
    return (
        <div className='flex flex-col mb-44'>
            <h2 className='mb-16 font-bold text-h2 text-gray-1300'>
                어떤 방식으로 상담 받을까요?
            </h2>
            <div className='flex mb-12 gap-21'>
                <MethodSelectionCard type='inPerson' />
                <MethodSelectionCard type='online' />
            </div>
            <div className='flex items-center justify-between w-full mb-22'>
                <div className='flex gap-6'>
                    <Chip active value='전체'></Chip>
                    <Chip value='탈염색'></Chip>
                    <Chip value='염색'></Chip>
                    <Chip value='펌'></Chip>
                </div>
                <RegionSectionButton />
            </div>
            <div className='flex flex-col gap-16 mb-16'>
                {designersData.map((designer) => (
                    <DesignerCard {...designer} />
                ))}
            </div>
            <Button />
            <BottomSheet />
        </div>
    )
}
