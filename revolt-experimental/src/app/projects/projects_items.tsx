'use client';

import { useEffect } from "react";
import projects_styles from "@/styles/Projects.module.css";

export default function ProjectsItem() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <main>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>

            <div id="specific_section">
                <h1 id={projects_styles.part}>-------------------------Specific Part</h1>
            </div>
            
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
            <h1 id={projects_styles.h1}>Projects Page</h1>
        </main>
    );
}
