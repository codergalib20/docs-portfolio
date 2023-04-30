import menus from "@/fakeData/menus";
import Link from 'next/link';
import { useState } from "react";
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai';


export default function Dashboard() {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleClick = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div>
            <div className="flex h-screen">
                <div className="w-[260px] bg-[#9257fd] h-full p-4 ">
                    <SidebarMenu items={menuItems} />
                </div>
                <div></div>
            </div>
        </div>
    )
}

interface MenuItemProps {
    item: {
        id: number;
        name: string;
        children?: Array<MenuItemProps['item']>;
    };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleClick = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div>
            <div onClick={handleClick} className="flex gap-2 items-center">
                -  {item.name}
                {item.children && (
                    subMenuOpen ? <AiFillCaretDown /> : <AiFillCaretRight />
                )}
            </div>
            <div className="pl-4">
                {subMenuOpen && item.children && (
                    <ul>
                        {item.children.map((child) => (
                            <li key={child.id}>
                                <MenuItem item={child} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

interface SidebarMenuProps {
    items: Array<MenuItemProps['item']>;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <MenuItem item={item} />
                </li>
            ))}
        </ul>
    );
};

const menuItems: Array<MenuItemProps['item']> = [
    {
        id: 1,
        name: 'Item 1',
        children: [
            {
                id: 2,
                name: 'Subitem 1',
                children: [
                    {
                        id: 3,
                        name: 'Sub-subitem 1',
                    },
                ],
            },
            {
                id: 4,
                name: 'Subitem 2',
            },
        ],
    },
    {
        id: 5,
        name: 'Item 2',
        children: [
            {
                id: 1,
                name: 'Sub Item 1',
            },
            {
                id: 2,
                name: 'Sub Item 2',
            },
            {
                id: 3,
                name: 'Sub Item 3',
                children: [
                    {
                        id: 1,
                        name: 'Sub Item 1',
                    },
                    {
                        id: 2,
                        name: 'Sub Item 2',
                        children: [
                            {
                                id: 1,
                                name: 'Sub Item 1',
                            },
                            {
                                id: 2,
                                name: 'Sub Item 2',
                            },
                            {
                                id: 3,
                                name: 'Sub Item 3',
                            },
                            {
                                id: 4,
                                name: 'Sub Item 4',
                            },
                            {
                                id: 5,
                                name: 'Sub Item 5',
                            },
                        ]
                    },
                ]
            }
        ]
    },
];