import React, { useEffect, useState } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { useGetDesignerInfo } from '../../apis/api/get/useGetDesignerInfo'
interface DesignerInfoProps {
    handleCopyLoc: (shop: string) => void
}

const DesignerInfo: React.FC<DesignerInfoProps> = ({ handleCopyLoc }) => {
    const chips = [
        { text: '직접', bg: '#FFECEC', textColor: '#FE6E81' },
        { text: '온라인', bg: '#ECEFFF', textColor: '#6173FD' },
        { text: '염색전문', bg: '#F5F5F5', textColor: '#8C8C8C' },
    ]
    const [designerInfo, setDesignerInfo] = useState({
        name: '',
        location: '',
        rate: '',
        comment: '',
        price: { offline: '', online: '' },
    })

    // 디자이너 정보 받아오기
    const designerData = useGetDesignerInfo()
    useEffect(() => {
        if (designerData.isSuccess) {
            const data = designerData.data.data.data
            setDesignerInfo({
                name: data.designerName,
                location: data.designerShop,
                rate: '4.7',
                comment: data.designerDescription,
                price: {
                    offline: data.designerContactCost,
                    online: data.designerUntactCost,
                },
            })
        }
    }, [designerData.isSuccess])

    return (
        <div className='flex flex-col gap-16 p-[1.25rem] pb-12'>
            {/* 디자이너 정보 */}
            <div className='flex flex-col gap-[0.3rem]'>
                <div className='flex gap-[0.3rem] space-x-2'>
                    {chips.map((chip, index) => (
                        <span
                            key={index}
                            className='rounded-[0.25rem] p-[0.12rem] pl-[0.3rem] pr-[0.3rem] text-caption font-normal'
                            style={{
                                backgroundColor: chip.bg,
                                color: chip.textColor,
                            }}>
                            {chip.text}
                        </span>
                    ))}
                </div>
                <div className='text-h2 font-bold text-gray-1300'>
                    {designerInfo.name}
                </div>
                <div className='flex flex-row items-center gap-4 text-body1 font-normal text-gray-1300'>
                    {designerInfo.location}
                    <MdContentCopy
                        onClick={() => handleCopyLoc(designerInfo.location)}
                    />
                </div>
                <div className='flex flex-row'>
                    <img
                        src={`${import.meta.env.VITE_CLIENT_URL}/img/star-on.svg`}
                        alt='star'
                    />
                    <div className='flex items-end text-body2 font-normal text-gray-1300'>
                        {designerInfo.rate}
                    </div>
                </div>
            </div>

            {/* 코멘트 */}
            <div className='align-center flex w-full flex-row gap-[0.62rem] rounded-xl bg-neutral-100 pb-[0.875rem] pl-[0.75rem] pt-[0.875rem]'>
                <img
                    src={`${import.meta.env.VITE_CLIENT_URL}/img/logo-s-svg.svg`}
                    alt='logo'
                />
                <div className='flex w-4/5 items-end text-body2 font-normal text-gray-1300'>
                    {designerInfo.comment}
                </div>
            </div>
            {/* 가격 정보 */}
            <div className='flex flex-col gap-6 pr-2'>
                <div className='flex flex-row justify-between'>
                    <span className='text-body1 font-normal text-gray-1300'>
                        직접
                    </span>
                    <span className='text-body1 font-normal text-purple-500'>
                        {designerInfo.price.offline} ~
                    </span>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-body1 font-normal text-gray-1300'>
                        온라인
                    </span>
                    <span className='text-body1 font-normal text-purple-500'>
                        {designerInfo.price.online} ~
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DesignerInfo
