"use client";

import React from "react";
import useSession from "../hooks/useSession";
import Image from "next/image";
import useFetchUserData from "../hooks/useFetchUserData";
import EmptyProfile from "./empty-profile";
import { platformIcons, platformBgcolor } from "@/utils/mapIcon";
import { ArrowRightIcon } from "@/public/assets/svgs";

export default function LinkOutput() {
    const { userEmail, userId, isLoading } = useSession();
    const { userData, links } = useFetchUserData(userId, isLoading);

    return (
        <section className="relative hidden w-[560px] items-center justify-center rounded-xl bg-white p-6 py-[101px] lg:flex">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="308"
                height="632"
                viewBox="0 0 308 632"
                fill="none"
                className="relative"
            >
                <path
                    d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
                    stroke="#737373"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="286"
                height="612"
                viewBox="0 0 286 612"
                fill="none"
                className="absolute"
            >
                <path
                    d="M1 45.5C1 20.9233 20.9233 1 45.5 1H69.5C75.8513 1 81 6.14873 81 12.5C81 20.5081 87.4919 27 95.5 27H190.5C198.508 27 205 20.5081 205 12.5C205 6.14873 210.149 1 216.5 1H240.5C265.077 1 285 20.9233 285 45.5V566.5C285 591.077 265.077 611 240.5 611H45.5C20.9233 611 1 591.077 1 566.5V45.5Z"
                    fill="white"
                    stroke="#737373"
                />
            </svg>

            <div className="absolute mb-[30px] mt-[100px] w-[237px]">
                {userData.imageUrl ? (
                    <Image
                        width={300}
                        height={300}
                        alt={userData.firstName}
                        src={userData.imageUrl}
                        className="mx-auto h-[104px] w-[104px] rounded-[104px] bg-light-grey"
                    />
                ) : (
                    <div className="mx-auto h-[104px] w-[104px] rounded-[104px] bg-light-grey"></div>
                )}
                <div className="mx-auto mt-[25px]">
                    {userData?.firstName || userData?.lastName ? (
                        <h1 className="text-center text-lg font-semibold text-dark-grey">
                            {" "}
                            {userData?.firstName} {userData?.lastName}
                        </h1>
                    ) : (
                        <h1 className="mx-auto h-4 w-[160px] rounded-lg bg-[#eee] text-[32px] font-bold leading-[150%] text-dark-grey"></h1>
                    )}
                    <p className="mt-2 text-center text-base text-grey">
                        {userEmail}
                    </p>
                </div>

                <section className="no-scrollbar mt-6 h-[45vh] overflow-x-hidden overflow-y-scroll">
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
        </section>
    );
}
