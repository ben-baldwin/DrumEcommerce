import React from 'react'
import { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'
import { FaShoppingCart } from 'react-icons/fa'

import CompanyLogo from './CompanyLogo'

const Navbar = () => {
    return (
        <div className='w-full text-white bg-gradient-to-r from-slate-700 via-slate-800 to bg-slate-900'>
            <div className=' mx-auto max-w-screen-xl w-full flex justify-center sm:justify-between items-center py-2 px-4  text-white font-body flex-wrap'>

                {/*----------- Company Logo ------------ */}
                <CompanyLogo linkRoute='/' />
                {/* ------------- Links ----------------- */}

                <ul className='flex items-center '>

                    {/* ------------- Drums Menu ------------- */}

                    <li className='p-4 text-white'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="hover:text-slate-400">
                                Drums
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute Left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/acoustic"
                                                    className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                                                >
                                                    Acoustic
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/electric"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Electric
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/snares"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Snares
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>

                    {/* --------------Cymbals Menu --------------- */}

                    <li className='p-4 text-white'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="hover:text-slate-400">
                                Cymbals
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute Left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/crashCymbals"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Crash Cymbals
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/rideCymbals"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Ride Cymbals
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/hiHats"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Hi-Hats
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/splashCymbals"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Splash Cymbals
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>

                    {/* ----------- Accessories Menu -------------- */}

                    <li className='p-4 text-white'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="hover:text-slate-400">
                                Accessories
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                    <div className='py-1'>
                                        <Menu.Item >
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/pedals"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Pedals
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/thrones"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Thrones
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/drumSticks"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Drum Sticks
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    <li>
                        <a href='/cart' className="hover:text-slate-400"><FaShoppingCart size="1.2em" /></a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar