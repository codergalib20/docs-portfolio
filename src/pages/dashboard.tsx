import menus from "@/fakeData/menus";
import Link from 'next/link';
import { useState } from "react";


export default function Dashboard() {


    return (
        <div>
            <div className="flex h-screen">
                <div className="w-[260px] bg-[#9257fd] h-full p-4 ">
                    {menus.map((item, index) => (
                        <Button key={index} item={item} />
                    ))}
                </div>
                <div></div>
            </div>
        </div>
    )
}

type ButtonTypes = {
    item: any;
}

const Button: React.FC<ButtonTypes> = ({ item }) => {
    const [subMenus, setSubMenus] = useState([]);
    return (
        <>
            <button className="block" onClick={() => setSubMenus(item?.sub)}>
                {item.name}
            </button>
            {subMenus.map((item, index) => (
                <LinkButton item={item} key={index} />
            ))}
        </>
    )
}

type LinkTypes = {
    item: any
}
const LinkButton: React.FC<LinkTypes> = ({ item }) => {
    console.log(item);
    return <Link href=""></Link>
}