import Image from "next/image";
import Link from "next/link";
import ProjectsItem from "./Projects_Items";
import projects_styles from "@/styles/Projects.module.css";

// ReVOLT Projects Page
export const metadata = {
    title: "ReVOLT Projects Page",
};

export default function Projects() {
    return (
        <main>
            <ProjectsItem />
        </main>
    );
}