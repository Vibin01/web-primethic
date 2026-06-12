"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        // 👇 user scrolling down
        setShow(false);
      } else {
        // 👇 user scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed  top-0 left-0 z-10 flex justify-between items-center px-[5%] lg:px-[8%] w-full border-b border-[#D1E5FF] bg-white max-h-[120px]
       transition-transform duration-300 h-[60px] lg:h-[100px]  ${
         show
           ? "translate-y-0      "
           : "-translate-y-full"
       }
      `}
      >
        <div className="flex w-1/2">
          <Link href={"https://primethic.com/"} className="flex items-center gap-2 lg:gap-4" >
          <Image src="/logo/primethic-logo-blue.svg" alt="Primethic Logo" width={40} height={30} className="w-auto h-[30px] lg:h-[45px]" />
            <h1 className="text-h3 font-extrabold text-[#0668E1] drop-shadow-[0px_2px_4px_0px_#00000033,0px_0px_2px_0px_#00000033,0px_0px_1px_0px_#00000033]">
              PRIMETHIC
            </h1>
          </Link>
        </div>
        <div className="flex justify-end w-1/2 gap-md text-base font-medium  text-[#1B1C17]">
          {/* <button
            id="platform-button"
            onClick={() => {
              if (window.location.pathname !== "/") {
                router.push("/");
              sessionStorage.setItem("scrollToPlatform", "true");
              }
              else {
                scrollToSection("platform");
              }
            }}
            className="cursor-pointer"
          >
            Platform
          </button>
          <button
            id="team-button"
            onClick={() => {
              if (window.location.pathname !== "/") {
                router.push("/");
              sessionStorage.setItem("scrollToTeam", "true");
              } else {
                scrollToSection("team");
              }
            }}
            className="cursor-pointer"
          >
            Team
          </button> */}
          <Link href={"/"} className="hidden md:flex font-medium text-base hover:text-[#0668E1]">Home</Link>
          <button
           id="mission-button"
            onClick={() => {
              if (window.location.pathname !== "/") {
                router.push("/");
              sessionStorage.setItem("scrollToMission", "true");
              } else {
                scrollToSection("mission");
              }
            }}
            className="hidden md:flex cursor-pointer font-medium text-base hover:text-[#0668E1]"
          >Vision</button>
           <button
            id="mission-button"
            onClick={() => {
              if (window.location.pathname !== "/") {
                router.push("/");
              sessionStorage.setItem("scrollToMission", "true");
              } else {
                scrollToSection("mission");
              }
            }}
            className="hidden md:flex cursor-pointer font-medium text-base hover:text-[#0668E1]"
          >
            Mission
          </button>
          <Link  href={"/solutions"} className="hidden md:flex font-medium text-base hover:text-[#0668E1]">Solutions</Link>
  <MobileMenu
    isMenuOpen={isMenuOpen}
    setIsMenuOpen={setIsMenuOpen}
  />
        </div>
      </nav>
    </>
  );
};
