"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { toast } from "react-toastify";
import useSession from "./useSession";

interface signupProps {
    email: string;
    password: string;
    confirmPassword?: string;
}

interface loginProps {
    email: string;
    password: string;
}

export default function useSupabaseAuth() {
    const [error, setError] = useState<string | null>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useSession();
    const router = useRouter();
    const supabase = createClient();

    const signUp = async (values: signupProps) => {
        try {
            setIsLoading(true);
            const { email, password, confirmPassword } = values;

            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (password !== confirmPassword) {
                router.push("/");
            }

            if (error) {
                if (error) throw error;
            } else {
                toast.success("success", {
                    position: "bottom-right",
                    style: {
                        background: "#008000",
                        color: "#FFF",
                    },
                });
                router.push("/dashboard");
            }
        } catch (error: any) {
            setError((error as Error).message);
            setIsLoading(false);
            toast.error(`${error}`, {
                position: "bottom-right",
                style: {
                    background: "#FF0000",
                    color: "#FFF",
                },
            });
        }
    };

    const login = async (values: loginProps) => {
        try {
            setIsLoading(true);
            const { email, password } = values;

            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                if (error) throw error;
            } else {
                toast.success("success", {
                    position: "bottom-right",
                    style: {
                        background: "#008000",
                        color: "#FFF",
                    },
                });
                router.push("/dashboard");
            }
        } catch (error) {
            setError((error as Error).message);
            setIsLoading(false);
            toast.error(`${error}`, {
                position: "bottom-right",
                style: {
                    background: "#FF0000",
                    color: "#FFF",
                },
            });
        }
    };
    return { signUp, login, error, isLoading };
}
