import { create } from "zustand";

type DashboardState = {
    isActive: number | null;
    setIsActive: (id: number) => void;
};

export const activeTabStore = create<DashboardState>((set, get) => ({
    isActive: 1,
    setIsActive: (id: number) => {
        const currentIsActive = get().isActive;
        set({ isActive: currentIsActive === id ? currentIsActive : id });
    },
}));
