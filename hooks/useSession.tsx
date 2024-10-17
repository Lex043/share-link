"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function useSession() {
    const pathname = usePathname();
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
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
                    setUserId(session?.user?.id || null);
                }
            } catch (error) {
                console.error("Error checking session:", error);
            } finally {
                setIsLoading(false); // Set loading to false after checking session
            }
        };

        checkSession();
    }, [router, supabase]);

    return { userEmail, userId, isLoading };
}
