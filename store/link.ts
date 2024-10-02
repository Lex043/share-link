import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface Link {
    id: string;
    platform: string;
    link: string;
}

interface LinkStore {
    links: Link[];
    addEmptyLink: () => void;
    updateLink: (id: string, field: string, value: string) => void;
}

export const linkStore = create<LinkStore>((set) => ({
    links: [],

    addEmptyLink: () => {
        set((state) => ({
            links: [...state.links, { id: uuidv4(), platform: "", link: "" }],
        }));
    },

    updateLink: (id, field, value) => {
        set((state) => ({
            links: state.links.map((link) =>
                link.id === id ? { ...link, [field]: value } : link
            ),
        }));
    },
}));
