'use client';

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Slider from 'react-slick';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import home_styles2 from "@/styles/Home.module.css";
import home_style from "@/styles/Home.module.scss";
import ThreeSceneDemo from "./ThreeScene_Demo";
import ThreeSceneMain from "./ThreeScene_HPMain";
import { useState, useEffect, useRef } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const WhatWeDo = () => {

    const [activeChoice, setActiveChoice] = useState<InfoContent | ''>("");
    type InfoContent = 'RESTORE' | 'INNOVATE' | 'MODERNIZE';

    const whatWeDoInfo: Record<InfoContent, string[]> = {
        "RESTORE" : [
            "At the forefront of ReVOLT's mission is restoration by breathing life into old vehicles.",
            "We prioritize innovation, aiming to implement untested ideas with every project we undertake.",
            "The club specializes in the transformation of gas vehicles into modern eletric powertrains.",
        ],

        "INNOVATE" : [
            "At the forefront of ReVOLT's mission is restoration by breathing life into old vehicles.",
            "We prioritize innovation, aiming to implement untested ideas with every project we undertake.",
            "The club specializes in the transformation of gas vehicles into modern eletric powertrains.",
        ],

        "MODERNIZE" : [
            "At the forefront of ReVOLT's mission is restoration by breathing life into old vehicles.",
            "We prioritize innovation, aiming to implement untested ideas with every project we undertake.",
            "The club specializes in the transformation of gas vehicles into modern eletric powertrains.",               
        ]
    }
    
    return (
        <div className={home_style.wwd_c_main}>
            <div className={home_style.wwd_c_m}>
                <div className={home_style.wwd_text}>
                    <p className={home_style.wwd_t_style}>
                        WHAT WE DO
                    </p>
                </div>
                <div className={home_style.wwd_c_m_buttons}>
                    {Object.keys(whatWeDoInfo).map(info => (
                        <div className={home_style.wwd_c_m_b_type} key={info}>
                            <button className={home_style.wwd_c_m_b_t_style} onClick={() => setActiveChoice(info as InfoContent)}>
                                {info}
                            </button>
                        </div>
                    ))}
                </div>  
            </div>
            <div className={home_style.wwd_c_m_info}>
                {/* <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={activeChoice}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames={{
                            enter: home_style.text_enter,
                            enterActive: home_style.text_enter_active,
                            exit: home_style.text_exit,
                            exitActive: home_style.text_exit_active,
                        }}
                    > */}
                        <div>
                            {activeChoice ? (
                                <ul>
                                    {whatWeDoInfo[activeChoice].map((infoChoice, index) => (
                                        <li className={home_style.wwd_c_m_i_style} key={index}>{infoChoice}</li>
                                    ))}
                                </ul>
                            ) : (
                                <>
                                <p className={home_style.temp_text}>At the forefront of ReVOLT's mission is restoration by breathing life into old vehicles.</p>
                                <p className={home_style.temp_text}>We prioritize innovation, aiming to implement untested ideas with every project we undertake.</p>
                                <p className={home_style.temp_text}>The club specializes in the transformation of gas vehicles into modern eletric powertrains.</p>
                                </>
                            )}
                        </div>
                    {/* </CSSTransition>
                </SwitchTransition> */}
            </div>
        </div>
    );
};

const images = [
    '/h_pg_images/pic-1.jpg',
    '/h_pg_images/pic-2.jpg',
    '/h_pg_images/pic-3.jpg',
    '/h_pg_images/pic-4.jpg',
    '/h_pg_images/pic-5.jpg',
    '/h_pg_images/pic-6.jpg',
];
interface PicSliderProps {
    images: string[];
};
const PictureSlider: React.FC<PicSliderProps> = ({ images }) => {

    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,            // Using Custom Ones
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        afterChange: (current: number) => setCurrentSlide(current), // Update current slide
        responsive: [
            {
                breakpoint: 924,
                settings : {
                    slidesToShow: 2,
                    arrows: true,
                    dots: false,
                },
            },
        ],
    };

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div className={home_style.pic_slider}>
            <Slider {...settings} ref={sliderRef}>
                {images.map((image, index) => (
                    <div key={index} className={home_style.p_s_image}>
                        <img src={image} alt={`Slide ${index + 1}`}  />
                    </div>
                ))}
            </Slider>
            {/* Custom Dots */}
            <div className={home_style.custom_dots}>
                {images.map((_, index) => (
                <button
                    key={index}
                    className={`${home_style['dot']} ${currentSlide === index ? home_style['active'] : ''}`}
                    onClick={() => goToSlide(index)}
                />
                ))}
            </div>
        </div>
    );
};


/*
------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
*/

export default function HomePageItem() {
    
    return (
        <main>

            <div className={home_style.home_pg_header}>
                {/* <div className={home_style.bike_model}>
                    <ThreeSceneMain />
                </div> */}
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
                                    We are ReVOLT EV, a design team based in the university of Calgary focused on the development and innovation of EV vehicles.
                                </p>
                            </li>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                    Our first project transforms a motorcycle from gas to electric power, blending restoration with cutting-edge modernization.
                                </p>
                            </li>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                   The finished motorcycle will race at the AHRMA Formula Lightning eVarsity Challenge this comming June.
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* <div className={home_style.wwa_c_video}>
                        <iframe className={home_style.wwa_c_v_part}
                            src="https://www.youtube.com/embed/5yor70Px6j4?autoplay=1&mute=1&playlist=5yor70Px6j4&loop=1&controls=0">     
                        </iframe>
                    </div> */}
                </div>
            </div>

            <div className={home_style.what_we_do}>
                <div className={home_style.wwd_content}>
                    <WhatWeDo />
                </div>
                {/* <div className={home_style.wwd_pictures}>
                    <PictureSlider images={ images } />
                </div> */}
            </div>

            <div className={home_style.planned_comp}>
                <div className={home_style.pc_header}> 
                    <h1 className={home_style.pc_h_text}>PLANNED COMPETITIONS</h1>
                </div>

                <div className={home_style.pc_main_text}>
                    <div className={home_style.pc_m_text}>
                        <h2>AHRMA eMoto Varsity 2025</h2>
                        <ul className={home_style.pc_m_list}>
                            <li>
                                <p>Racing against other universities and private teams.</p>
                            </li>
                            <li>
                                <p>Competing to race fastest lap possible on the New Jersey Motorsports Park.</p>
                            </li>
                            <li>
                                <p>Evaluated for technical proficiency by motor experts.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={home_style.pc_m_img}>
                        <Image src="/h_pg_images/AHRMA_logo.png" alt="AHRMA Image" width={0} height={0} sizes="100vw" style={{ width: '42.5vw', height: 'auto', }} />
                    </div>

                </div>


                {/* Temporary Place Holder (No Planned Competitions) */}

                {/* <div className={home_style.pc_temp}>
                    <p className={home_style.pc_t_text}> To Be Announced </p>
                </div> */}

            </div>

            <div className={home_style.sponsors}>
                <div className={home_style.s_header}>
                    <h1 className={home_style.s_h_text}> SPONSORS</h1>
                </div>
                <div className={home_style.s_images}>

                    {/* Template to Insert Images */}
                    {/* <Image src='' alt='' sizes={'150vw'} width={0} height={0} style={{}} /> */}

                    <Image src='/sponsor_images/onshape_logo.png' alt='OnShape' sizes={'150vw'} width={0} height={0} style={{ width: '50vw', height: 'auto', padding: '1.5vw' }} />
                    <Image src='/sponsor_images/ucalg_schulich_logo.png' alt='UCalgary' sizes={'150vw'} width={0} height={0} style={{ width: '35vw', height: 'auto', paddingRight: '1.5vw', paddingLeft: '1.5vw', paddingBottom: '2.75vw' }} /> 
                    
                </div>
            </div>

            <hr id={home_styles2.hr}></hr>

        </main>
    );
};