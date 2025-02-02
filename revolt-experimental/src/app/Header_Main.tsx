'use client';

import { usePathname } from'next/navigation';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import header_styles from "@/styles/Header.module.scss";
import SidebarComponent from "@/app/header_sidebar";

export const CopyLink: React.FC = () => {
  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents navigation
    const link = "revoltevclub@gmail.com";

    navigator.clipboard.writeText(link)
      .then(() => alert("Link copied to clipboard!"))
      .catch(err => console.error("Failed to copy:", err));
  };

  return (
    <Link href="revoltevclub@gmail.com" onClick={handleCopy}>
      <Image 
        src="/gmail_icon.png" 
        alt="Gmail Icon"
        width={30}
        height={30}
        className={header_styles.social_icon}
      />
    </Link>
  );
};

function Header() {

  const pathname = usePathname();

    return (
      <header className={header_styles.header}>
        <div className={header_styles.header_tablet_container}>
          <div className={header_styles.header_image}>
            <div className={header_styles.header_main_image}>
              
                <Image 
                  src='/revolt_logo_pic_invert.png'
                  alt="ReVOLT Logo"
                  width={200}
                  height={50}
                  className={header_styles.responsive_image}
                />
              
            </div>
          </div>
        </div>
  
        <div className={header_styles.header_menu}>
          <Link href="/" className={`${header_styles.header_buttons} ${pathname === '/' ? header_styles.active : ''}`}>
            Home
          </Link>
          <Link href="/team" className={`${header_styles.header_buttons} ${pathname === '/team' ? header_styles.active : ''}`}>
            Team
          </Link>
          <Link href="/vehicles" className={`${header_styles.header_buttons} ${pathname === '/vehicles' ? header_styles.active : ''}`}>
            Vehicles
          </Link>
          <Link href="/sponsors" className={`${header_styles.header_buttons} ${pathname === '/sponsors' ? header_styles.active : ''}`}>
            Sponsor Us
          </Link>
        </div>

        <div className={header_styles.header_socials}>
          <Link href="https://suuofc.campuslabs.ca/engage/organization/revoltev" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/uofc_icon.png" 
              alt="SUofC Link"
              width={30}
              height={30}
              className={header_styles.social_icon}
            />
          </Link>

          <CopyLink />
          
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/instagram_icon.png" 
              alt="Instagram"
              width={30}
              height={30}
              className={header_styles.social_icon}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/revolt-ev/about/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkedin_icon.png" 
              alt="LinkedIn"
              width={30}
              height={30}
              className={header_styles.social_icon}
            />
          </Link>
        </div>
          
        <div className={header_styles.header_sidebar}>
          <SidebarComponent />
        </div>
  
      </header>
    );
}

export default Header;