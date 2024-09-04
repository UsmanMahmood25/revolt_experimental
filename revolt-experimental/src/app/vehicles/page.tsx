
import dynamic from "next/dynamic";

// ReVOLT Timeline Page
export const metadata = {
    title: "ReVOLT Vehicles Page",
};

const DynamicVehicle = dynamic(() =>
    import('../vehicles/Vehicles_Items').then((mod) => mod.VehicleItem)
)

export default function Timeline() {
    return (
        <main>
            <DynamicVehicle />
        </main>
    );
}