'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [backgroundColor, setBackGroundColor] = useState('black');
    useEffect(()=>{
            document.addEventListener("scroll", () => {
              const bgColor = window.scrollY < 100 ? "red" : "blue";
              console.log('backColor>>>',bgColor, window.scrollY,`${backgroundColor}`)
              setBackGroundColor(bgColor)
            });
    },[])
  return (
    <nav className={`flexBetween max-container w-full padding-container z-30 py-5 sticky top-0 bg-[#f2f3f4] shadow-2xl`}>
        <Link href={"/"}>
            <Image src={'/hilink-logo.svg'} alt="Logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="lg:flexCenter hidden">
            <Button
                type='button'
                title="Login"
                icon='/user.svg'
                variant='btn_dark_green'
                full = {false}
            />
        </div>

        <Image
            src={'/menu.svg'}
            alt={"menu"}
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar