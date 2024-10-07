"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function useSession() {
    const pathname = usePathname();
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();
    useEffect(() => {
        const checkSession = async () => {
            try {
                const {
                    data: { session },
                } = await supabase.auth.getSession();

                if (pathname !== "/register" && !session) {
                    router.push("/");
                } else {
                    setUserEmail(session?.user?.email || null);
                }
            } catch (error) {
                console.error("Error checking session:", error);
            }
        };

        checkSession();
    }, [router, supabase]);

    return { userEmail };
}
