import { useState } from "react";
import Container from "./container";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="bg-white shadow-md fixed w-full h-12 md:h-14"
            style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}
        >
            <Container>
                <div className="w-full flex justify-end">
                    <ul
                        className={`absolute md:static bg-white md:bg-transparent w-[300px] md:w-auto h-screen md:h-auto px-5 ${open ? "left-0" : "-left-full"}  
                        flex flex-col cursor-pointer md:gap-6 md:flex-row transition-all duration-300`}
                    >
                        <li onClick={() => setOpen(!open)} className="py-4 pr-2 text-base border-b-2 border-transparent hover:border-gray-800">Home</li>
                        <li onClick={() => setOpen(!open)} className="py-4 pr-2 text-base border-b-2 border-transparent hover:border-gray-800">About</li>
                        <li onClick={() => setOpen(!open)} className="py-4 pr-2 text-base border-b-2 border-transparent hover:border-gray-800">Portfolio</li>
                        <li onClick={() => setOpen(!open)} className="py-4 pr-2 text-base border-b-2 border-transparent hover:border-gray-800">Blogs</li>
                        <li onClick={() => setOpen(!open)} className="py-4 pr-2 text-base border-b-2 border-transparent hover:border-gray-800">Docs</li>
                        <li onClick={() => setOpen(!open)} className="py-4 pr-2 text-base border-b-2 border-transparent md:hover:border-gray-800">Contact</li>
                        <button onClick={() => setOpen(!open)} className="border-2 border-[#fa6280] md:my-2 py-3 md:py-0 px-8 rounded transition-all duration-300 hover:shadow-md hover:bg-[#fa6280] hover:text-white">Resume</button>
                    </ul>
                </div>
            </Container>
            <button className="absolute top-2 md:hidden right-10 text-2xl" onClick={() => setOpen(!open)}>🎗️</button>
        </div>
    )
}

export default Header;