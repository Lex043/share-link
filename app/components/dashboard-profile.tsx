import React from "react";
import Button from "./button";
import Image from "next/image";
import LinkOutput from "./link-output";
import useSession from "../hooks/useSession";

export default function DashboardProfile() {
    const { userEmail } = useSession();

    return (
        <section className="mx-4 my-4 md:mx-0">
            <section className="flex gap-6">
                <LinkOutput />
                <section className="w-full rounded-xl bg-white">
                    <section className="flex shrink-0 grow basis-0 flex-col items-start self-stretch px-6 md:p-10">
                        <div>
                            <h1 className="pt-6 font-instrument-sans text-2xl font-bold text-dark-grey">
                                Profile Details
                            </h1>
                            <p className="pt-2 text-base text-grey">
                                Add your details to create a personal touch to
                                your profile.
                            </p>
                        </div>
                        <section className="mt-10 w-full pb-6 md:pb-[154px]">
                            <div className="mt-6 rounded-xl bg-light-grey p-5 md:flex md:items-center md:justify-between">
                                <h1 className="text-base text-grey md:max-w-60">
                                    Profile picture
                                </h1>
                                <div className="pt-4 md:flex md:items-center md:gap-6">
                                    <div className="w-48 rounded-xl bg-light-purple py-[60px]">
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
                                    <p className="mt-6 text-xs text-grey md:mt-0 md:leading-relaxed">
                                        Image must be below 1024x1024px. <br />
                                        Use PNG or JPG format.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 rounded-xl bg-light-grey p-5">
                                <form action="" className="flex flex-col gap-3">
                                    <label
                                        htmlFor=""
                                        className="flex flex-col md:flex-row md:items-center md:gap-4"
                                    >
                                        <p className="flex pb-1 text-xs text-grey md:w-[240px] md:text-base">
                                            First name <span>*</span>
                                        </p>

                                        <input
                                            className="rounded-lg border border-light-purple px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-full"
                                            type="text"
                                            placeholder="Ben"
                                            name=""
                                        />
                                    </label>
                                    <label
                                        htmlFor=""
                                        className="flex flex-col md:flex-row md:items-center md:gap-4"
                                    >
                                        <p className="flex pb-1 text-xs text-grey md:w-[240px] md:text-base">
                                            Last name <span>*</span>
                                        </p>
                                        <input
                                            className="rounded-lg border border-light-purple px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-full"
                                            type="text"
                                            placeholder="Wright"
                                            name=""
                                        />
                                    </label>
                                    <label
                                        htmlFor=""
                                        className="flex flex-col md:flex-row md:items-center md:gap-4"
                                    >
                                        <p className="pb-1 text-xs text-grey md:w-[240px] md:text-base">
                                            Email
                                        </p>
                                        <input
                                            className="rounded-lg border border-light-purple px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-full"
                                            type="text"
                                            placeholder={userEmail ?? undefined}
                                            name=""
                                        />
                                    </label>
                                </form>
                            </div>
                        </section>
                    </section>
                    <div className="border-t border-light-purple">
                        <div className="p-4 md:flex md:justify-end">
                            <Button className="w-full rounded-lg bg-purple py-[11px] text-base text-white md:w-fit md:px-7">
                                Save
                            </Button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}
