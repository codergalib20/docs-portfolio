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

/*
Define interface for MenuItemProps that includes 
item object with id, name, and children propertie
*/
interface MenuItemProps {
    item: {
        id: number;
        name: string;
        children?: Array<MenuItemProps['item']>;
        // Optional children array of MenuItemProps objects
    };
}


/* Define a functional component that takes MenuItemProps as a prop */
const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    // Define a handleClick function that toggles the visibility of the sub-menu
    const handleClick = () => {
        setSubMenuOpen(!subMenuOpen); // Toggle the subMenuOpen state
    };

    return (
        <div>
            {/*
               Render the clickable menu item with a button or link, 
               depending on whether there are children
            */}
            <div onClick={handleClick} className="flex gap-2 items-center text-black  cursor-pointer">
                {/*If the menu item has children, render a button with a folder icon and the item name*/}
                {item.children ?
                    <button className="flex items-center gap-3"> <BsFillFolderSymlinkFill /> {item.name}</button> :
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
    {
        id: 3,
        name: 'Subscribers',
    },
    {
        id: 4,
        name: 'Mail'
    },
    {
        id: 5,
        name: 'Conversation'
    }
];