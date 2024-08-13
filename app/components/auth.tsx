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
        <section className="bg-light-grey flex min-h-screen flex-col justify-center p-8">
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
                    <h4 className="text-dark-grey text-2xl font-bold xl:text-[32px]">
                        {pathname === "/" ? "Login" : "Create account"}
                    </h4>
                    <p className="text-grey pt-2 text-base">
                        {pathname === "/"
                            ? "Add your details below to get back into the app"
                            : "Let's get you started sharing your links!"}
                    </p>
                </div>

                <div>
                    {children}
                    <div className="justify-center pt-6 md:flex md:items-center">
                        <p className="text-grey text-center text-base">
                            {pathname == "/"
                                ? "Don't have an account?"
                                : " Already have an account?"}
                        </p>
                        <Link
                            className="text-purple flex justify-center pt-1 text-base md:pt-0"
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
