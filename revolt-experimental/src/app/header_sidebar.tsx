'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import header_styles from "@/styles/Header.module.scss";

const SidebarComponent: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const showSidebar = (): void => {
        setSidebarVisible(true);
    };

    const hideSidebar = (): void => {
        setSidebarVisible(false);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            hideSidebar();
        }
    };

    useEffect(() => {
        if (sidebarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (sidebarVisible && sidebarRef.current) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [sidebarVisible]);

    return (
        <div className={header_styles.sidebarContainer} ref={sidebarRef}>
            {!sidebarVisible && (
                <button onClick={showSidebar} className={header_styles.sidebarButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            )}
            {sidebarVisible && (
                <button onClick={hideSidebar} className={header_styles.closeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}
            <div className={`${header_styles.sidebar} ${sidebarVisible ? header_styles.visible : header_styles.hidden}`}>
                <Link href="/" className={header_styles.header_buttons} onClick={hideSidebar}>Home</Link>
                <Link href="/projects" className={header_styles.header_buttons} onClick={hideSidebar}>Projects</Link>
                <Link href="/timeline" className={header_styles.header_buttons} onClick={hideSidebar}>Timeline</Link>
                <Link href="/sponsors" className={header_styles.header_buttons} onClick={hideSidebar}>Sponsors</Link>
                <Link href="/team" className={header_styles.header_buttons} onClick={hideSidebar}>Team</Link>
                
                <div className={header_styles.sidebar_socials}>
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={header_styles.social_icon}>
                        <img src="/uofc_icon.png" alt="Facebook" />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={header_styles.social_icon}>
                        <img src="/gmail_icon.png" alt="Twitter" />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={header_styles.social_icon}>
                        <img src="/linkedin_icon.png" alt="Instagram" />
                    </Link>
                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={header_styles.social_icon}>
                        <img src="/instagram_icon.png" alt="LinkedIn" />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SidebarComponent;
