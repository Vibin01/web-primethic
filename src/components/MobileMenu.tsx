"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {


  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
    const router = useRouter();
  
    const scrollToSection = (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        className="relative z-50 lg:hidden"
        onClick={() => {
          const newState = !isMenuOpen;
          setIsMenuOpen(newState);
        }}
        aria-label="Open menu"
      >
        {!isMenuOpen && <RiMenu5Fill className="h-6 w-6 " />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 z-[99999] h-[100dvh] w-full overflow-y-auto bg-[#F8F8F8] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#DCEBFF] px-6 py-7">
          <div className="flex items-center gap-md">
           <Link href={"https://primethic.com/"} className="flex items-center gap-2 lg:gap-4" >
          <Image src="/logo/primethic-logo-blue.svg" alt="Primethic Logo" width={40} height={30} className="w-auto h-[30px] lg:h-[45px]" />
            <h1 className="text-h3 font-extrabold text-[#0668E1] drop-shadow-[0px_2px_4px_0px_#00000033,0px_0px_2px_0px_#00000033,0px_0px_1px_0px_#00000033]">
              PRIMETHIC
            </h1>
          </Link>
          </div>

          <X
            onClick={() => setIsMenuOpen(false)}
            className="size-iconsize-xl cursor-pointer text-[#1B1C17]"
          />
        </div>

        {/* Menu */}
        <div className="px-lg">
          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={handleCloseMenu}
              className="border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Home
            </Link>

             <button
               id="mission-button"
            onClick={() => {
            handleCloseMenu()

              if (window.location.pathname !== "/") {
                router.push("/");
              sessionStorage.setItem("scrollToMission", "true");
              } else {
                scrollToSection("mission");
              }
            }}
              className="border-b border-[#E5E5E5] text-left py-md text-base font-medium text-[#1B1C17]"
            >
              Vision
            </button>

            <button
               id="mission-button"
            onClick={() => {
            handleCloseMenu()

              if (window.location.pathname !== "/") {
                router.push("/");
              sessionStorage.setItem("scrollToMission", "true");
              } else {
                scrollToSection("mission");
              }
            }}
              className="text-left border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Mission
            </button>

            <Link
              href="/solutions"
              onClick={handleCloseMenu}
              className="border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Solutions
            </Link>

          
          </nav>
          
          
        </div>
      </div>
    </>
  );
}
