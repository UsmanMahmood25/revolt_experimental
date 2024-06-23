'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import header_styles from "@/styles/Header.module.css";

const SidebarComponent: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

    const showSidebar = (): void => {
        setSidebarVisible(true);
    };

    const hideSidebar = (): void => {
        setSidebarVisible(false);
    };

    return (
        <div className={header_styles.sidebarContainer}>
            {!sidebarVisible && <button onClick={showSidebar} id={header_styles.sidebarButton}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></button>}
            {sidebarVisible && <button onClick={hideSidebar} id={header_styles.sidebarButton}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></button>}
            <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
                <Link id={header_styles.header_buttons} href="/">Home</Link>
                <Link id={header_styles.header_buttons} href="/projects">Projects</Link>
                <Link id={header_styles.header_buttons} href="/timeline">Timeline</Link>
                <Link id={header_styles.header_buttons} href="/sponsors">Sponsors</Link>
                <Link id={header_styles.header_buttons} href="/team">Team</Link>
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