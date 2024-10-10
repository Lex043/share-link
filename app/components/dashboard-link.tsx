"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Button from "./button";
import CreateLink from "./create-link";
import { linkStore } from "@/store/link";
import useSession from "../hooks/useSession";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmptyLink from "./empty-link";
import LinkOutput from "./link-output";
import Loader from "@/public/assets/svgs/Loader";

export default function DashboardLink() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const supabase = createClient();
    const addEmptyLink = linkStore((state) => state.addEmptyLink);
    const links = linkStore((state) => state.links);
    const { userId } = useSession();

    const saveUserLinks = async () => {
        try {
            setIsLoading(true);
            const mappedLinks = links.map((link) => ({
                id: link.id,
                platform: link.platform,
                link: link.link,
                profile_id: userId,
            }));
            const { error } = await supabase
                .from("devlink_links")
                .upsert(mappedLinks);

            if (error) {
                toast.error(`${error.message}`, {
                    position: "bottom-right",
                    style: {
                        background: "#FF0000",
                        color: "#FFF",
                    },
                });
                setIsLoading(false);
            } else {
                setIsLoading(false);
                toast.success("Links saved successfully", {
                    position: "bottom-right",
                    style: {
                        background: "#008000",
                        color: "#FFF",
                    },
                });
            }
        } catch (error) {
            toast.error(`${error}`, {
                position: "bottom-right",
                style: {
                    background: "#FF0000",
                    color: "#FFF",
                },
            });
            setIsLoading(false);
        }
    };

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
                            <div
                                className={`no-scrollbar ${links.length > 0 ? "h-[45vh] overflow-x-hidden overflow-y-scroll" : ""} mt-6`}
                            >
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
                                onClick={saveUserLinks}
                                className={`mt-4 w-full rounded-lg bg-purple py-[11px] text-base text-white md:w-fit md:px-7 ${links.length > 0 ? "opacity-100" : "opacity-[25%]"}`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Loader className="animate-spin" />
                                        Save
                                    </span>
                                ) : (
                                    "Save"
                                )}
                            </Button>
                        </div>
                    </div>
                </section>
                <ToastContainer />
            </section>
        </section>
    );
}
