"use client";

import React, { useRef, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Button from "./button";
import Image from "next/image";
import LinkOutput from "./link-output";
import Loader from "@/public/assets/svgs/Loader";
import useSession from "../hooks/useSession";
import { UserDataStore } from "@/store/user-data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardProfile() {
    const supabase = createClient();
    const { userData, setUserData } = UserDataStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData,
    }));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fileInput = useRef<HTMLInputElement>(null);
    const { userEmail, userId } = useSession();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (userEmail && userData.email === "") {
            setUserData({ email: userEmail });
        }
    }, [userEmail, userData.email, setUserData]);

    const handleClick = () => {
        fileInput.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size / 1024 < 1024) {
            const reader = new FileReader();
            reader.onload = function () {
                setUserData({ ...userData, imageUrl: reader.result as string });
            };
            reader.readAsDataURL(file);
        } else {
            toast.error("image is greater than 1mb", {
                position: "bottom-right",
                style: {
                    background: "#FF0000",
                    color: "#FFF",
                },
            });
        }
    };

    const saveUserProfile = async () => {
        try {
            setIsLoading(true);
            const { error } = await supabase.from("devlink_profiles").upsert({
                id: userId,
                first_name: userData.firstName,
                last_name: userData.lastName,
                ...(userData.imageUrl && { image_url: userData.imageUrl }),
            });
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
                toast.success("Profile saved successfully", {
                    position: "bottom-right",
                    style: {
                        background: "#008000",
                        color: "#FFF",
                    },
                });
                setIsLoading(false);
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
                            <h1 className="pt-6 font-instrument-sans text-2xl font-bold text-dark-grey">
                                Profile Details
                            </h1>
                            <p className="pt-2 text-base text-grey">
                                Add your details to create a personal touch to
                                your profile.
                            </p>
                        </div>
                        <section className="mt-10 w-full pb-6 md:pb-[114px]">
                            <div className="mt-6 rounded-xl bg-light-grey p-5 md:flex md:items-center md:justify-between">
                                <h1 className="text-base text-grey md:max-w-60">
                                    Profile picture
                                </h1>
                                <div
                                    onClick={handleClick}
                                    className="pt-4 md:flex md:items-center md:gap-6"
                                >
                                    <div
                                        className="relative w-48 cursor-pointer rounded-xl bg-light-purple py-[60px]"
                                        style={{
                                            backgroundImage: userData?.imageUrl
                                                ? `url(${userData.imageUrl})`
                                                : "none",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        {userData?.imageUrl && (
                                            <div className="absolute inset-0 rounded-xl bg-black opacity-50"></div>
                                        )}
                                        <div className="mx-auto h-10 w-10">
                                            {!userData?.imageUrl && (
                                                <Image
                                                    className="h-full w-full"
                                                    src="/assets/images/icon-upload-image.svg"
                                                    width={100}
                                                    height={100}
                                                    alt="logo Icon"
                                                />
                                            )}
                                        </div>

                                        <input
                                            type="file"
                                            ref={fileInput}
                                            name="image"
                                            id="image"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />

                                        <h1
                                            className={`relative pt-2 text-center text-base font-bold ${
                                                userData?.imageUrl
                                                    ? "text-white"
                                                    : "text-purple"
                                            }`}
                                        >
                                            {userData?.imageUrl
                                                ? "Change Image"
                                                : "+ Upload Image"}
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
                                        htmlFor="firstName"
                                        className="flex flex-col md:flex-row md:items-center md:gap-4"
                                    >
                                        <p className="flex pb-1 text-xs text-grey md:w-[240px] md:text-base">
                                            First name <span>*</span>
                                        </p>

                                        <input
                                            className="rounded-lg border border-light-purple px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-full"
                                            type="text"
                                            placeholder="Ben"
                                            name="firstName"
                                            value={userData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <label
                                        htmlFor="lastName"
                                        className="flex flex-col md:flex-row md:items-center md:gap-4"
                                    >
                                        <p className="flex pb-1 text-xs text-grey md:w-[240px] md:text-base">
                                            Last name <span>*</span>
                                        </p>
                                        <input
                                            className="rounded-lg border border-light-purple px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-full"
                                            type="text"
                                            placeholder="Wright"
                                            name="lastName"
                                            value={userData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <label
                                        htmlFor="email"
                                        className="flex flex-col md:flex-row md:items-center md:gap-4"
                                    >
                                        <p className="pb-1 text-xs text-grey md:w-[240px] md:text-base">
                                            Email
                                        </p>
                                        <input
                                            className="rounded-lg border border-light-purple px-4 py-3 text-base text-dark-grey outline-none placeholder:text-dark-grey md:w-full"
                                            type="text"
                                            disabled
                                            name="email"
                                            value={userEmail || ""}
                                            placeholder="e.g. email@example.com"
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                </form>
                            </div>
                        </section>
                    </section>
                    <div className="border-t border-light-purple">
                        <div className="p-4 md:flex md:justify-end">
                            <Button
                                onClick={saveUserProfile}
                                className="w-full rounded-lg bg-purple py-[11px] text-base text-white md:w-fit md:px-7"
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
            </section>
            <ToastContainer />
        </section>
    );
}
