import menus from "@/fakeData/menus";
import slug from "@/utils/slug";
import Link from 'next/link';
import { useState } from "react";
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai';
import { BiLinkAlt } from 'react-icons/bi';
import { BsFillFolderSymlinkFill } from 'react-icons/bs';

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
            <div onClick={handleClick} className="flex gap-2 items-center text-black  cursor-pointer">
                {item.children ?
                    <button className="flex items-center gap-3"> <BsFillFolderSymlinkFill /> item.name </button> :
                    <Link legacyBehavior href={`/dashboard?${slug(item.name)}`}><a className="flex gap-3 items-center">
                        <BiLinkAlt /> {item.name}</a>
                    </Link>}
                {item.children && (
                    subMenuOpen ? <AiFillCaretDown /> : <AiFillCaretRight />
                )}
            </div>
            <div className="pl-4">
                {subMenuOpen && item.children && (
                    <ul>
                        {item.children.map((child) => (
                            <li key={child.id} className="cursor-pointer mt-2">
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
        name: 'Documentation',
        children: [
            {
                id: 1,
                name: 'New Doc',
                children: [
                    {
                        id: 1,
                        name: 'Publishd',
                    },
                    {
                        id: 2,
                        name: 'Private'
                    }
                ],
            },
            {
                id: 2,
                name: 'Doc Manage',
                children: [
                    {
                        id: 1,
                        name: 'Edit',
                    },
                    {
                        id: 2,
                        name: 'Delete'
                    },
                    {
                        id: 3,
                        name: 'SEO'
                    }
                ]
            },
        ],
    },
    {
        id: 1,
        name: 'Blogs',
        children: [
            {
                id: 1,
                name: 'New Blog',
                children: [
                    {
                        id: 1,
                        name: 'Publishd',
                    },
                    {
                        id: 2,
                        name: 'Private'
                    }
                ],
            },
            {
                id: 2,
                name: 'Blogs',
                children: [
                    {
                        id: 1,
                        name: 'Edit',
                    },
                    {
                        id: 2,
                        name: 'Delete'
                    },
                    {
                        id: 3,
                        name: 'SEO'
                    }
                ]
            },
        ],
    },
];