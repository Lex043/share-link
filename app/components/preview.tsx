"use client";

import React from "react";
import useSession from "../hooks/useSession";
import Button from "./button";
import Link from "next/link";
import { linkStore } from "@/store/link";

export default function Preview() {
    const { userEmail } = useSession();
    const links = linkStore((state) => state.links);

    console.log(links);
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
                            <div className="mx-auto h-[104px] w-[104px] rounded-[104px] border-4 border-purple bg-light-grey"></div>
                            <div>
                                <h1 className="text-[32px] font-bold leading-[150%] text-dark-grey">
                                    {}
                                </h1>
                                <p className="mt-2 text-center text-base text-grey">
                                    {userEmail}
                                </p>
                            </div>

                            <div className="mt-14">
                                <div className="mb-5 h-11 w-full rounded-lg bg-[#eee]"></div>
                                <div className="mb-5 h-11 w-full rounded-lg bg-[#eee]"></div>
                                <div className="mb-5 h-11 w-full rounded-lg bg-[#eee]"></div>
                                <div className="h-11 w-full rounded-lg bg-[#eee]"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}
