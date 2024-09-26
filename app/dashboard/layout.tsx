import { ReactNode } from "react";
import DashboardNav from "../components/dashboard-nav";

export const metadata = {
    title: "Dashboard",
    description: "Dashboard for each user.",
};

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="bg-light-grey pb-6 md:p-6">
            <div className="mx-auto max-w-[1440px]">
                <DashboardNav />
                {children}
            </div>
        </section>
    );
};

export default layout;
