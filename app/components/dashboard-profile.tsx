import React from "react";
import Button from "./button";
import Image from "next/image";
import useSession from "../hooks/useSession";

export default function DashboardProfile() {
    const { userEmail } = useSession();

    return (
        <section className="mx-4 my-4 max-w-[1440px] rounded-xl bg-white md:mx-0 xl:mx-auto">
            <section className="px-6">
                <div>
                    <h1 className="pt-6 font-instrument-sans text-2xl font-bold text-dark-grey">
                        Profile Details
                    </h1>
                    <p className="pt-2 text-base text-grey">
                        Add your details to create a personal touch to your
                        profile.
                    </p>
                </div>
                <section className="mt-10 pb-6">
                    <div className="mt-6 rounded-xl bg-light-grey p-5 md:flex md:items-center md:justify-between">
                        <h1 className="text-base text-grey md:max-w-60">
                            Profile picture
                        </h1>
                        <div className="pt-4 md:flex md:items-center md:gap-6">
                            <div className="bg-light-purple w-48 rounded-xl py-[60px]">
                                <div className="mx-auto h-10 w-10">
                                    <Image
                                        className="h-full w-full"
                                        src="/assets/images/icon-upload-image.svg"
                                        width={100}
                                        height={100}
                                        alt="logo Icon"
                                    />
                                </div>
                                <h1 className="pt-2 text-center text-base font-bold text-purple">
                                    + Upload Image
                                </h1>
                            </div>
                            <p className="mt-6 text-xs text-grey md:max-w-32 md:leading-relaxed">
                                Image must be below 1024x1024px. Use PNG or JPG
                                format.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 rounded-xl bg-light-grey p-5">
                        <form action="" className="flex flex-col gap-3">
                            <label
                                htmlFor=""
                                className="flex flex-col md:flex-row md:justify-between"
                            >
                                <p className="flex pb-1 text-xs text-grey md:text-base">
                                    First name <span>*</span>
                                </p>

                                <input
                                    className="border-light-purple rounded-lg border px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-[344px]"
                                    type="text"
                                    placeholder="Ben"
                                    name=""
                                />
                            </label>
                            <label
                                htmlFor=""
                                className="flex flex-col md:flex-row md:justify-between"
                            >
                                <p className="flex pb-1 text-xs text-grey md:text-base">
                                    Last name <span>*</span>
                                </p>
                                <input
                                    className="border-light-purple rounded-lg border px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-[344px]"
                                    type="text"
                                    placeholder="Wright"
                                    name=""
                                />
                            </label>
                            <label
                                htmlFor=""
                                className="flex flex-col items-center md:flex-row md:justify-between"
                            >
                                <p className="pb-1 text-xs text-grey md:text-base">
                                    Email
                                </p>
                                <input
                                    className="border-light-purple rounded-lg border px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-[344px]"
                                    type="text"
                                    placeholder={userEmail ?? undefined}
                                    name=""
                                />
                            </label>
                        </form>
                    </div>
                </section>
            </section>
            <div className="border-light-purple border-t">
                <div className="p-4 md:flex md:justify-end">
                    <Button className="w-full rounded-lg bg-purple py-[11px] text-base text-white md:w-fit md:px-7">
                        Save
                    </Button>
                </div>
            </div>
        </section>
    );
}
