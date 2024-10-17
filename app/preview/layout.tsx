import { ReactNode } from "react";
import DashboardNav from "../../components/dashboard-nav";

export const metadata = {
    title: "Preview",
    description: "Preview for each user.",
};

const layout = ({ children }: { children: ReactNode }) => {
    return <section className="bg-white">{children}</section>;
};

export default layout;
