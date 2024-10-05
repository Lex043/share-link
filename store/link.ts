import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface DropdownOption {
    id: number;
    icon: JSX.Element;
    label: string;
}

interface Link {
    id: string;
    platform: string;
    link: string;
}

interface LinkStore {
    links: Link[];
    addEmptyLink: () => void;
    updateLink: (id: string, field: string, value: string) => void;
    deleteLink: (id: string) => void;
}

interface DropdownStore {
    selectedOptions: { [key: string]: DropdownOption | null };
    setSelectedOption: (linkId: string, option: DropdownOption) => void;
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

    deleteLink: (id) => {
        set((state) => ({
            links: state.links.filter((link) => link.id !== id),
        }));
    },
}));

export const dropdownStore = create<DropdownStore>((set) => ({
    selectedOptions: {},
    setSelectedOption: (linkId: string, option: DropdownOption) =>
        set((state) => ({
            selectedOptions: { ...state.selectedOptions, [linkId]: option },
        })),
}));
