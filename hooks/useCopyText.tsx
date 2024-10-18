import React from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

export default function useCopyText() {
    const pathname = usePathname();

    const handleCopyText = async () => {
        const baseUrl = window.location.origin;
        const fullUrl = `${baseUrl}${pathname}`;
        try {
            await navigator.clipboard.writeText(fullUrl);
            toast.success("The link has been copied to your clickboard", {
                position: "bottom-right",
                style: {
                    background: "#000",
                    color: "#FFF",
                },
            });
        } catch (error) {
            toast.error(error as string, {
                position: "bottom-right",
                style: {
                    background: "#000",
                    color: "#FFF",
                },
            });
        }
    };
    return { handleCopyText };
}
