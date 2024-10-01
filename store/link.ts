import { create } from "zustand";

interface Link {
    id: any;
    platform: string;
    link: string;
}

interface LinkStore {
    links: Link[];
    addLink: (link: Link) => void;
}

export const linkStore = create<LinkStore>((set) => ({
    links: [],
    addLink: (links) => set((state) => ({ links: [...state.links, links] })),
}));
