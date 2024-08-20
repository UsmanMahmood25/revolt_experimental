
import Image from "next/image";
import Link from "next/link";
import home_styles2 from "@/styles/Home.module.css";
import home_style from "@/styles/Home.module.scss";
import ThreeScene from "./ThreeScene";
import ThreeSceneTest from "./ThreeScene_Test";

export default function HomePageItem() {
    return (
        <main>

            <div className={home_style.home_pg_header}>
                <div className={home_style.bike_model}>
                    <ThreeSceneTest />
                </div>
                <div className={home_style.h_pg_h_text}>
                    <div className={home_style.reg_text_1}>
                        <p className={home_style.reg_text_1_1}> 
                            We are
                        </p>
                    </div>
                    <div className={home_style.large_text}>
                        <p className={home_style.large_text_1}> 
                            ReVOLT
                        </p>
                    </div>
                    <div className={home_style.reg_text_2}>
                        <p className={home_style.reg_text_2_1}> 
                            University of Calgary
                        </p>
                    </div>
                </div>
            </div>

            <div className={home_style.who_we_are}>
                <div className={home_style.wwa_header}> 
                    <h1 className={home_style.wwa_h_text}>WHO WE ARE</h1>
                </div>
                <div className={home_style.waa_content}>
                    <div className={home_style.wwa_c_text}>

                    </div>
                    <div className={home_style.wwa_c_video}>

                    </div>
                </div>
            </div>

            <div className={home_style.what_we_do}>

            </div>

            <div className={home_style.planned_comp}>

            </div>

            <div className={home_style.sponsors}>

            </div>





            <div id={home_styles2.home_pg_header}>
                <div id={home_styles2.home_pg_h_text}>
                    <Link id={home_styles2.home_pg_h_button} href="/projects#specific_section">Restore</Link>
                    <Link id={home_styles2.home_pg_h_button} href="/team">Innovate</Link>
                    <Link id={home_styles2.home_pg_h_button} href="/timeline">Modernize</Link>
                </div>
                <div id={home_styles2.home_pg_h_img}>
                    <div>
                        <ThreeScene />
                    </div>
                </div>
            </div>

            <div id={home_styles2.our_work_component}>
                <div id={home_styles2.owc_video}>
                    <iframe id={home_styles2.owc_video_part}
                        src="https://www.youtube.com/embed/5yor70Px6j4?autoplay=1&mute=1&playlist=5yor70Px6j4&loop=1&controls=0">     
                    </iframe>
                </div>
                <div id={home_styles2.owc_content}>
                    <h1 id={home_styles2.h1}>Home Page</h1>
                    <p id={home_styles2.p}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste aperiam consequatur maiores qui eum vel a. 
                        Sint quia porro dolore non quas temporibus, incidunt, soluta nam, officiis similique sapiente. Lorem ipsum 
                        dolor sit amet consectetur adipisicing elit. Molestias quis ipsam vero pariatur, dolor dolore. Cumque deleniti 
                        iure labore adipisci a sunt culpa error blanditiis, eius voluptatibus voluptatem quibusdam repellat.
                    </p>
                </div>
            </div>

            <hr id={home_styles2.hr}></hr>

        </main>
    );
}