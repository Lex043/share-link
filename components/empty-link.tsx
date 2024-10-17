import React from "react";
import Image from "next/image";

export default function EmptyLink() {
    return (
        <div className="flex h-[469px] items-center justify-center rounded-xl bg-light-grey px-5">
            <div className="flex flex-col items-center justify-center">
                <div className="mx-auto h-20 w-32">
                    <Image
                        className="h-full w-full"
                        src="/assets/images/illustration-empty.svg"
                        width={100}
                        height={100}
                        alt="logo Icon"
                    />
                </div>
                <div>
                    <h1 className="pt-6 text-center font-instrument-sans text-2xl font-bold text-dark-grey">
                        Let&apos;s get you started
                    </h1>
                    <p className="pt-6 text-center text-base text-grey md:w-[488px]">
                        Use the “Add new link” button to get started. Once you
                        have more than one link, you can reorder and edit them.
                        We&apos;re here to help you share your profiles with
                        everyone!
                    </p>
                </div>
            </div>
        </div>
    );
}
