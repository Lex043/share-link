"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function useSession() {
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();
    useEffect(() => {
        const checkSession = async () => {
            try {
                const {
                    data: { session },
                } = await supabase.auth.getSession();

                if (session) {
                    setUserEmail(session.user?.email || null);
                    router.push("/dashboard");
                } else {
                    router.push("/");
                }
            } catch (error) {
                console.error("Error checking session:", error);
            }
        };

        checkSession();
    }, [router, supabase]);

    return { userEmail };
}
