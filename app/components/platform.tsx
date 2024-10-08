"use client";

import React, { useState } from "react";
import { ArrowdownIcon } from "@/public/assets/svgs";
import { menuList } from "@/utils/menuList";
import { linkStore } from "@/store/link";

interface DropdownOption {
    id: number;
    icon: JSX.Element;
    label: string;
}

export default function Platform({ linkId }: { linkId: string }) {
    const updateLink = linkStore((state) => state.updateLink);
    const links = linkStore((state) => state.links);
    const [isOpen, setIsOpen] = useState(false);

    const currentLink = links.find((link) => link.id === linkId);
    const selectedPlatformLabel = currentLink?.platform || "";

    const selectedOption =
        menuList.find((option) => option.label === selectedPlatformLabel) ||
        null;

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionSelect = (option: DropdownOption) => {
        updateLink(linkId, "platform", option.label);
        setIsOpen(false);
    };

    return (
        <section className="relative">
            <h6 className="flex flex-col text-xs text-dark-grey">Platform</h6>
            <div
                onClick={toggleDropdown}
                className="relative mt-1 cursor-pointer rounded-lg border bg-white py-3 pl-4 pr-4 text-base outline-none focus:border-purple"
            >
                {selectedOption ? (
                    <span className="flex items-center gap-2 text-grey">
                        <selectedOption.icon.type className="fill-grey" />
                        {selectedOption.label}
                    </span>
                ) : (
                    <span className="block text-grey">Select a platform</span>
                )}
                <span className="absolute bottom-[18px] right-5">
                    <ArrowdownIcon />
                </span>
            </div>
            {isOpen && (
                <div className="absolute z-10 mt-4 w-full rounded-lg border border-[#D9D9D9] bg-white">
                    <div className="flex h-[40vh] cursor-pointer flex-col items-start gap-3 overflow-y-scroll px-4 py-3">
                        {menuList.map((list) => (
                            <div
                                className="w-full border-b border-[#D9D9D9]"
                                onClick={() => handleOptionSelect(list)}
                                key={list.id}
                            >
                                <div className="flex items-center gap-2 pb-3 hover:fill-purple hover:text-purple">
                                    <list.icon.type
                                        className={`${selectedOption?.id === list.id ? "fill-purple" : "fill-grey"}`}
                                    />
                                    <h1
                                        className={`${selectedOption?.id === list.id ? "text-purple" : "text-grey"}`}
                                    >
                                        {list.label}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
