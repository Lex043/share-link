import React from "react";
import Button from "./button";
import Image from "next/image";
import LinkOutput from "./link-output";

export default function DashboardLink() {
    return (
        <section className="mx-auto max-w-[1440px]">
            <section className="flex gap-6">
                <LinkOutput className="hidden w-[560px] items-center justify-center self-stretch rounded-xl bg-white p-6 lg:flex" />
                <section className="rounded-xl bg-white px-6">
                    <div>
                        <h1 className="pt-6 font-instrument-sans text-2xl font-bold text-dark-grey">
                            Customize your links
                        </h1>
                        <p className="pt-2 text-base text-grey">
                            Add/edit/remove links below and then share all your
                            profiles with the world!
                        </p>
                    </div>
                    <section className="mt-10 pb-6">
                        <Button className="w-full rounded-lg border border-purple py-[11px] text-base text-purple">
                            + Add new link
                        </Button>
                        <div className="mt-6 rounded-xl bg-light-grey p-5">
                            <div className="mx-auto h-20 w-32">
                                <Image
                                    className="h-full w-full"
                                    src="/assets/images/illustration-empty.svg"
                                    width={100}
                                    height={100}
                                    alt="logo Icon"
                                />
                            </div>
                            <h1 className="pt-6 text-center font-instrument-sans text-2xl font-bold text-dark-grey">
                                Let&apos;s get you started
                            </h1>
                            <p className="pt-6 text-center text-base text-grey">
                                Use the “Add new link” button to get started.
                                Once you have more than one link, you can
                                reorder and edit them. We&apos;re here to help
                                you share your profiles with everyone!
                            </p>
                        </div>
                    </section>
                    <div className="mb-6 border-t border-light-purple">
                        <div className="p-4 md:flex md:justify-end">
                            <Button className="mt-4 w-full rounded-lg bg-purple py-[11px] text-base text-white opacity-[25%] md:w-fit md:px-7">
                                Save
                            </Button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}
