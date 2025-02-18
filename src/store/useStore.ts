import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { TabType } from '../components/TabBar/TabBar'
import { CounselType } from '../components/home/MethodSelectionCard'
import { Region } from '../components/home/BottomSheet'
import { persist } from 'zustand/middleware'

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
