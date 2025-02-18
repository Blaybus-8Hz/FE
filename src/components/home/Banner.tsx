import BannerImage from '../../../public/img/banner image_01.png'

export default function Banner() {
    return (
        <button
            type='button'
            className='h-170 relative flex w-[323px] justify-end overflow-hidden rounded-12 bg-BN-blue'>
            <img
                src={BannerImage}
                alt='배너 이미지'
                className='absolute bottom-0 right-0'
            />
            <div className='absolute bottom-0 left-0 right-0 flex flex-col items-start gap-5 pb-16 overflow-hidden text-left px-18 pt-15 h-fit bg-gradient-to-b from-transparent to-black/60'>
                <span className='font-semibold text-gray-100 text-h3'>
                    처음 만나는
                    <br />
                    특별한 변신의 순간
                </span>
                <span className='text-gray-100 text-caption'>
                    첫 방문 컨설팅 + 시술 패키지 30% 할인
                </span>
            </div>
            <div className='absolute flex items-center justify-center py-2 text-gray-100 bottom-16 right-16 h-fit rounded-12 bg-black/30 px-7 text-caption'>
                2/4
            </div>
        </button>
    )
}
