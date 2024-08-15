'use client';

import { usePathname } from'next/navigation';
import Image from "next/image";
import Link from "next/link";
import header_styles from "@/styles/Header.module.scss";
import SidebarComponent from "@/app/Header_Sidebar";
import { useState, useEffect } from 'react';

function Header() {

  const pathname = usePathname();
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 924);
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
    return (
      <header className={header_styles.header}>
        <div className={header_styles.header_tablet_container}>
          <div className={header_styles.header_image}>
            <div className={header_styles.header_main_image}>
              <Image 
                src={isTablet ? '/revolt_logo.png' : '/revolt_logo_pic_invert.png'}
                alt="ReVOLT Logo"
                width={200}
                height={50}
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
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/uofc_icon.png" 
              alt="Facebook"
              width={30}
              height={30}
              className={header_styles.social_icon}
            />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/gmail_icon.png" 
              alt="Twitter"
              width={30}
              height={30}
              className={header_styles.social_icon}
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkedin_icon.png" 
              alt="Instagram"
              width={30}
              height={30}
              className={header_styles.social_icon}
            />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/instagram_icon.png" 
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