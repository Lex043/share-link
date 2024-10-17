import { useEffect, useState } from "react";
import { linkStore } from "@/store/link";
import { UserDataStore } from "@/store/user-data";
import { createClient } from "@/utils/supabase/client";

export default function useFetchUserData(
    userId: string | null,
    isLoading: boolean
) {
    const [loadingData, setLoadingData] = useState(true);
    const links = linkStore((state) => state.links);
    const { userData } = UserDataStore((state) => ({
        userData: state.userData,
    }));
    const supabase = createClient();

    useEffect(() => {
        const fetchUserData = async () => {
            if (!userId) {
                console.warn("User ID is not defined. Skipping fetch.");
                setLoadingData(false);
                return;
            }

            const { data, error } = await supabase
                .from("devlink_profiles")
                .select("*, devlink_links(*)")
                .eq("id", userId)
                .single();

            if (error) {
                console.error("Error fetching user data:", error);
            } else {
                const userLinks = data.devlink_links || [];
                linkStore.setState({ links: userLinks });
                UserDataStore.getState().setUserData({
                    firstName: data.first_name,
                    lastName: data.last_name,
                    email: data.email,
                    imageUrl: data.image_url,
                });
            }

            setLoadingData(false);
        };

        if (!isLoading) {
            fetchUserData();
        }
    }, [userId, isLoading]);

    return { isLoading, userData, links, loadingData };
}
