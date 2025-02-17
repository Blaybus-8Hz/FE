import { create } from 'zustand'
import { combine, persist } from 'zustand/middleware'
import { TabType } from '../components/TabBar/TabBar'
import { CounselType } from '../components/home/MethodSelectionCard'
import { Region } from '../components/home/BottomSheet'
import { ChipType } from '../components/home/Chip'

interface accessTokenStore {
    accessToken: string | null
    setAccessToken: (token: string) => void
}

export const useAccessTokenStore = create<accessTokenStore>()(
    persist(
        (set) => ({
            accessToken: null,
            setAccessToken: (token) => set({ accessToken: token }),
        }),
        {
            name: 'access-token-storage',
        }
    )
)

export const useTabStore = create(
    combine(
        {
            currentTab: 'home',
        },
        (set) => {
            return {
                setCurrentTab: (to: TabType) => {
                    set({
                        currentTab: to,
                    })
                },
            }
        }
    )
)

export const useHomeStore = create(
    combine(
        {
            counselType: 'inPerson',
            isSheetOpen: false,
            currentRegion: '서울 전체',
            selectedChips: ['전체'],
        },
        (set, get) => {
            return {
                setCounselType: (switchTo: CounselType) => {
                    set({ counselType: switchTo })
                },
                toggleSheet: () => {
                    set({ isSheetOpen: !get().isSheetOpen })
                },
                setCurrentRegion: (switchTo: Region) => {
                    set({ currentRegion: switchTo })
                },
                toggleChip: (chip: ChipType) => {
                    const { selectedChips } = get()
                    const allOptions: ChipType[] = ['탈염색', '염색', '펌']

                    if (chip === '전체') {
                        // 전체 버튼을 누르면 모든 칩 초기화
                        set({ selectedChips: ['전체'] })
                        return
                    }

                    let newSelectedChips = selectedChips.includes(chip)
                        ? selectedChips.filter((c) => c !== chip) // 선택 해제
                        : [...selectedChips.filter((c) => c !== '전체'), chip] // '전체' 제외하고 추가

                    // 선택된 칩이 탈염색, 염색, 펌 3개 모두 포함하면 '전체'로 변경
                    if (allOptions.every((c) => newSelectedChips.includes(c))) {
                        newSelectedChips = ['전체']
                    }

                    // 모든 칩이 비활성화되면 '전체' 다시 활성화
                    if (newSelectedChips.length === 0) {
                        newSelectedChips = ['전체']
                    }

                    set({ selectedChips: newSelectedChips })
                },
            }
        }
    )
)
