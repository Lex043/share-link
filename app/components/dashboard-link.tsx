import React from "react";
import Button from "./button";
import CreateLink from "./create-link";
import { linkStore } from "@/store/link";
import EmptyLink from "./empty-link";
import LinkOutput from "./link-output";

export default function DashboardLink() {
    const addEmptyLink = linkStore((state) => state.addEmptyLink);
    const links = linkStore((state) => state.links);

    console.log(links);

    return (
        <section className="mx-auto max-w-[1440px]">
            <section className="lg:flex lg:gap-4">
                <LinkOutput />
                <section className="w-full rounded-xl bg-white">
                    <section className="p-6 md:p-10">
                        <div>
                            <h1 className="font-instrument-sans text-2xl font-bold text-dark-grey">
                                Customize your links
                            </h1>
                            <p className="pt-2 text-base text-grey">
                                Add/edit/remove links below and then share all
                                your profiles with the world!
                            </p>
                        </div>
                        <section className="mt-6">
                            <Button
                                onClick={addEmptyLink}
                                className="w-full rounded-lg border border-purple py-[11px] text-base text-purple hover:bg-light-purple"
                            >
                                + Add new link
                            </Button>
                            <div className="no-scrollbar mt-6 h-[45vh] overflow-x-hidden overflow-y-scroll">
                                {links.length > 0 ? (
                                    <CreateLink />
                                ) : (
                                    <EmptyLink />
                                )}
                            </div>
                        </section>
                    </section>
                    <div className="mb-6 border-t border-light-purple">
                        <div className="p-4 md:flex md:justify-end">
                            <Button
                                className={`mt-4 w-full rounded-lg bg-purple py-[11px] text-base text-white opacity-[25%] md:w-fit md:px-7 ${links.length > 0 ? "opacity-100" : "opacity-[25%]"}`}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}
