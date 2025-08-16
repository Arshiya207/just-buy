"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {  ReactNode } from "react";
type NavLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  include?:boolean

};

export default function NavLink({
  children,
  className="",
  href,
  include=false
}: NavLinkProps) {
  const pathname = decodeURIComponent(usePathname()) ;

  return (
    <Link href={href}  className={include? pathname.includes(href)?className: "" : pathname===href?className:""}>
      {children}
    </Link>
  );
}
