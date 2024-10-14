"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthProps {
    children: ReactNode;
}

export default function Auth({ children }: AuthProps) {
    const pathname = usePathname();

    return (
        <section className="flex min-h-svh flex-col justify-center bg-light-grey p-8">
            <div className="md:mx-auto">
                <Image
                    className="h-10 w-[182px]"
                    src="/assets/images/logo-devlinks-large.svg"
                    width={100}
                    height={100}
                    alt="Icon"
                />
            </div>

            <section className="mt-16 md:mx-auto md:mt-[51px] md:w-[476px] md:rounded-xl md:bg-white md:p-10">
                <div className="pb-10">
                    <h4 className="text-2xl font-bold text-dark-grey xl:text-[32px]">
                        {pathname === "/" ? "Login" : "Create account"}
                    </h4>
                    <p className="pt-2 text-base text-grey">
                        {pathname === "/"
                            ? "Add your details below to get back into the app"
                            : "Let's get you started sharing your links!"}
                    </p>
                </div>

                <div>
                    {children}
                    <div className="justify-center pt-6 md:flex md:items-center md:gap-1">
                        <p className="text-center text-base text-grey">
                            {pathname == "/"
                                ? "Don't have an account?"
                                : " Already have an account?"}
                        </p>
                        <Link
                            className="flex justify-center pt-1 text-base text-purple md:pt-0"
                            href={pathname === "/" ? "/register" : "/"}
                        >
                            {pathname === "/" ? "Create account" : "Login"}
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
}
