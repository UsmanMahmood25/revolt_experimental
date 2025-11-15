
import dynamic from "next/dynamic";
import VehicleItem from "./Vehicles_Items";

// ReVOLT Timeline Page
export const metadata = {
    title: "ReVOLT Vehicles Page",
};

export default function Timeline() {
    return (
        <main>
            <VehicleItem />
        </main>
    );
}