"use client";

import React, { useState, useRef } from "react";
import { createClient } from "@/utils/supabase/client";
import useSession from "./useSession";
import { linkStore } from "@/store/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function useSaveUserLink() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const supabase = createClient();
    const addEmptyLink = linkStore((state) => state.addEmptyLink);
    const links = linkStore((state) => state.links);
    const { userId } = useSession();
    const linksContainerRef = useRef<HTMLDivElement | null>(null);

    const handleAddLink = () => {
        addEmptyLink();
        if (linksContainerRef.current) {
            const container = linksContainerRef.current;

            setTimeout(() => {
                const lastLink = container.lastChild as HTMLElement;
                if (lastLink) {
                    lastLink.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
                }
            }, 100);
        }
    };

    const saveUserLinks = async () => {
        try {
            setIsLoading(true);
            const mappedLinks = links.map((link) => ({
                id: link.id,
                platform: link.platform,
                link: link.link,
                profile_id: userId,
            }));
            const { error } = await supabase
                .from("devlink_links")
                .upsert(mappedLinks);

            if (error) {
                toast.error(`${error.message}`, {
                    position: "bottom-right",
                    style: {
                        background: "#FF0000",
                        color: "#FFF",
                    },
                });
                setIsLoading(false);
            } else {
                setIsLoading(false);
                toast.success("Links saved successfully", {
                    position: "bottom-right",
                    style: {
                        background: "#008000",
                        color: "#FFF",
                    },
                });
            }
        } catch (error) {
            toast.error(`${error}`, {
                position: "bottom-right",
                style: {
                    background: "#FF0000",
                    color: "#FFF",
                },
            });
            setIsLoading(false);
        }
    };
    return {
        saveUserLinks,
        handleAddLink,
        linksContainerRef,
        isLoading,
        links,
    };
}
