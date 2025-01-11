'use client';

import Image from "next/image";
import team_style from '@/styles/Team.module.scss';

const team_data = {
    executive_members: [
        { name: "Rostom Halouane", role: "Director", img: "" },
        { name: "Tanveer Parhar" , role: "Co-Director", img: ""},
        { name: "Jun Chao", role: "Secretary", img: "" },
        { name: "Muhammed Rafi", role: "Sponsorer", img: "" },
    ],
    electrical_members: [
        { name: "Spencer Bruke", role: " ", img: "" },
        { name: "Anthony Truong", role: " ", img: "" },
        { name: "Heinz Veintimilla", role: " ", img: "" },
        { name: "Matin Nabizadeh", role: " ", img: "" },
    ],
    mechanical_members: [
        { name: "Quasim Chaudhary", role: " ", img: "" },
        { name: "Luis Chacon", role: " ", img: "" },
    ],
    software_members: [
        { name: "Siem", role: " ", img: "" },
        { name: "Usman Mahmood", role: " ", img: "" },
    ]
}

interface Team_Member {
    name: String;
    role: String;
    img: String;
}

interface Team_Section_Props {
    title: String;
    members: Team_Member[];
}

const Team_Section_Type: React.FC<Team_Section_Props> = ({ title, members }) => {
    return (
        <section className={team_style.team_section}>
            <h2 className={team_style.ts_title}>{title}</h2>
            <div className={team_style.ts_members}>
                
            </div>
        </section>
    );
}

export default function TeamItem() {
    return (
        <main className={team_style.team_page_main}>

            <div className={team_style.top_space}> 
                TOP SPACE - DONT TOUCH
            </div>

            <div className={team_style.team_picture}>
                <h1 className={team_style.tp_title}>THE ReVOLT TEAM</h1>
                <Image
                    src=""
                    alt=""
                    width={0}
                    height={0}
                    className={team_style.tp_team}
                />
            </div>

            <Team_Section_Type title="Executives" members={team_data.executive_members} />
            <Team_Section_Type title="Electrical Team" members={team_data.electrical_members} />
            <Team_Section_Type title="Mechanical Team" members={team_data.mechanical_members} />
            <Team_Section_Type title="Software Team" members={team_data.software_members} />

            <div className={team_style.bottom_space}>
                BOTTOM SPACE - DONT TOUCH
            </div>

        </main>
    );
}