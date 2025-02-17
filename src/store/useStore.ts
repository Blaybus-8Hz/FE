import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { TabType } from '../components/TabBar/TabBar'
import { CounselType } from '../components/home/MethodSelectionCard'
import { Region } from '../components/home/BottomSheet'

interface accessTokenStore {
    accessToken: string | null
    setAccessToken: (token: string) => void
    clearAccessToken: () => void
}

export const useAccessTokenStore = create<accessTokenStore>((set) => ({
    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
    clearAccessToken: () => set({ accessToken: null }),
}))

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
        },
        (set, get) => {
            return {
                setCounselType: (switchTo: CounselType) => {
                    set({
                        counselType: switchTo,
                    })
                },
                toggleSheet: () => {
                    set({
                        isSheetOpen: !get().isSheetOpen,
                    })
                },
                setCurrentRegion: (switchTo: Region) => {
                    set({
                        currentRegion: switchTo,
                    })
                },
            }
        }
    )
)
