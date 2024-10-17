import { ReactNode } from "react";
import DashboardNav from "../../components/dashboard-nav";

export const metadata = {
    title: "Dashboard",
    description: "Dashboard for each user.",
};

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="bg-light-grey pb-6 pt-4 md:p-6">
            <DashboardNav />
            {children}
        </section>
    );
};

export default layout;
