import { create } from 'zustand'

type ConversationView = {
  isActive: boolean
  setIsActive: (value: boolean) => void
}

export const useConversationView = create<ConversationView>(set => ({
  isActive: false,
  setIsActive: value => set({ isActive: value })
}))
