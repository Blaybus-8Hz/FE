import TabItem from './TabItem'

export type TabType = 'home' | 'reservation'

const tabList: TabType[] = ['home', 'reservation']

export default function TabBar() {
    return (
        <div className='fixed bottom-0 left-0 right-0 z-40 flex w-full items-center justify-between bg-gray-100 px-80 pb-26 pt-10 shadow-[0_-2px_13px_rgba(0,0,0,0.08)]'>
            {tabList.map((tab) => (
                <TabItem key={tab} type={tab} />
            ))}
        </div>
    )
}
