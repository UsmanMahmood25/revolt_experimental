'use client';

import Image from "next/image";
import Link from "next/link";
import home_styles2 from "@/styles/Home.module.css";
import home_style from "@/styles/Home.module.scss";
import ThreeScene from "./ThreeScene";
import ThreeSceneTest from "./ThreeScene_Test";
import { useState, useEffect } from "react";

const WhatWeDo = () => {

    const [activeChoice, setActiveChoice] = useState<InfoContent | ''>("");
    type InfoContent = 'RESTORE' | 'INNOVATE' | 'MODERNIZE';

    const whatWeDoInfo: Record<InfoContent, string[]> = {
        "RESTORE" : [
            "Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude",
            "Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude",
            "Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude Text 1, Holy Molly Dude",
        ],

        "INNOVATE" : [
            "Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude",
            "Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude",
            "Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude Text 2, Awesome Dude",
        ],

        "MODERNIZE" : [
            "Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang",
            "Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang",
            "Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang Text 3, Woah Guy/Gal/Them/Gang",
        ]
    }
    
    return (
        <div className={home_style.wwd_c_main}>
            <div className={home_style.wwd_c_m_buttons}>
                {Object.keys(whatWeDoInfo).map(info => (
                    <div className={home_style.wwd_c_m_b_type} key={info}>
                        <button className={home_style.wwd_c_m_b_t_style} onClick={() => setActiveChoice(info as InfoContent)}>
                            {info}
                        </button>
                    </div>
                ))}
            </div>  
            <div className={home_style.wwd_c_m_info}>
                {activeChoice ? (
                    <ul>
                        {whatWeDoInfo[activeChoice].map((infoChoice, index) => (
                            <li className={home_style.wwd_c_m_i_style}key={index}>{infoChoice}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Select one of the 3 option to see more details</p>
                )}
            </div>
        </div>
    );
}

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
                <div className={home_style.wwa_content}>
                    <div className={home_style.wwa_c_text}>
                        <ul className={home_style.wwa_c_list}>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quam corrupti reprehenderit commodi consequuntur omnis, asperiores vero nam totam, distinctio quia accusamus pariatur amet fugit cumque. Tempora molestiae provident labore?
                                </p>
                            </li>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam eos voluptatum sed, aperiam officia odio dignissimos voluptatem deleniti excepturi earum maiores, quod debitis. Consequatur, accusamus! Labore, dolor! Quibusdam, facere.
                                </p>
                            </li>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia provident unde molestiae reiciendis quaerat voluptates facilis officia inventore itaque labore aut placeat amet, at, delectus dolores dicta ipsum voluptas? 
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={home_style.wwa_c_video}>
                        <iframe className={home_style.wwa_c_v_part}
                            src="https://www.youtube.com/embed/5yor70Px6j4?autoplay=1&mute=1&playlist=5yor70Px6j4&loop=1&controls=0">     
                        </iframe>
                    </div>
                </div>
            </div>

            <div className={home_style.what_we_do}>
                <div className={home_style.wwd_text}>
                    <p className={home_style.wwd_t_style}>
                        WHAT WE DO
                    </p>
                </div>
                <div className={home_style.wwd_content}>
                    <WhatWeDo />
                </div>
            </div>

            <div className={home_style.planned_comp}>

            </div>

            <div className={home_style.sponsors}>

            </div>

            <hr id={home_styles2.hr}></hr>

        </main>
    );
}