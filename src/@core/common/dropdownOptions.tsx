import { FC, useState } from "react";

interface Props {
    options: { label: string; onClick(): void }[];
    head: React.ReactNode
};

const DropdownOptions: FC<Props> = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <button className="relative">
            <div className="min-w-max absolute top-full mt-4 right-2 z-10 border-2">
                <ul>
                    {options.map(({ label, onClick }: { label: any; onClick: any; }, index: number) => {
                        return <li key={label + index} onClick={onClick}></li>
                    })}
                </ul>
            </div>
        </button>
    )
};

export default DropdownOptions