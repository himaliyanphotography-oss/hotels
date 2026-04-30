import React from "react";
import Link from "next/link";
import Image from "next/image";
import li from "@/components/footer/assets/linkedin.svg"
import gh from "@/components/footer/assets/github.svg"
import ig from "@/components/footer/assets/instagram.svg"
import x from "@/components/footer/assets/x.svg"
import gmail from "@/components/footer/assets/gmail.svg"
import discord from "@/components/footer/assets/discord.svg"
import telegram from "@/components/footer/assets/telegram.svg"

export default function Social() {
    return (
        <div>
            <div className="flex gap-5">
                <Link className="bg-blue-800 md:bg-[#969696]/70 lg:bg-[#969696]/70 hover:bg-blue-800 rounded-full p-2 h-10 w-10" href="./"><Image alt="idk" className="bg-transparent" src={li}/></Link>
                <Link className="bg-gray-800 md:bg-[#969696]/70 lg:bg-[#969696]/70 hover:bg-gray-800 rounded-full p-2 h-10 w-10" href="./"><Image alt="idk" className="bg-transparent" src={x}/></Link>
                <Link className="bg-gradient-to-bl from-blue-500 via-red-500 to-yellow-500 lg:from-[#969696]/70 md:from-[#969696]/70 lg:via-[#969696]/70 md:via-[#969696]/70 lg:to-[#969696]/70 md:to-[#969696]/70 hover:from-blue-500 hover:via-red-500 via-50% hover:to-yellow-500 rounded-full p-2 h-10 w-10" href="https://www.instagram.com/?igsh=NnBxZnNiaDF4bzA="><Image alt="instagram logo" className="bg-transparent" src={ig}/></Link>
            </div>
        </div>
    )
}