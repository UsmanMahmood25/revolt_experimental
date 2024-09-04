
import TeamItem from "./Team_Items";
import dynamic from "next/dynamic";

// ReVOLT Team Page (Main)
export const metadata = {
    title: "ReVOLT Teams Page",
};


export default function Team() {
    return (
        <main>
            <TeamItem />
        </main>
    );
}