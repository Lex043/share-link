import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/utils/supabase/client";

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

    deleteLink: async (id) => {
        const supabase = createClient();

        try {
            const { error } = await supabase
                .from("devlink_links")
                .delete()
                .eq("id", id);

            if (error) {
                throw new Error(error.message);
            }

            set((state) => ({
                links: state.links.filter((link) => link.id !== id),
            }));
        } catch (err) {
            console.error("Error deleting link:", err);
        }
    },
}));
