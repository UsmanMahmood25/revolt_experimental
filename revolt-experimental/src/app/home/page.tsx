import Image from "next/image";
import Link from "next/link";
import home_styles from "@/styles/Home.module.css";

// ReVOLT Home Page
export const metadata = {
    title: "ReVOLT Home Page",
};

export default function HomePage() {
    return (
        <h1 id={home_styles.h1}>Home Page</h1>
    );
}