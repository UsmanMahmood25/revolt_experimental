'use client';

import Image from "next/image";
import team_style from '@/styles/Team.module.scss';

export default function TeamItem() {
    return (
        <main className={team_style.team_page_main}>

            <div className={team_style.top_space}>
                <h1>Top Space</h1>
            </div>

            <div className={team_style.main_pic}>
                <div className={team_style.m_p_title}>
                    <h1> THE ReVOLT TEAM</h1>
                </div>
                <div className={team_style.m_p_img}>
                    <Image
                        src=''
                        alt=''
                        width={0}
                        height={0}
                        style={{}}
                    />
                </div>
            </div>

            <div className={team_style.execs}>
                <div className={team_style.e_title}>
                    <h1>EXECUTIVES</h1>
                </div>
                <div className={team_style.e_members}>
                    <ul className={team_style.e_m_list}>
                        <li>
                            <div className={team_style.director}>
                                <Image
                                    src='/revolt_logo_pic_invert.png'
                                    alt='Director Image'
                                    width={125}
                                    height={125}
                                    style={{alignContent: "center"}}
                                />
                                <h3>Rostom Halouane</h3>
                                <h4>Director</h4>
                            </div>
                        </li>
                        <li>
                            <div className={team_style.codirector}>
                                <Image
                                    src='/revolt_logo_pic_invert.png'
                                    alt='Co-Director Image'
                                    width={125}
                                    height={125}
                                    style={{}}
                                />
                                <h3>Tanveer Parhar</h3>
                                <h4>Co-Director</h4>
                            </div>
                        </li>
                        <li>
                            <div className={team_style.secretary}>
                                <Image
                                    src='/revolt_logo_pic_invert.png'
                                    alt='Secretary Image'
                                    width={125}
                                    height={125}
                                    style={{}}
                                />
                                <h3>Jun Chao</h3>
                                <h4>Secretary</h4>
                            </div>
                        </li>
                        <li>
                            <div className={team_style.sponsorer}>
                                <Image
                                    src='/revolt_logo_pic_invert.png'
                                    alt='Patron Image'
                                    width={125}
                                    height={125}
                                    style={{}}
                                />
                                <h3>Muhammed Rafi</h3>
                                <h4>Sponsorer</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={team_style.sub_teams}>
                <div className={team_style.s_t_elec}>
                    <h2>ELECTRICAL</h2>
                    <ul>
                        <li><h2>Spencer Bruke</h2></li>
                        <li><h2>Anthony Truong</h2></li>
                        <li><h2>Heinz Veintimilla</h2></li>
                        <li><h2>Matin Nabizadeh</h2></li>
                    </ul>
                </div>
                <div className={team_style.s_t_mech}>
                    <h2>MECHANICAL</h2>
                    <ul>
                        <li><h2>Quasim Chaudhary</h2></li>
                        <li><h2>Luis Chacon</h2></li>
                    </ul>
                </div>
                <div className={team_style.s_t_soft}>
                    <h2>SOFTWARE</h2>
                    <ul>
                        <li><h2>Siem</h2></li>
                        <li><h2>Usman Mahmood</h2></li>
                    </ul>
                </div>
            </div>

            <div className={team_style.bottom_space}>
                <h1>Bottom Space</h1>
            </div>

        </main>
    );
}