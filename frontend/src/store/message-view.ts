import { create } from 'zustand'

type MessageView = {
  isActive: boolean
  setIsActive: (value: boolean) => void
}

export const useMessageView = create<MessageView>(set => ({
  isActive: true,
  setIsActive: (value) => set({ isActive: value })
}))
