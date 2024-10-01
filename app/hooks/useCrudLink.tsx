import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { linkStore } from "@/store/link";

export default function useCrudLink() {
    const addLink = linkStore((state) => state.addLink);

    const [platform, setPlatForm] = useState<string>("");
    const [link, setLink] = useState<string>("");

    const addNewLink = () => {
        // if (platform && link) {
        //     const newLink = {
        //         id: uuidv4,
        //         platform,
        //         link,
        //     };
        //     addLink(newLink);
        // }
        const newLink = {
            id: uuidv4(),
            platform,
            link,
        };
        addLink(newLink);
    };

    return { setLink, setPlatForm, addNewLink };
}
