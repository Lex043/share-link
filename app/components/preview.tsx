"use client";

import React from "react";
import useSession from "../hooks/useSession";
import useFetchUserData from "../hooks/useFetchUserData";
import Image from "next/image";
import Button from "./button";
import EmptyProfile from "./empty-profile";
import Link from "next/link";
import { platformIcons, platformBgcolor } from "@/utils/mapIcon";
import { ArrowRightIcon } from "@/public/assets/svgs";

export default function Preview() {
    const { userEmail, userId, isLoading } = useSession();
    const { userData, links } = useFetchUserData(userId, isLoading);

    return (
        <section className="md:relative">
            <section className="rounded-b-[32px] py-4 md:h-[357px] md:bg-purple md:px-6">
                <div className="mx-auto max-w-[1440px]">
                    <div className="flex items-center justify-between px-6 md:rounded-xl md:bg-white md:py-4">
                        <Link
                            href="/dashboard"
                            className="rounded-lg border border-purple px-[27px] py-[11px] text-base leading-[150%] text-purple"
                        >
                            Back to Editor
                        </Link>
                        <Button className="rounded-lg bg-purple px-[27px] py-[11px] text-base leading-[150%] text-white">
                            Share Link
                        </Button>
                    </div>
                </div>
            </section>
            <section className="mt-[60px] md:absolute md:left-0 md:right-0 md:top-[200px] md:mt-0">
                <section className="mx-auto max-w-[1440px]">
                    <div className="mx-auto flex w-[237px] flex-col items-center gap-14 md:mb-[200px] md:w-[349px] md:rounded-3xl md:bg-white md:px-14 md:py-12 md:shadow-custom">
                        <div className="w-full">
                            <div>
                                {userData.imageUrl ? (
                                    <Image
                                        width={300}
                                        height={300}
                                        alt={userData.firstName}
                                        src={userData.imageUrl}
                                        className="mx-auto h-[104px] w-[104px] rounded-[104px] border-4 border-purple bg-light-grey"
                                    />
                                ) : (
                                    <div className="mx-auto h-[104px] w-[104px] rounded-[104px] border-4 border-purple bg-light-grey"></div>
                                )}
                            </div>
                            <div>
                                <h1 className="text-center text-[32px] font-bold leading-[150%] text-dark-grey">
                                    {userData?.firstName} {userData?.lastName}
                                </h1>
                                <p className="mt-2 text-center text-base text-grey">
                                    {userEmail}
                                </p>
                            </div>
                            <section className="no-scrollbar mt-14 h-[45vh] overflow-x-hidden overflow-y-scroll">
                                <div className="flex flex-col gap-5">
                                    {links.length === 0 ? (
                                        <EmptyProfile />
                                    ) : (
                                        links.map((link) => (
                                            <div
                                                key={link.id}
                                                className={`flex h-11 w-full items-center justify-between rounded-lg p-4 ${link.platform === "Frontend Mentor" ? "border border-[#D9D9D9]" : "border-none"}`}
                                                style={{
                                                    backgroundColor:
                                                        platformBgcolor[
                                                            link.platform.toLowerCase()
                                                        ],
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {
                                                        platformIcons[
                                                            link.platform.toLowerCase()
                                                        ]
                                                    }
                                                    <span
                                                        className={`text-base ${link.platform === "Frontend Mentor" ? "text-grey" : "text-white"}`}
                                                    >
                                                        {link.platform}
                                                    </span>
                                                </div>
                                                <span>
                                                    <ArrowRightIcon
                                                        className={`${link.platform === "Frontend Mentor" ? "fill-grey" : "fill-white"}`}
                                                    />
                                                </span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}
