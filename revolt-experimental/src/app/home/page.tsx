import Image from "next/image";
import Link from "next/link";
import home_styles from "@/styles/Home.module.css";
import ThreeScene from "./ThreeScene";

// ReVOLT Home Page
export const metadata = {
    title: "ReVOLT Home Page",
};

export default function HomePage() {
    return (
        <main>
            <div id={home_styles.home_pg_header}>
                <div id={home_styles.home_pg_h_text}>
                    <Link id={home_styles.home_pg_h_button} href="/projects#specific_section">Restore</Link>
                    <Link id={home_styles.home_pg_h_button} href="/team">Innovate</Link>
                    <Link id={home_styles.home_pg_h_button} href="/timeline">Modernize</Link>
                </div>
                <div id={home_styles.home_pg_h_img}>
                    <div style={{ position: 'relative', width: '100%', height: '25vw' }}>
                        <ThreeScene />
                    </div>
                </div>
            </div>

            <div id={home_styles.our_work_component}>
                <h1 id={home_styles.h1}>Home Page</h1>
            </div>

            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
            <h1 id={home_styles.h1}>Home Page</h1>
        </main>
    );
}