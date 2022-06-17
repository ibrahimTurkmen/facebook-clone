import Image from "next/image";
import React from "react";
import {BellIcon, ChatIcon, ChevronDownIcon, FlagIcon, HomeIcon, PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon, ViewGridAddIcon} from '@heroicons/react/solid'
import HeaderIcon from "./HeaderIcon";
import { useSession,  signOut } from "next-auth/react"

function Header() {
    const {data: session} = useSession()
    console.log('session =>',session)
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 shadow-md">
      {/* LEFT */}
      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          layout="fixed"
          width={40}
          height={40}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-200 p-2">
            <SearchIcon className="h-6" />
            <input className="ml-2 hidden md:inline-block bg-transparent outline-none placeholder-gray-500 text-sm  flex-shrink" type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* Middle */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon}/>
        <HeaderIcon Icon={FlagIcon}/>
        <HeaderIcon Icon={PlayIcon}/>
        <HeaderIcon Icon={ShoppingCartIcon}/>
        <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end">
        <Image className="cursor-pointer rounded-full" onClick={()=> signOut()} objectFit="" src={session?.user?.image} layout="fixed" width={40} height={40}/>
         <p className="whitespace-nowrap sm:text-sm font-semibold pr-3 ml-2">{session?.user?.name}</p>
         <ViewGridAddIcon className="icon" />
         <ChatIcon className="icon" />
         <BellIcon className="icon" />
         <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
