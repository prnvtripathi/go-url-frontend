"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from '@/components/ui/sheet';
import { navItems } from "@/data/navItems";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import Logo from './logo';

export default function MobileNav() {
    return (
        <nav className="flex md:hidden items-center justify-between px-4 py-2 z-20 relative">
            <Logo />
            <Sheet>
                <SheetTrigger asChild>
                    <CgMenuRight size={24} />
                </SheetTrigger>
                <SheetContent side="right" className="bg-black text-white">
                    <SheetHeader>
                        <SheetTitle className="text-white mb-4">On The Spot</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col items-start gap-y-5">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </SheetContent >
            </Sheet>


        </nav>
    )
}