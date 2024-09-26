"use client";

import React from "react";
import useSession from "../hooks/useSession";
import Button from "./button";
import Link from "next/link";

export default function Preview() {
    const { userEmail } = useSession();
    return (
        <section>
            <section className="rounded-b-[32px] py-4 md:bg-purple md:px-6 md:pb-[231px]">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:rounded-xl md:bg-white md:py-4">
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
            </section>
            <section className="mt-[60px]">
                <section className="mx-auto max-w-[1400px]">
                    <div className="mx-auto flex w-[237px] flex-col items-start gap-14">
                        <div className="flex flex-col items-center gap-[25px]">
                            <div>
                                <h1 className="text-[32px] font-bold leading-[150%] text-dark-grey">
                                    Ben Wright
                                </h1>
                                <p className="mt-2 text-center text-base text-grey">
                                    {userEmail}
                                </p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </section>
            </section>
        </section>
    );
}
