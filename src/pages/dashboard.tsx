import menus from "@/fakeData/menus";

export default function Dashboard() {
    return (
        <div>
            <div className="flex h-screen">
                <div className="w-[260px] bg-[#9257fd] h-full p-4 ">
                    {menus.map((item, index) => (
                        <div key={index}>{item.name} {item.icon}</div>
                    ))}
                </div>
                <div></div>
            </div>
        </div>
    )
}