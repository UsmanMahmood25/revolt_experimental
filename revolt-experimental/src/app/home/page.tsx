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
                <div id={home_styles.owc_video}>
                    <iframe id={home_styles.owc_video_part}
                        src="https://www.youtube.com/embed/5yor70Px6j4?autoplay=1&mute=1&playlist=5yor70Px6j4&loop=1&controls=0">     
                    </iframe>
                </div>
                <div id={home_styles.owc_content}>
                    <h1 id={home_styles.h1}>Home Page</h1>
                    <p id={home_styles.p}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste aperiam consequatur maiores qui eum vel a. 
                        Sint quia porro dolore non quas temporibus, incidunt, soluta nam, officiis similique sapiente. Lorem ipsum 
                        dolor sit amet consectetur adipisicing elit. Molestias quis ipsam vero pariatur, dolor dolore. Cumque deleniti 
                        iure labore adipisci a sunt culpa error blanditiis, eius voluptatibus voluptatem quibusdam repellat.
                    </p>
                </div>
            </div>

            <hr id={home_styles.hr}></hr>

        </main>
    );
}