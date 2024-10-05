import { create } from "zustand";

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
}

interface UserDataStore {
    userData: UserData;
    setUserData: (data: Partial<UserData>) => void;
}

export const UserDataStore = create<UserDataStore>((set) => ({
    userData: { firstName: "", lastName: "", email: "", imageUrl: "" },
    setUserData: (data) =>
        set((state) => ({
            userData: { ...state.userData, ...data },
        })),
}));
