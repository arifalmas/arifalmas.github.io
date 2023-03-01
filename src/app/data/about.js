import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineAppSettingsAlt, MdOutlineDesignServices } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
    title: "About Me",
    name: "Arif Almas",
    description: "I'm a Experienced Front End Web developer with over 1 years of experience in software industry. Excellent reputation for resolving problems and improving customer satisfaction. I'm a Front End Web developer to help you to build your personal website with seamless customization. I've worked on many complex data management project and I've been learning each day. I can work and manage from development to test to deployment & my another expertise is, I write very clean and readable code.",
    exports: ['React', 'Redux', 'Tailwind'],
    image: "/Asset/me.png",
    services: [
        {
            title: "Front-end",
            text: "I have experience in building websites and applications using the latest technologies. I have worked on projects using HTML, CSS, JavaScript, React, Redux, Next.js and more.",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "Back-end",
            text: "As a Back-End developer, I have experience in building using Node.js, Express, MongoDB, Firebase, Firestore, and more. I deploy my projects using Docker, AWS, Render, and Netlify. I'm always learnning about back-end.",
            icon: <MdOutlineAppSettingsAlt size={33} />
        },
        {
            title: "Mobile Apps",
            text: "I have experience in building mobile applications using React Native. I have also worked on projects using Android Studio. ",
            icon: <MdOutlineDesignServices size={33} />
        },
        {
            title: "Web Design",
            text: "I am a professional web designer and I focus very strictly on the UI of a website",
            icon: <SiAdobeindesign size={33} />
        },
    ]
}