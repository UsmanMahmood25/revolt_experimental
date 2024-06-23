'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import header_styles from "@/styles/Header.module.css";

const SidebarComponent: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    const [selectedButton, setSelectedButton] = useState<string>('');
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
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarVisible]);

    return (
        <div className={header_styles.sidebarContainer}  ref={sidebarRef}>
            {!sidebarVisible && <button onClick={showSidebar} id={header_styles.sidebarButton}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>}
            {sidebarVisible && <button onClick={hideSidebar} id={header_styles.sidebarButton}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>}
            <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
                <Link href="/" id={header_styles.header_buttons} onClick={() => setSelectedButton('home')}>Home</Link>
                <Link href="/projects" id={header_styles.header_buttons} onClick={() => setSelectedButton('projects')}>Projects</Link>
                <Link href="/timeline" id={header_styles.header_buttons} onClick={() => setSelectedButton('timeline')}>Timeline</Link>
                <Link href="/sponsors" id={header_styles.header_buttons} onClick={() => setSelectedButton('sponsors')}>Sponsors</Link>
                <Link href="/team" id={header_styles.header_buttons} onClick={() => setSelectedButton('team')}>Team</Link>
            </div>
            <style jsx>{`
                .sidebar {
                    display: none;
                }
                .sidebar.visible {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
);
};

export default SidebarComponent;