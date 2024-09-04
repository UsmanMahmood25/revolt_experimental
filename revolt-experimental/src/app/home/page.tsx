
import dynamic from "next/dynamic";

// ReVOLT Home Page
export const metadata = {
    title: "ReVOLT",
};

const DynamicHomePage = dynamic(() =>
    import('../home/Home_Items').then((mod) => mod.HomePageItem)
)

export default function HomePage() {
    return (
        <main>
            <DynamicHomePage />
        </main>
    );
}