"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { logoutUser } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { HeaderProps } from "./types";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-gray-800 py-2">
      <div className="container mx-auto flex items-center justify-center px-8">
        <span className="text-center text-sm font-medium tracking-wide text-white">
          Free shipping on all orders over $100 x FREE RETURNS
        </span>
      </div>
    </div>
  );
};


const Header = ({ user }: HeaderProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY;

      if (currentScrollY <= 100) {
        setIsOpen(true);
      } else if (scrolledUp) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`w-full transform transition-transform duration-300 ease-in-out bg-gray-800 shadow-md ${
          isOpen ? "translate-y-0" : "-translate-y-20"
        }`}
      >
        <AnnouncementBar />
      </div>
      <div className="w-full flex justify-between items-center py-3 bg-white/90 shadow-sm border-b border-gray-200 backdrop-blur-sm">
        <div className="flex justify-between items-center container mx-auto px-8">
          <div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
            <button className="text-gray-600 hover:text-gray-800 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
              </svg>
            </button>
            <nav className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-md font-medium tracking-wide">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 left-0.5 -translate-x-0.5"
          >
            <span className="text-2xl font-bold text-gray-800">E-Commerce</span>
          </Link>
          <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
            <button className="text-gray-600 hover:text-gray-800 hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>
            {user ? (
              <div className="flex items-center gap-8">
                <span className="text-gray-700 text-sm lg:text-lg">{user.email}</span>
                <Link
                  href="#"
                  className="text-red-600 hover:text-red-800 transition-colors"
                  onClick={async (e) => {
                    e.preventDefault();
                    await logoutUser();
                    router.refresh();
                  }}
                >
                  Sign Out
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/auth/sign-in" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-md">
                  Sign In
                </Link>
                <Link href="/auth/sign-up" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-md">
                  Sign Up
                </Link>
              </div>
            )}

            <button className="text-gray-600 hover:text-gray-800 relative">
              <svg
                width="30px"
                height="72px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  ></path>{" "}
                </g>
              </svg>
              <span className="absolute top-4 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
