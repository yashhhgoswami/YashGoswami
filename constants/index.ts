import { color } from "framer-motion";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/yashhhgoswami/",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/yashhhgoswami/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/yashhhgoswami",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },


] as const;

type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const FULLSTACK_SKILL: Skill[] = [];
export const OTHER_SKILL: Skill[] = [];

export const PROJECTS = [
  {
    title: "YG Motors – Unleash the Drive",
    
    image: "/projects/project1.png",
    link: "https://yg-motors.vercel.app/",
  },
  {
    title: "RailGuard – The Automatic Railway Gate System",

    image: "/projects/project2.png",
    link: "https://railguard-dashboard.onrender.com/",
  },
  {
    title: "My Personal Portfolio – Just Trying some designs",

    image: "/projects/project3.png",
    link: "https://my-portfolioo-beige.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/yashhhgoswami",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/yashhhgoswami/",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:yashhhgoswami@gmail.com",
      },
    ],
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    role: "Software Developer",
    company: "Teachrity",
    location: "Remote",
    period: "July, 2025 - Present",
    achievements: [
      "Built and maintained responsive, scalable UI components using React.js and Tailwind CSS.",
      "Collaborated with designers and backend engineers to deliver seamless end-to-end user flows.",
      "Optimised rendering performance and reduced load times across multiple devices and browsers.",
      "Implemented reusable component patterns for maintainability and faster development cycles."
    ]
  },
  {
    role: "Quantum Computing Intern",
    company: "Defence Research and Development Organisation (DRDO), India",
    location: "Onsite",
    period: "May, 2025 - July, 2025",
    achievements: [
      "Focused on photonic quantum computing, studying fundamental concepts and simulating key quantum algorithms.",
      "Implemented algorithms like Quantum Fourier Transform, Bernstein-Vazirani, and basic logic gates using the Perceval framework.",
      "Gained hands-on experience in simulating quantum circuits and visualizing quantum states using Python-based tools."
    ]
  },
  {
    role: "Content Team Lead",
    company: "IIITians Network",
    location: "Remote",
    period: "June, 2024 - Feb, 2025",
    achievements: [
      "Led a team of 8 content writers, planning and reviewing high-quality technical and non-technical content.",
      "Coordinated weekly content strategy and publication schedules, improving consistency and reader engagement.",
      "Contributed to the platform's steady growth by enhancing article quality and team productivity through structured feedback and mentoring."
    ]
  }
] as const;

export const CONTACT_DATA = [
  {
    name: "Email",
    icon: MdEmail,
    link: "mailto:yashhhgoswami@gmail.com",
    username: "yashhhgoswami@gmail.com",
    description: "Drop me a message anytime",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Resume",
    icon: HiOutlineDocumentText,
    link: "https://drive.google.com/file/d/1vW8rzA_XqyWotmoYyqkfXdkIcAdKupEJ/view?usp=drive_link",
    username: "View Resume",
    description: "Download or view my resume",
    color: "from-green-500 to-blue-500",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/yashhhgoswami/",
    username: "@yashhhgoswami",
    description: "Let's connect professionally",
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/yashhhgoswami",
    username: "@yashhhgoswami",
    description: "Check out my repositories",
    color: "from-gray-600 to-gray-400",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/yashhhgoswami",
    username: "@yashhhgoswami",
    description: "Follow me for updates",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/yashhhgoswami/",
    username: "@yashhhgoswami",
    description: "See my personal moments",
    color: "from-pink-500 to-purple-500",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1vW8rzA_XqyWotmoYyqkfXdkIcAdKupEJ/view?usp=drive_link",
    external: true,
  },
] as const;


