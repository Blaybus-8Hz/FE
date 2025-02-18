import {create} from 'zustand'

interface ReservationState {
    designerId: string
    reservationDate: Date | null
    reservationTime: string | null
    isOnline: boolean
    setDesignerId: (id: string) => void
    setReservationDate: (date: Date | null) => void
    setReservationTime: (time: string | null) => void
    setIsOnline: (isOnline: boolean) => void
}

export const useReservationStore = create<ReservationState>((set) => ({
    designerId: '1',
    reservationDate: null,
    reservationTime: null,
    isOnline: false,
    setDesignerId: (id) => set({ designerId: id }),
    setReservationDate: (date) => set({ reservationDate: date }),
    setReservationTime: (time) => set({ reservationTime: time }),
    setIsOnline: (isOnline) => set({ isOnline }),
}))