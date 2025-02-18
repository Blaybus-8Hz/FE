import Category from './Category'
import ArrowIcon from '../../../public/img/arrow-right.svg'
import Rating from './Rating'
import DesignerImg from '../../../public/img/Banner.png'
import Profile from './Profile'
import { Link } from 'react-router-dom'

export default function DesignerCard() {
    return (
        <Link
            to='#'
            className='flex w-full items-center gap-14 rounded-12 bg-gray-100 px-12 py-10 shadow-[0_1px_12px_rgba(0,0,0,0.08)]'>
            <Profile size='lg' imgUrl={DesignerImg} />
            <div className='flex flex-col items-start gap-6 grow'>
                <div className='flex flex-col items-start'>
                    <div className='flex items-center justify-center gap-6'>
                        <span className='font-semibold text-body1 text-gray-1300'>
                            박수연 실장
                        </span>
                        <Rating rating={4.3} textColor='black' />
                    </div>
                    <span className='text-body2 text-[#939393]'>
                        준오헤어 반포점
                    </span>
                </div>
                <div className='flex gap-4'>
                    <Category value='온라인' />
                    <Category value='염색 전문' />
                </div>
            </div>
            <img src={ArrowIcon} alt='오른쪽 화살표 아이콘' />
        </Link>
    )
}
