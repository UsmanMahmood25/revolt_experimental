
import dynamic from "next/dynamic";
import SponsorsItem from "../sponsors/Sponsors_Items";

// ReVOLT Sponsors Page
export const metadata = {
    title: "ReVOLT Sponsors Page",
};

export default function Sponsors() {
    return (
        <main>
            <SponsorsItem />
        </main>
        
    );
}