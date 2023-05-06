import { FC } from "react";

interface Props {
    children: React.ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
    return (
        <div className="p-4 overflow-y-scroll h-full styled-scrollbars">
            {children}
        </div>
    )
};

export default DashboardLayout