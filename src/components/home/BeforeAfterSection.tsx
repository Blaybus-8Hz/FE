import BeforeAfterCard from './BeforeAfterCard'
import BgImage from '../../../public/img/before-after-0.png'

const beforeAfterData = [
    {
        title: '단발에서 긴머리로 변신 💇🏻‍♀️',
        designer: '김서연 디자이너',
        rating: 4.7,
        review: '이번이 두번재 예약인데 기억해주시더라구요!! 일단 감동하면서 앉았습니다. 처음 자를 때 너무 깔꼼하게 잘라줘가꾸 또 예약했는데 더 마음에 들어용☺️ 주변 친구들이 다니던 미용실 중 옆 뒤가 젤 깔끔하다고 하고, 스몰톡도 야무져서 지루하지도 않았어요. 상담 고민중이시면 꼭 추천드립니다.',
        bgImg: BgImage,
    },
    {
        title: '단발에서 긴머리로 변신 💇🏻‍♀️',
        designer: '김서연 디자이너',
        rating: 4.7,
        review: '이번이 두번재 예약인데 기억해주시더라구요!! 일단 감동하면서 앉았습니다. 처음 자를 때 너무 깔꼼하게 잘라줘가꾸 또 예약했는데 더 마음에 들어용☺️ 주변 친구들이 다니던 미용실 중 옆 뒤가 젤 깔끔하다고 하고, 스몰톡도 야무져서 지루하지도 않았어요. 상담 고민중이시면 꼭 추천드립니다.',
        bgImg: BgImage,
    },
    {
        title: '단발에서 긴머리로 변신 💇🏻‍♀️',
        designer: '김서연 디자이너',
        rating: 4.7,
        review: '이번이 두번재 예약인데 기억해주시더라구요!! 일단 감동하면서 앉았습니다. 처음 자를 때 너무 깔꼼하게 잘라줘가꾸 또 예약했는데 더 마음에 들어용☺️ 주변 친구들이 다니던 미용실 중 옆 뒤가 젤 깔끔하다고 하고, 스몰톡도 야무져서 지루하지도 않았어요. 상담 고민중이시면 꼭 추천드립니다.',
        bgImg: BgImage,
    },
]

export default function BeforeAfterSection() {
    return (
        <section className='flex flex-col items-start px-4 gap-14'>
            <span className='font-bold text-black text-body1'>
                비포 & 애프터 🔮
            </span>
            <div className='flex w-screen gap-12 -ml-20 overflow-x-scroll'>
                <div className='w-8'></div>
                {beforeAfterData.map((card) => (
                    <BeforeAfterCard {...card} />
                ))}
                <div className='w-8'></div>
            </div>
        </section>
    )
}
