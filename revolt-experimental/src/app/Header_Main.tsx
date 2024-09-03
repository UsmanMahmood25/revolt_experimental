'use client';

import { usePathname } from'next/navigation';
import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Image from "next/image";
import Link from "next/link";
import header_styles from "@/styles/Header.module.scss";
import SidebarComponent from "@/app/Header_Sidebar";
import { useMediaQuery } from 'react-responsive';

interface TransitionLinkProps {
  to: string;
  children: ReactNode;
  href: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bars = document.getElementById('bars');

    bars?.classList.add('show');

    setTimeout(() => {
      bars?.classList.remove('show');
      bars?.classList.add('hide');
      window.scrollTo(0, 0);
      navigate(to);
    }, 800);

    setTimeout(() => {
      bars?.classList.remove('hide');
    }, 1600);
  };

  // Ensure children is a string
  const childrenString = typeof children === 'string' ? children.toLowerCase() : '';

  return (
    <a
      className={location.pathname.includes(childrenString) ? 'active' : ''}
      onClick={handleClicked}
    >
      {children}
    </a>
  );
};

const Bars = () => {
  return (
    <div>
      <div />
    </div>
  );
}

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