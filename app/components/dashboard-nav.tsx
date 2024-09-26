"use client";

import React from "react";
import Image from "next/image";
import { dashboardNav } from "@/utils/dashboardNav";
import { activeTabStore } from "@/store/active-tab";

export default function DashboardNav() {
    const { isActive, setIsActive } = activeTabStore();

    return (
        <section className="mx-4 my-4 rounded-xl bg-white py-4 pl-6 pr-4 md:mx-0 md:p-6">
            <div className="flex items-center justify-between">
                <Image
                    className="h-8 w-8 md:hidden"
                    src="/assets/images/logo-devlinks-small.svg"
                    width={100}
                    height={100}
                    alt="logo Icon"
                />
                <Image
                    className="hidden h-8 w-[146px] md:block"
                    src="/assets/images/logo-devlinks-large.svg"
                    width={100}
                    height={100}
                    alt="logo Icon"
                />
                <div className="flex">
                    {dashboardNav.map((item) => (
                        <div key={item.id}>
                            <div
                                onClick={() => setIsActive(item.id)}
                                className={`${isActive === item.id ? "bg-light-purple" : "bg-inherit"} flex cursor-pointer items-center gap-2 rounded-lg px-7 py-[11px]`}
                            >
                                <div className="h-4 w-4 md:h-5 md:w-5">
                                    {React.cloneElement(item.icon, {
                                        fill:
                                            isActive === item.id
                                                ? "#633CFF"
                                                : "gray",
                                    })}
                                </div>

                                <p
                                    className={`${isActive === item.id ? "text-purple" : "text-grey"} hidden text-base font-semibold md:block`}
                                >
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rounded-lg border border-purple px-4 py-[11px] md:px-7">
                    <Image
                        className="h-5 w-5 md:hidden"
                        src="/assets/images/icon-preview-header.svg"
                        width={100}
                        height={100}
                        alt="logo Icon"
                    />
                    <p className="hidden text-purple md:block md:font-semibold">
                        Preview
                    </p>
                </div>
            </div>
        </section>
    );
}
