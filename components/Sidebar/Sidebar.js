import { useRouter } from "next/router";
import Link from 'next/link'
import { AiOutlineHome, AiFillDatabase } from 'react-icons/ai'
import { MdOutlineInsights, MdMenu } from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import { useState } from "react";

function Sidebar() {
    const router = useRouter();
    const path = router.asPath
    const [activeSidebar, setActiveSidebar] = useState(false)
    const handleOnBackDropClick = (e) => {
        if (e.target.id === "backdrop") setActiveSidebar(false);
    };
    return (
        <>
            <div className="flex bg-green-600 fixed w-screen p-2 md:hidden z-20 gap-2">
                <MdMenu color="white" className="my-auto" onClick={() => setActiveSidebar(!activeSidebar)} /> <span className="text-white"> Dashboard</span>
            </div>
            {/* Mobile */}
            <div className={`bg-green-600 fixed min-h-full pt-12 z-10 overflow-y-auto text-xs ${!activeSidebar && 'hidden'}`}>
                <ul className="px-4 w-60 md:hidden overflow-y-scroll">
                    <div className="w-full">
                        <div className={`${path === '/home' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between py-1 px-2`}>
                            <Link href='/home' >
                                <a className={`flex gap-4 inline-block block  text-black-3 `}>
                                    <AiOutlineHome color='white' className="my-auto" />   <span className="text-sm"> Home Page</span>
                                </a>
                            </Link>
                        </div>
                        <div className={`${path === '/statistic' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                            <Link href='/statistic' >
                                <a className={`flex gap-4 inline-block block py-1 text-black-3 `}>
                                    <MdOutlineInsights color='white' className="my-auto" /><span className="text-sm"> Statistic</span>
                                </a>
                            </Link>
                        </div>
                        <div className={`${path === '/data' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                            <Link href='/data' >
                                <a className={`flex gap-4 inline-block block py-1 text-black-3 `}>
                                    <AiFillDatabase color='white' className="my-auto" />   <span className="text-sm"> Database</span>
                                </a>
                            </Link>
                        </div>
                        <div className={`${path === '/profile' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                            <Link href='/profile' >
                                <a className={`flex gap-4 inline-block block py-1 text-black-3 `}>
                                    <CgProfile color='white' className="my-auto" /><span className="text-sm"> Profile</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </ul>
            </div>
            {/* </div> */}
            {/* Desktop */}
            <div className={`bg-green-600 fixed min-h-screen z-10 overflow-y-auto pt-4`}>
                {/* <img src="/xeratic.png" alt="icon dashboard" className="md:flex hidden w-full w-32 py-4 ml-6" /> */}
                <ul className="px-4 inline-block w-60 md:inline-block hidden">
                    <div className={`${path === '/home' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/home' >
                            <a className={`flex gap-4 mt-1 inline-block block py-2 text-black-3 `}>
                                <AiOutlineHome color='white' />   <span className="text-sm"> Home Page</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/statistic' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/statistic' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <MdOutlineInsights color='white' /><span className="text-sm"> Statistic</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/data' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/data' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <AiFillDatabase color='white' />   <span className="text-sm"> Database</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/profile' ? 'text-white bg-green-500 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/profile' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <CgProfile color='white' /><span className="text-sm"> Profile</span>
                            </a>
                        </Link>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Sidebar