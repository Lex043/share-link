import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { linkStore } from "@/store/link";
import LinkInput from "./link-input";
import Platform from "./platform";

export default function CreateLink() {
    const links = linkStore((state) => state.links);
    const deleteLink = linkStore((state) => state.deleteLink);

    return (
        <section className="relative flex flex-col gap-6">
            <AnimatePresence>
                {links &&
                    links.map((link, index) => (
                        <motion.section
                            className="rounded-xl bg-light-grey p-5"
                            key={link.id}
                            layout
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <motion.div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-base font-bold text-grey">
                                    <div className="flex items-center gap-1">
                                        <span>=</span>
                                        <h1>Link</h1>
                                    </div>
                                    <span>#{index + 1}</span>
                                </div>
                                <p
                                    onClick={() => deleteLink(link.id)}
                                    className="cursor-pointer text-base text-grey"
                                >
                                    Remove
                                </p>
                            </motion.div>
                            <div className="py-3">
                                <Platform linkId={link.id} />
                            </div>
                            <div className="relative py-3">
                                {" "}
                                <LinkInput linkId={link.id} />
                            </div>
                        </motion.section>
                    ))}
            </AnimatePresence>
        </section>
    );
}
