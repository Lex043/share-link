"use client";
import React from "react";
import DashboardProfile from "../components/dashboard-profile";
import DashboardLink from "../components/dashboard-link";
import { activeTabStore } from "@/store/active-tab";
import useSession from "../hooks/useSession";

export default function Dashboard() {
    const isActive = activeTabStore((state) => state.isActive);

    return (
        useSession() && (
            <section className="mx-4 my-4 md:mx-0">
                {isActive === 1 && <DashboardLink />}
                {isActive === 2 && <DashboardProfile />}
            </section>
        )
    );
}
