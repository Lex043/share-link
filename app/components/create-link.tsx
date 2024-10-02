import React from "react";
import { linkStore } from "@/store/link";
import LinkInput from "./link-input";
import Platform from "./platform";

export default function CreateLink() {
    const links = linkStore((state) => state.links);

    return (
        <section className="relative flex flex-col gap-6">
            {links &&
                links.map((link, index) => (
                    <section
                        className="rounded-xl bg-light-grey p-5"
                        key={link.id}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-base font-bold text-grey">
                                <div className="flex items-center gap-1">
                                    <span>=</span>
                                    <h1>Link</h1>
                                </div>
                                <span>#{index + 1}</span>
                            </div>
                            <p className="text-base text-grey">Remove</p>
                        </div>
                        <div className="py-3">
                            <Platform linkId={link.id} />
                        </div>
                        <div className="relative py-3">
                            {" "}
                            <LinkInput linkId={link.id} />
                        </div>
                    </section>
                ))}
        </section>
    );
}
