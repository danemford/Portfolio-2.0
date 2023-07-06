'use client'

import Link from "next/link"
import { AiOutlineMenu } from 'react-icons/ai'
import { Menu } from "@headlessui/react"
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const activeStyle = 'transition hover:text-sky-500 underline decoration-2 underline-offset-8';
    const nonActiveStyle = 'transition hover:text-sky-500';
    const pathname = usePathname();


    return (
        <header className="fixed top-0 w-full z-10 mb-16 bg-white/80 py-6 pb-6 backdrop-blur-sm">
            <nav className="flex mx-auto w-full max-w-3xl items-center justify-evenly px-2 py-6">
                <div className="relative">
                    <Menu>
                        <Menu.Button><AiOutlineMenu className="sm:hidden text-2xl cursor-pointer" /></Menu.Button>
                            <Menu.Items className='flex flex-col absolute left-1 mt-6 py-4 w-72 origin-top-right rounded-xl shadow-lg focus:outline-none bg-zinc-900 text-white'>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active ? 'inline-flex items-center gap-6 px-8 py-2 text-gray-300 text-sky-500 hover:bg-gray-600' : 'inline-flex items-center gap-6 px-8 py-2 text-gray-300'}`}
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active ? 'inline-flex items-center gap-6 px-8 py-2 text-gray-300 text-sky-500 hover:bg-gray-600' : 'inline-flex items-center gap-6 px-8 py-2 text-gray-300'}`}
                                        href="/posts"
                                    >
                                        Posts
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active ? 'inline-flex items-center gap-6 px-8 py-2 text-gray-300 text-sky-500 hover:bg-gray-600' : 'inline-flex items-center gap-6 px-8 py-2 text-gray-300'}`}
                                        href="/projects"
                                    >
                                        Projects
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active ? 'inline-flex items-center gap-6 px-8 py-2 text-gray-300 text-sky-500 hover:bg-gray-600' : 'inline-flex items-center gap-6 px-8 py-2 text-gray-300'}`}
                                        href="/#contact"
                                    >
                                        Contact
                                    </Link>
                                )}
                            </Menu.Item>
                            </Menu.Items>
                    </Menu>
                </div>
                <div className="flex mx-auto w-full max-w-3xl items-center justify-evenly px-2 py-6">
                    <ul class="hidden sm:flex flex-row items-center justify-evenly gap-6 font-medium ">
                        <li>
                            <Link
                                className={`${pathname === '/' ? activeStyle : nonActiveStyle}`}
                                href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${pathname === '/posts' ? activeStyle : nonActiveStyle}`}
                                href="/posts">
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${pathname === '/projects' ? activeStyle : nonActiveStyle}`}
                                href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${pathname === '/#contact' ? activeStyle : nonActiveStyle}`}
                                href="/#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
