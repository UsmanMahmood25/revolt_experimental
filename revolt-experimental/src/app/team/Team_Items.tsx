'use client';

import Image from "next/image";
import team_style from '@/styles/Team.module.scss';

const team_data = {
    executive_members: [
        { name: "Rostom Halouane", role: "Director", img: "/revolt_logo_pic_invert.png" },
        { name: "Tanveer Parhar" , role: "Director", img: "/revolt_logo_pic_invert.png"},
    ],
    electrical_members: [
        { name: "Spencer Bruke", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Anthony Truong", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Matin Nabizadeh", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Temuulen Ankhbayar", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Ibrahim Khalid", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Shaheer Mansoor", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Zarak Salim", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Nadithi Tissera", role: " ", img: "/revolt_logo_pic_invert.png" },
    ],
    mechanical_members: [
        { name: "Qasim Chaudhary", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Luis Chacon", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "EJ Hallado", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Masroor Mamoon", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Aldrich Varghees", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Matei Djukic", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Kassem Jarrah", role: " ", img: "/revolt_logo_pic_invert.png" },
    ],
    software_members: [
        { name: "Siem Debesay", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Usman Mahmood", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Mellisa Phongsa", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Matthew Liu", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Austin Bach", role: " ", img: "/revolt_logo_pic_invert.png" },
    ],
    business_members: [
        { name: "Muhammed Rafiuzzaman", role: "", img: "/revolt_logo_pic_invert.png" },
        { name: "Marya Rachdi", role: "", img: "/revolt_logo_pic_invert.png" },
        { name: "Kawthar Aroua", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Tirta Kusjanto", role: " ", img: "/revolt_logo_pic_invert.png" },
        { name: "Moyo Adeyemi", role: " ", img: "/revolt_logo_pic_invert.png" },

    ]
}

interface Team_Member {
    name: string;
    role: string;
    img: string;
}

interface Team_Section_Props {
    title: string;
    members: Team_Member[];
}

const Team_Section_Type: React.FC<Team_Section_Props> = ({ title, members }) => {
    return (
        <div className={team_style.team_section}>
            <h2 className={team_style.ts_title}>{title}</h2>
            <div className={team_style.ts_members}>
                {members.map((member, index) => (
                    <div key={index} className={team_style.team_member}>
                        <Image
                            src={member.img}
                            alt={member.name}
                            width={100}
                            height={100}
                            className={team_style.team_member_image}
                        />
                        <h3 className={team_style.team_member_name}>{member.name}</h3>
                        <p className={team_style.team_member_role}>{member.role}</p>
                    </div>
                ))}
            </div>
            <p className={team_style.member_break}> BREAK - DONT TOUCH </p>
        </div>
    );
}

export default function TeamItem() {
    return (
        <main className={team_style.team_page_main}>

            <div className={team_style.top_space}> 
                TOP SPACE - DONT TOUCH
            </div>

            {/* <div className={team_style.team_picture}>
                <h1 className={team_style.tp_title}>THE ReVOLT TEAM</h1>
                <div className={team_style.image_container}>
                    <div className={team_style.tp_team}></div>
                </div>
            </div> */}

            {/* <Image
                        src=""
                        alt=""
                        width={500}
                        height={500}
                        className={team_style.tp_team}
                    /> */}

            <p className={team_style.break}> BREAK - DONT TOUCH</p>

            <Team_Section_Type title="Executives" members={team_data.executive_members} />
            <Team_Section_Type title="Electrical Team" members={team_data.electrical_members} />
            <Team_Section_Type title="Mechanical Team" members={team_data.mechanical_members} />
            <Team_Section_Type title="Software Team" members={team_data.software_members} />
            <Team_Section_Type title="Business Team" members={team_data.business_members} />

            <div className={team_style.bottom_space}>
                BOTTOM SPACE - DONT TOUCH
            </div>

        </main>
    );
}