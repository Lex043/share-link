"use client";
import React from "react";
import useSession from "../hooks/useSession";
export default function Dashboard() {
    const { userEmail } = useSession();
    return useSession() && <div>Dashboard{userEmail}</div>;
}
