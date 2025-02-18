import HotNewCard from './HotNewCard'

export default function HotNewSection() {
    return (
        <section className='flex flex-col items-start px-4'>
            <span className='font-bold text-black text-body1'>HOT & NEW</span>
            <div className='flex w-full -ml-20 overflow-x-scroll gap-11'>
                <div className='w-9'></div>
                <HotNewCard />
                <HotNewCard />
                <HotNewCard />
                <div className='w-9'></div>
            </div>
        </section>
    )
}
