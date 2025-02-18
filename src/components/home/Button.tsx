import ArrowIcon from '../../../public/img/arrow-down.svg'

export default function Button() {
    return (
        <button
            type='button'
            className='flex h-46 w-full items-center justify-center gap-5 rounded-12 bg-[#f6f6f6] px-12 py-10'>
            <span className='text-body2 text-gray-1000'>더보기</span>
            <img src={ArrowIcon} alt='화살표 아이콘' className='px-3 pb-5' />
        </button>
    )
}
