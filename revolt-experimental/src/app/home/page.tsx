
import dynamic from "next/dynamic";
import HomePageItem from "../home/Home_Items";

// ReVOLT Home Page
export const metadata = {
    title: "ReVOLT",
};

export default function HomePage() {
    return (
        <main>
            <HomePageItem />
        </main>
    );
}