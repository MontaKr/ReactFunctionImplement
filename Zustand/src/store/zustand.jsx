import create from "zustand"
import { devtools } from "zustand/middleware"

export const useStore = create(devtools((set) => ({
  count: 1,
  plus() {
    set((state) => ({ count: state.count + 1 }));
  },
  minus() {
    set((state) => ({ count: state.count - 1 }));
  },
})));